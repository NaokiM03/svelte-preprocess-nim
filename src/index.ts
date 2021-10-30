import which from "which";
import tmp from "tmp";
import path from "path";
import fs from "fs";
import childProcess from "child_process";

const transpile = (nimCode: string) => {
  const nimPath = which.sync("nim");
  const tmpDir = tmp.dirSync();
  const tmpNimFileName = path.join(tmpDir.name, "nim.nim");
  const tmpJsFileName = path.join(tmpDir.name, "nim.js");

  fs.writeFileSync(tmpNimFileName, nimCode);
  childProcess.execFileSync(
    nimPath,
    ["js", "-d:release", `-o:${tmpJsFileName}`, tmpNimFileName],
    { cwd: __dirname }
  );
  const jsCode = fs.readFileSync(tmpJsFileName, "utf-8");
  return jsCode;
};

const transformSync = (nimCode, options) => {
  return {
    code: transpile(nimCode),
    map: "",
    warnings: [],
  };
};

export { transformSync };
