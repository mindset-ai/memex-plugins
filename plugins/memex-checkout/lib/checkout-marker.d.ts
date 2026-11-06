// Types for the one export the server's checkout-signal test imports
// (packages/server/src/mcp/checkout-signal.integration.test.ts). The plugin itself
// is plain ESM and never reads this file.

export type MarkerAction =
  | { action: "write"; memex: string; spec: string }
  | { action: "clear" }
  | { action: "skip" };

/** Decide the marker action for a PostToolUse payload on a Memex MCP tool. */
export function decideMarkerAction(payload: unknown): MarkerAction;
