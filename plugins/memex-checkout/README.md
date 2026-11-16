# Memex for Claude Code

[Memex](https://www.memex.ai) is the shared plan for teams building software with AI agents. Work lives in Specs: living documents that hold a piece of work's purpose, the decisions behind it, its acceptance criteria and its tasks.

This plugin brings Memex into Claude Code:

- **The Memex MCP server** (`https://memex.ai/mcp`). Claude can find and read your Specs, search past decisions, draft a new Spec with you, record decisions and keep tasks up to date. You sign in once with OAuth; there is no token to paste. It uses the same address as the Memex connector in the Claude directory, so if you have both, Claude Code shows one set of Memex tools.
- **Two skills.** `start-a-spec` plans new work as a Spec. `build-a-spec` builds a Spec task by task and keeps Memex current as it goes.
- **Spec ↔ code link.** Once Claude claims or edits a Spec, each file it edits in that session is recorded against the Spec: the file path, the Spec, and the git branch and commit. Never source code or prompts. This part needs a one-time checkout key: run `npx -y memex-ai checkout-setup` (one browser sign-in). Without it, everything else still works.

## Install

```
claude plugin marketplace add mindset-ai/memex-plugins
claude plugin install memex-checkout@memex
```

Then reload Claude Code and run `/mcp` to sign in to Memex.

Uninstall at any time with `claude plugin uninstall memex-checkout@memex`.

## Data

The MCP server stores only what you ask it to store in Memex (Specs, decisions, comments, tasks). The Spec ↔ code link sends changed file paths, the claimed Spec, and the git branch and commit, and only while a Spec is claimed in that session. See the [privacy policy](https://www.memex.ai/legal/privacy/).

## Support

[support@memex.ai](mailto:support@memex.ai) · [Documentation](https://www.memex.ai/docs)

## License

See LICENSE.md.
