# Memex plugins

The Claude Code plugin marketplace for [Memex](https://memex.ai).

> **This repository is generated.** Its contents are copied from the Memex source
> on every release by an automated job. Pull requests opened here are overwritten;
> see https://www.memex.ai/docs for help.

## Install

```
npx -y memex-ai install                              # the Memex MCP server + your checkout key
claude plugin marketplace add mindset-ai/memex-plugins
claude plugin install memex-checkout@memex
```

Then reload your Claude Code window (hooks load at session start).

Claude Code leaves auto-update off for third-party marketplaces. To get new
versions automatically, run `/plugin` → Marketplaces → memex → **Enable auto-update**.
Otherwise update with `claude plugin marketplace update memex` and
`claude plugin update memex-checkout@memex`.

## memex-checkout

A hooks-only plugin (no MCP server, no extra tools):

- **Spec ↔ code link.** Once Claude claims or edits a Spec through Memex, each file
  it edits in that session is recorded against the Spec: file paths, the Spec, git
  branch and commit. Never source code or prompts.
- **Task reminders.** After an edit in a linked session, Claude is reminded to keep
  the Spec's tasks current.
- **Session start-up.** Offers to finish setup if the checkout key is missing.

Uninstall at any time with `claude plugin uninstall memex-checkout@memex`.

## License

See [LICENSE.md](LICENSE.md) and [LICENSE_EE.md](LICENSE_EE.md).
