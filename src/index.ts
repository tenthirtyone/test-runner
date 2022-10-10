import * as Ganache from "ganache";
const hre = () => require("hardhat");
import { Test, Describe } from "./types";

const tests: Test[] = [];

export function test(name: string, fn: Function) {
  tests.push({ name, fn });
}

export function describe(name: string, fn: Function) {
  console.log(name);
  fn();
}

function run() {
  tests.forEach((t: Test) => {
    return (() => {
      try {
        const startTime = new Date().getTime();
        t.fn();
        const totalTime = new Date().getTime() - startTime;
        console.log("  ✅", t.name, totalTime);
      } catch (e: any) {
        console.log("  ❌", t.name);

        console.log(e.stack);
      }
    })();
  });
}

declare global {
  function describe(title: string, fn: Function): void;
  function test(title: string, fn: Function): void;
  function ganache(options?: any): any;
  var hre: any;
}

global.describe = describe;
global.test = test;
global.ganache = Ganache.provider;
global.hre = hre;

const files = process.argv.slice(2);
console.log(files);
files.forEach((file) => {
  require(file);
});

run();
