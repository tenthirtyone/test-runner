import { Test, Describe } from "./types";
import run from "./runner";

export default class Suite {
  public tests: Test[] = [];
  private spaces: number = 0;
  constructor() {}

  test(name: string, fn?: Function) {
    this.tests.push({ name, fn, spaces: this.spaces });
  }
  describe(name: string, fn: Function) {
    const s = new Suite();

    console.log(" ".repeat(this.spaces), name);
    this.spaces += 2;
    fn();
    run(this.tests);
    this.spaces -= 2;
    this.tests = [];
  }
}
