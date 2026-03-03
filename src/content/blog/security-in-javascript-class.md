---
title: "Why I Teach Security in a JavaScript Class"
subtitle: "Because 60% of the job isn't writing code"
description: "The case for embedding security fundamentals into every coding course—because professional development means more than syntax."
pubDate: 2026-02-15
category: tutorials
draft: false
---

This is a JavaScript class. Students signed up to learn JavaScript. So why am I talking about security audits, npm vulnerabilities, and environment variables?

Fair question. Here's my answer.

## The honest truth

Because this is what the job actually looks like.

When companies hire a "JavaScript developer," they don't mean someone who only writes functions. They mean someone who can:

- Choose the right packages and keep them updated
- Handle API keys without leaking them
- Review code before it ships
- Use Git without breaking the team's workflow
- Notice when something looks wrong

Writing code is maybe 40% of the work. The rest is everything around the code—the tooling, the workflow, the judgment calls.

Nobody tells students this in their first class. I tell them now.

## What a typical day looks like

Here's what a day might look like at a first dev job:

1. Pull the latest code from the team's repo
2. Create a branch for your task
3. Write some code (finally!)
4. Realize you need a package, evaluate options, install one
5. Notice `npm audit` flagged a vulnerability in something you didn't write
6. Open a pull request
7. Respond to code review comments
8. Merge, deploy, hope nothing breaks

Step 3 is "writing JavaScript." The other seven steps? That's also the job.

If students only know how to write functions but can't navigate the rest, they'll struggle on day one. I'd rather they didn't.

## The npm reality

When you run `npm install` for a typical project, you might add a handful of packages to your `package.json`. But open `node_modules` and count the folders.

Your code might be 9 MB. The code you depend on is 37 MB. Other people wrote it. You've never read it. You're trusting it to run on your machine and your users' browsers.

Students are already dependency managers whether they realize it or not. The question is whether they're good ones or careless ones.

## The three most common beginner mistakes

| Mistake                                     | What happens                                        |
| ------------------------------------------- | --------------------------------------------------- |
| Displaying user input without sanitizing it | Attackers run code in your users' browsers (XSS)    |
| Putting API keys in source code             | Anyone with repo access can steal credentials       |
| Ignoring outdated dependencies              | Known exploits that automated tools find in seconds |

These aren't advanced attacks. They're the programming equivalent of leaving your front door unlocked. You wouldn't need a hacker—just someone who checks.

Every one of these mistakes shows up in real production code. Every one is preventable if you know what to look for.

## The AI angle

"But I'll just use AI to write my code."

Great. AI generates code fast. It's genuinely useful. But here's the thing: **AI doesn't think about security.** It writes code that works. It doesn't write code that's safe.

AI will:

- Use `innerHTML` instead of `textContent` because it works
- Hardcode an API key because you asked for a "working example"
- Suggest a package it was trained on, even if that package has known vulnerabilities now

Someone has to catch these problems. AI won't. Your linter might catch some. Your code reviewer might catch others. But the first line of defense is you—the developer who knows what to look for.

This is the strongest argument for learning security basics: the more code that gets generated automatically, the more important it is that humans can evaluate it.

## What students actually learn

My "Security Safari" assignment isn't really about security. It's about the workflow.

Students practice:

1. Reading someone else's code and figuring out what it does
2. Identifying problems using tools and their own judgment
3. Creating a branch for each fix
4. Making the smallest, cleanest change
5. Documenting what they did and why
6. Opening a pull request with a clear description
7. Merging and repeating

This is literally the day-one workflow at any software job. The security theme gives them something concrete to find and fix. But the skill they're building is: "I can work on a real codebase with a real workflow."

That's what employers are looking for. Not "can you write a for loop"—they know you can Google that. They want to know: can you operate in a professional development environment?

## The long game

The developers who move up fastest aren't always the ones who write the cleverest code. They're the ones who understand the full picture—how code gets reviewed, how dependencies get managed, how secrets stay safe, how teams ship without breaking things.

That's the stuff that turns a junior developer into someone a team actually relies on.

I'd rather students learn it now, before their first job, than figure it out the hard way.

---

_Security fundamentals aren't a separate topic. They're part of what "knowing JavaScript" means in 2026._
