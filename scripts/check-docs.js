#!/usr/bin/env node
/**
 * check-docs.js - Validate documentation alignment
 * Ensures README.md and CLAUDE.md stay in sync with package.json and project structure
 */

import { readFileSync, existsSync } from "fs";
import { join } from "path";

const ROOT = process.cwd();
let errors = [];

// Load files
function loadFile(path) {
  const fullPath = join(ROOT, path);
  if (!existsSync(fullPath)) {
    return null;
  }
  return readFileSync(fullPath, "utf-8");
}

// Extract commands from markdown code blocks
function extractCommands(markdown, runner = "bun") {
  const pattern = new RegExp(`${runner} (?:run )?([\\w:-]+)`, "g");
  const matches = [...markdown.matchAll(pattern)];
  return [...new Set(matches.map((m) => m[1]))];
}

// Check 1: README commands match package.json scripts
function checkCommandsMatch() {
  const pkg = JSON.parse(loadFile("package.json"));
  const readme = loadFile("README.md");
  const claude = loadFile("CLAUDE.md");

  const pkgScripts = Object.keys(pkg.scripts || {});
  const readmeCommands = extractCommands(readme);
  const claudeCommands = extractCommands(claude);

  // Check README references valid scripts
  for (const cmd of readmeCommands) {
    if (!pkgScripts.includes(cmd) && cmd !== "install") {
      errors.push(`README references 'bun run ${cmd}' but package.json has no '${cmd}' script`);
    }
  }

  // Check CLAUDE.md references valid scripts
  for (const cmd of claudeCommands) {
    if (!pkgScripts.includes(cmd) && cmd !== "install") {
      errors.push(`CLAUDE.md references 'bun run ${cmd}' but package.json has no '${cmd}' script`);
    }
  }

  // Check consistency between README and CLAUDE.md
  const readmeSet = new Set(readmeCommands);
  const claudeSet = new Set(claudeCommands);

  for (const cmd of ["dev", "build", "preview"]) {
    if (readmeSet.has(cmd) !== claudeSet.has(cmd)) {
      errors.push(
        `Command '${cmd}' is in ${readmeSet.has(cmd) ? "README" : "CLAUDE.md"} but not both`,
      );
    }
  }
}

// Check 2: Project structure directories exist
function checkStructureExists() {
  const readme = loadFile("README.md");

  // Extract directory paths from the structure block
  const structureMatch = readme.match(/```text\n([\s\S]*?)```/);
  if (!structureMatch) return;

  const structure = structureMatch[1];
  const dirs = [
    "src/components",
    "src/content",
    "src/layouts",
    "src/pages",
    "src/styles",
    "public",
  ];

  for (const dir of dirs) {
    if (!existsSync(join(ROOT, dir))) {
      errors.push(`README documents '${dir}/' but directory doesn't exist`);
    }
  }
}

// Check 3: Key integrations are documented
function checkIntegrations() {
  const pkg = JSON.parse(loadFile("package.json"));
  const readme = loadFile("README.md");
  const claude = loadFile("CLAUDE.md");
  const docs = (readme || "") + (claude || "");

  // Key integrations that should be mentioned somewhere
  const integrations = {
    "astro-expressive-code": "code highlighting with copy buttons",
    "rehype-slug": "heading anchor links",
    "rehype-autolink-headings": "heading anchor links",
  };

  for (const [pkg_name, feature] of Object.entries(integrations)) {
    if (pkg.dependencies?.[pkg_name] || pkg.devDependencies?.[pkg_name]) {
      // Check if feature or package is mentioned
      const mentioned =
        docs.toLowerCase().includes(pkg_name.toLowerCase()) ||
        docs.toLowerCase().includes(feature.toLowerCase());
      if (!mentioned) {
        errors.push(
          `Package '${pkg_name}' (${feature}) installed but not documented in README or CLAUDE.md`,
        );
      }
    }
  }
}

// Check 4: Categories in README match content schema
function checkCategories() {
  const readme = loadFile("README.md");
  const schema = loadFile("src/content.config.ts");

  if (!schema) return;

  // Extract categories from README
  const readmeCategories = [];
  const catMatch = readme.match(/### Categories\n\n([\s\S]*?)(?=\n##|\n$)/);
  if (catMatch) {
    const matches = catMatch[1].matchAll(/\*\*(\w+)\*\*/g);
    for (const m of matches) {
      readmeCategories.push(m[1]);
    }
  }

  // Extract categories from schema
  const schemaMatch = schema.match(/z\.enum\(\[([\s\S]*?)\]\)/);
  if (schemaMatch) {
    const schemaCategories =
      schemaMatch[1].match(/'(\w+)'/g)?.map((s) => s.replace(/'/g, "")) || [];

    for (const cat of readmeCategories) {
      if (!schemaCategories.includes(cat)) {
        errors.push(`README lists category '${cat}' but it's not in content schema`);
      }
    }
  }
}

// Run all checks
console.log("Checking documentation alignment...\n");

checkCommandsMatch();
checkStructureExists();
checkIntegrations();
checkCategories();

if (errors.length > 0) {
  console.log("Documentation alignment issues found:\n");
  errors.forEach((e) => console.log(`  ✗ ${e}`));
  console.log(`\n${errors.length} issue(s) found. Fix before committing.`);
  process.exit(1);
} else {
  console.log("✓ Documentation is aligned");
  process.exit(0);
}
