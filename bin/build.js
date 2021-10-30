#!/usr/bin/env node
const { build } = require("esbuild");
const pkg = require("../package.json");

build({
  entryPoints: ["./src/index.ts"],
  outfile: pkg.exports["."],
  format: "cjs",
  platform: "node",
  charset: "utf8",
});
