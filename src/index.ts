import * as Ganache from "ganache";
const hre = () => require("hardhat");
const glob = require("glob");

import Suite from "./suite";

const suite = new Suite();

global.describe = suite.describe.bind(suite);
global.test = suite.test.bind(suite);
global.beforeEach = () => {};
global.ganache = Ganache;
global.hre = hre;

//const files = process.argv.slice(2);

glob(process.argv.slice(2)[0], null, (er: any, files: string[]) => {
  files.forEach((file) => {
    require("../" + file);
  });
});
