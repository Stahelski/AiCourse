import concurrently from "concurrently";

concurrently([
  {
    name: "server",
    command: "bun run dev",
    cwd: "packages/server",
    reffixColor: "cyan",
  },
  {
    name: "client",
    command: "bun run dev",
    cwd: "packages/client",
    reffixColor: "green",
  },
]);
