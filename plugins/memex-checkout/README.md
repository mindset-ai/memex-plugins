# memex-checkout

The earlier name of the [`memex`](https://github.com/mindset-ai/memex-plugins/tree/main/plugins/memex) plugin, with the same content. Existing installs keep updating under this name; new installs should use `memex`.

- **The Memex MCP server** (`https://memex.ai/mcp`). You sign in once with OAuth (`/mcp` in Claude Code). It is the same address as the Memex connector in the Claude directory, so if you have both, Claude Code shows one set of Memex tools.
- **Two skills.** `start-a-spec` plans new work as a Spec. `build-a-spec` builds a Spec task by task and keeps Memex current as it goes.

Earlier versions also had spec-checkout hooks that recorded which files Claude edited for a Spec. They were removed in 0.5.0 so the plugin can be listed in Anthropic's plugin directory, which only accepts hooks that run commands from Verified organizations.

## Install

```
claude plugin marketplace add mindset-ai/memex-plugins
claude plugin install memex@memex
```

## Data

The MCP server stores only what you ask it to store in Memex. See the [privacy policy](https://www.memex.ai/legal/privacy/).

## Support

[support@memex.ai](mailto:support@memex.ai) · [Documentation](https://www.memex.ai/docs)

## License

See LICENSE.md.
