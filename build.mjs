import { projectBuilder } from "@ethang/project-builder/project-builder.js";

await projectBuilder("sterett-admin", "master", {
  preVersionBumpScripts: ["UPDATE"],
  postVersionBumpScripts: ["DEDUPE", "BUILD"],
  isLibrary: false,
});
