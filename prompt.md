# Lesson 04 — Prompts

## Prompt 1

We are writing AgentClinic, a place for AI agents to get relief from their humans. Look in the README.md for input from stakeholders.

## Prompt 2

Let's create a "constitution" in a specs directory:
•⁠  ⁠⁠ mission.md ⁠
•⁠  ⁠⁠ tech-stack.md ⁠
•⁠  ⁠⁠ roadmap.md ⁠ for high-level implementation order, in very small phases of work.

Important: You must use your AskUserQuestion tool, grouped on these 3, before writing to disk.

## Prompt 3

Use server-side TypeScript and recommend a framework.

## Prompt 4

Add a target audience to the mission:
•⁠  ⁠Course students learning spec-driven development with AI coding agents
•⁠  ⁠Developers giving AI coding demos at conference booths

## Prompt 5

In tech stack add that we use SQLite.

# Lesson 05 — Prompts

## Prompt 1

Find the next phase on specs/roadmap.md and make a branch, ask me about the feature spec.
Create:
 - A new directory YYYY-MM-DD-feature-name under specs for this feature work
 - In there:
  - ⁠ plan.md ⁠ as a series of numbered task groups.
  - ⁠ requirements.md ⁠ for the scope, decisions, context
  - ⁠ validation.md ⁠ for how to know the implementation succeeded and can be merged

Refer to specs/mission.md and specs/tech-stack.md for guidance.

Important: You must use your AskUserQuestion tool, grouped on these 3, before writing to disk.

## Prompt 2

Add a task group to the plan to have a minimal AgentClinic home page and update the rest of the feature spec to be in sync.

# Lesson 06 — Prompts

## Prompt 1

Implement the remaining task groups.

# Lesson 07 — Prompts

## Prompt 1

Update specs/2026-03-30-hello-hono/plan.md and implementation of a main layout component with a header/main/footer as three subcomponents. Make a CSS file, import it, and link to it.

## Prompt 2

Update the spec to capture that the header, footer, and main components should be in their own files.

## Prompt 3

Mark this specs/roadmap.md phase as complete, commit this work, switch to main, and merge this branch, then delete it.

# Lesson 08 — Prompts

## Prompt 1

Update this tech-stack.md to capture that we want to use Vitest tests for validation and write a script in package.json.

## Prompt 2

Update existing specs and code to reflect these testing changes.

## Prompt 3

Write a new test suite using the specified testing framework.

## Prompt 4

The product's web UI should follow responsive design. Update the product specs and all feature specs to reflect this, as well as any code.

## Prompt 5

I want to keep a CHANGELOG.md in the project root, with headings for dates. If no changelog, examine git commits and add bullets for each date. Then, as we work, we will manually invoke this skill before merging. Help me write a skill for this.

## Prompt 6

Use your changelog skill to update the changelog.

## Prompt 7

Commit this, switch to main, and merge this branch, then delete it.

## Prompt 8

Go to the roadmap.md and combine phases 2-3-4-5 into a new phase 2.


# Lesson 09 — Prompts

## Prompt 1

Our brand colors are orange and black.

## Prompt 2

Use extracted props definitions with a TypeScript type instead of inline and re-run tests.

## Prompt 3

Do a deep review: Spawn multiple subagents to go through all the changes on this branch from three different perspectives and see if anything doesn't make sense, could be better, etc.

## Prompt 4

Use your changelog skill to update the changelog with work done on this branch.

# Lesson 10 — Prompts

## Prompt 1

Go through all the features on specs/roadmap.md, make a mvp branch, and ask me about the feature specs needed to complete an MVP.
Create:
 - A new directory under specs for this feature work
 - In there:
  - ⁠ plan.md ⁠ for the task list
  - ⁠ requirements.md ⁠ for the scope, decisions, context
  - ⁠ validation.md ⁠ for how to know the implementation succeeded and can be merged

Refer to specs/mission.md and specs/tech-stack.md plus the existing feature specs for guidance.

Important: You must use your AskUserQuestion tool, grouped on these 3, before writing to disk.

## Prompt 2

Implement this plan.

## Prompt 3

Based on the MVP, did you find anything that needs clarification in the specs?


# Lesson 11 — Prompts

## Prompt 1

We have an AgentClinic project, a place for AI agents to get relief from their humans.

Look in README.md for input from stakeholders. Make a constitution in a specs directory:
•⁠  ⁠⁠ mission.md ⁠
•⁠  ⁠⁠ tech-stack.md ⁠
•⁠  ⁠⁠ roadmap.md ⁠ should be based on the TODO.md for high-level implementation order, in very small phases of work.

Interview me about mission, target audience, tech stack gaps.

Important: You must use your AskUserQuestion tool, grouped on these 3, before writing to disk.

## Prompt 2

Implement the plan.

# Lesson 12 — Prompts

## Prompt 1

I want to stop repeating the feature spec prompt. Use your skill creator to help me write a "feature spec" local skill. Here is the previous prompt:

Find the next phase on specs/roadmap.md and make a branch, ask me about the feature spec.
Create:
 - A new directory YYYY-MM-DD-feature-name under specs for this feature work
 - In there:
  - ⁠ plan.md ⁠ as a series of numbered task groups.
  - ⁠ requirements.md ⁠ for the scope, decisions, context
  - ⁠ validation.md ⁠ for how to know the implementation succeeded and can be merged

Refer to specs/mission.md and specs/tech-stack.md for guidance.

Important: You must use your AskUserQuestion tool, grouped on these 3, before writing to disk.

## Prompt 2

Use your feature-spec skill to work on the next roadmap feature.

# Lesson 13 — Prompts

## Prompt 1

What parts of our code need more tests?