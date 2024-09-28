import { projectBuilder } from "@ethang/project-builder/project-builder.js";

await projectBuilder("sterett-admin", "master", {
  scripts: ["bun x taze latest -I", "bun lint", "bun run build"],
  isLibrary: false,
});
