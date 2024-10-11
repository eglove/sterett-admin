import { projectBuilder } from "@ethang/project-builder/project-builder.js";

await projectBuilder("sterett-admin", "master", {
  scripts: ["pnpm up -i --latest", "pnpm dedupe", "pnpm lint", "pnpm build"],
  isLibrary: false,
});
