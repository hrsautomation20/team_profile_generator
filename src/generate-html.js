const fs = require("fs");
const { resolve } = require("path");

const writeFile = (readmeFile) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", readmeFile, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File Created Successfully!",
      });
    });
  });
};

module.exports = { writeFile };
