# Memex

[Memex](https://www.memex.ai) is the shared plan for teams building software with AI agents. Work lives in Specs: living documents that hold a piece of work's purpose, the decisions behind it, its acceptance criteria and its tasks.

This plugin gives Claude:

- **The Memex MCP server** (`https://memex.ai/mcp`). Claude can find and read your Specs, search past decisions, draft a new Spec with you, record decisions and keep tasks up to date. You sign in once with OAuth; there is no token to paste. It is the same address as the Memex connector, so if you have both, Claude shows one set of Memex tools.
- **Two skills.** `start-a-spec` plans new work as a Spec. `build-a-spec` builds a Spec task by task and keeps Memex current as it goes.

It has no hooks and runs nothing on your computer.

## Install

In Claude Code:

```
claude plugin marketplace add mindset-ai/memex-plugins
claude plugin install memex@memex
```

Then reload Claude Code and run `/mcp` to sign in to Memex.

## Data

The MCP server stores only what you ask it to store in Memex (Specs, decisions, comments, tasks). See the [privacy policy](https://www.memex.ai/legal/privacy/).

## Support

[support@memex.ai](mailto:support@memex.ai) · [Documentation](https://www.memex.ai/docs)

## License

See LICENSE.md.
