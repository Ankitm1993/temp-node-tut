// const path = require("path");

const path = require("path");

// 1.Separator Property- he path object has the sep property that represents the platform-specific path separator:
// The path.sep returns \ on Windows and / on Linux and macOS.
console.log(path.sep);

// 2. Delimiter Property: The path object also has the delimiter property that represents the path delimiter:
// The path.delimiter returns ; on Windows and : on Linux and macOS.
console.log(path.delimiter);

// 3. path.join() method normalize the path meaning the forward slash i.e. the trailing slash / will be ignored when the code will get executed in terminal output, also remember to add extension of file such as.txt, .js or .html

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

// 4. path.basename() method - To access the last portion of filePath i.e test.txt
const baseName = path.basename(filePath);
console.log(baseName);

// 5. path.extname() method - To access the extension of file i.e .txt or whatever the extension name of file whether it is .txt, .js or .html, etc.

const ext = path.extname(filePath);
console.log(ext);

// 6. path.dirname() method - To access the DirectoryName of file, we use this method
const dir = path.dirname(filePath);
console.log(dir);

// 7. path.resolve() method - It accepts the sequence of paths or path segments and resolves it into an absolute path, but always remember we need to use Global __dirName as the first parameter in path.resolve() method, which means its gonna point to the directory where the app.js file is located.
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
