# Memex plugins

The Claude Code plugin marketplace for [Memex](https://memex.ai).

> **This repository is generated.** Its contents are copied from the Memex source
> on every release by an automated job. Pull requests opened here are overwritten;
> see https://www.memex.ai/docs for help.

## Install

```
claude plugin marketplace add mindset-ai/memex-plugins
claude plugin install memex@memex
```

Then reload Claude Code and run `/mcp` to sign in to Memex.

Claude Code leaves auto-update off for third-party marketplaces. To get new
versions automatically, run `/plugin` → Marketplaces → memex → **Enable auto-update**.
Otherwise update with `claude plugin marketplace update memex` and
`claude plugin update memex@memex`.

## memex

The plugin listed in Anthropic's plugin directory. No hooks; it runs nothing on
your computer.

- **The Memex MCP server** (`https://memex.ai/mcp`, OAuth sign-in). The same
  address as the Memex connector in the Claude directory, so someone with both
  sees one set of Memex tools.
- **Skills.** `start-a-spec` plans new work as a Spec; `build-a-spec` builds a
  Spec task by task and keeps Memex current.

Uninstall at any time with `claude plugin uninstall memex@memex`.

## Coming from memex-checkout?

`memex-checkout` was the earlier name of this plugin and has been retired. Switch
once (the content is the same):

```
claude plugin uninstall memex-checkout@memex
claude plugin marketplace update memex
claude plugin install memex@memex
```

## License

See [LICENSE.md](LICENSE.md) and [LICENSE_EE.md](LICENSE_EE.md).
