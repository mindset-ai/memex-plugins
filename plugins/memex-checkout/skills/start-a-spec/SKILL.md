---
name: start-a-spec
description: Plan a new piece of work as a Memex Spec. Use when the user wants to start, plan, scope or write up new work, a feature or a change in Memex, or says "make a spec for…".
---

# Start a Spec in Memex

A Spec holds a piece of work's purpose, the decisions behind it, its acceptance criteria and, once it reaches build, its tasks. These steps use the Memex MCP tools.

1. **Pick the Memex.** Call `list_memexes`. If the user belongs to more than one, ask which one the Spec belongs in. Don't assume their personal Memex.
2. **Check what already exists.** Call `search_memex` with the topic. If an existing Spec or decision covers it, show the user and ask whether to extend that instead.
3. **Create the Spec.** Call `create_doc` with a short, specific title. It starts in `draft`.
4. **Write the why.** Use `section` (verb `update`) to fill the Overview: the problem, who it is for, and what done looks like. Keep the user's own words where you can.
5. **Record the open choices.** For each real fork in the work (two or more reasonable ways to do something), call `decision` (verb `create`) with the question and the options. Resolve a decision only when the user has made the call.
6. **Stop before tasks.** Tasks can only be added once the Spec is in `build`. To move it on, call `assess_spec` with `mode: "phase"` and show the user the readiness check; moving phase is their decision.

End by giving the user the Spec's link and the list of open decisions.

For the phases and their rules, call `get_information` with `topic: "phases"`.
