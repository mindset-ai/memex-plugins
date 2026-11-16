# Memex plugins

The Claude Code plugin marketplace for [Memex](https://memex.ai).

> **This repository is generated.** Its contents are copied from the Memex source
> on every release by an automated job. Pull requests opened here are overwritten;
> see https://www.memex.ai/docs for help.

## Install

```
claude plugin marketplace add mindset-ai/memex-plugins
claude plugin install memex-checkout@memex
```

Then reload Claude Code and run `/mcp` to sign in to Memex.

Claude Code leaves auto-update off for third-party marketplaces. To get new
versions automatically, run `/plugin` → Marketplaces → memex → **Enable auto-update**.
Otherwise update with `claude plugin marketplace update memex` and
`claude plugin update memex-checkout@memex`.

## memex-checkout

- **The Memex MCP server** (`https://memex.ai/mcp`, OAuth sign-in). The same
  address as the Memex connector in the Claude directory, so someone with both
  sees one set of Memex tools.
- **Skills.** `start-a-spec` plans new work as a Spec; `build-a-spec` builds a
  Spec task by task and keeps Memex current.
- **Spec ↔ code link.** Once Claude claims or edits a Spec through Memex, each file
  it edits in that session is recorded against the Spec: file paths, the Spec, git
  branch and commit. Never source code or prompts. Needs a one-time checkout key:
  `npx -y memex-ai checkout-setup`.
- **Task reminders.** After an edit in a linked session, Claude is reminded to keep
  the Spec's tasks current.
- **Session start-up.** Offers to finish setup if the checkout key is missing.

Uninstall at any time with `claude plugin uninstall memex-checkout@memex`.

## License

See [LICENSE.md](LICENSE.md) and [LICENSE_EE.md](LICENSE_EE.md).
