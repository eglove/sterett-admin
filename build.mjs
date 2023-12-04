import { projectBuilder } from "@ethang/project-builder/project-builder.js";

await projectBuilder("sterett-admin", "master", {
  preVersionBumpScripts: ["UPDATE", "PRUNE"],
  postVersionBumpScripts: ["DEDUPE", "LINT", "BUILD"],
  isLibrary: false,
});
