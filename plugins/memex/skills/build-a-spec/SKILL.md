---
name: build-a-spec
description: Build the work described in a Memex Spec, task by task, and keep Memex up to date. Use when the user asks to build, implement or pick up a Spec or a task from Memex (for example "build spec-12", "work on t-3").
---

# Build a Spec from Memex

1. **Read it first.** Call `get_doc` on the Spec. Read its resolved decisions, acceptance criteria and tasks before changing any code. Decisions that name files or functions are checked against the current source, not memory.
2. **Check the rules that apply.** Call `search_memex` with `kind: "standard"` for the areas the work touches (testing, security, database, UI), and follow what they say.
3. **Claim it.** Call `role` with verb `claim` on the Spec, so the files you edit in this session are linked to it.
4. **Work one task at a time.** Call `task` (verb `update`) to set a task to `in_progress` when you start it. If the Spec is in `build` and has no tasks yet, propose a short task list to the user before creating them with `task` (verb `create`).
5. **Complete means verified.** Set a task to `complete` only after its tests and type checks have run and the changed path was exercised. If something can't be done from here (it needs a person, access or an outside system), say so and use `kick_task_to_issue` rather than leaving it in progress.
6. **Capture what comes up.** A new choice that the work depends on is a `decision`. An unrelated follow-up is an `issue` (verb `register`).
7. **Hand over.** When the tasks are done, call `write_qa_report` with what changed and which tests ran, then tell the user. Moving the Spec to `verify` or `done` is their call.

For more on tasks, acceptance criteria and test evidence, call `get_information` with no arguments to see the topics.
