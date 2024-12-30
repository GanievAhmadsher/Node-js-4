import path from "node:path";
import fs from "node:fs";
const activePath = path.join(process.cwd(), "fs.txt");
const activeWrite = path.join(process.cwd(), "fs2.txt");
fs.readFile(activePath, (err, data) => {
  fs.writeFile(activeWrite, data, (err) => {
    console.log(err);
  });
});

// let buf = Buffer.from("ganievahmadsher6205@gmail.com");
// console.log(buf);
// console.log(buf.toString("utf-8"));
