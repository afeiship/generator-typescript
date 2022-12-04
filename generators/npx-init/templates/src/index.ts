import fs from "fs";
import path from "path";

const tpls = path.join(__dirname, 'tpls');
const files = ['dummy.txt'];

files.forEach((file) => {
  const from = path.join(tpls, file);
  const to = path.join(process.cwd(), file);
  fs.copyFileSync(from, to);
});

console.log('files copyed!');
process.exit(0);
