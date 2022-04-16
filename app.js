// npm- global command, comes with node

// In order to check the npm version, we use the command
// npm --version

// local dependency - use it only in this particular project
//  npm i <packageName>

// global dependency- use it any project
// npm install -g <packageName>

// sudo npm install -g <packageName>

// package.json is a manifest file
// there are three ways of creating package.json file and those are
// 1. manual approach (create package.json in the root, create properties, etc.)
// 2. npm init (step by step, press ENTER to skip)
// 3. npm init-y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
