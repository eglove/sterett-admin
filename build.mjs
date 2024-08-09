import { projectBuilder } from "@ethang/project-builder/project-builder.js";

await projectBuilder("sterett-admin", "master", {
  scripts: ["UPDATE", "DEDUPE", "BUILD"],
  isLibrary: false,
});
