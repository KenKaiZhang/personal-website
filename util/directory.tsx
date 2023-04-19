import fs from "fs";

export const getPageDir = () => {
  const dirs = fs.readdirSync(".//app", { withFileTypes: true });
  let pageDir: string[] = dirs
    .filter((dir) => dir.isDirectory() && dir.name !== "api")
    .map((dir) => dir.name);
  return pageDir;
};
