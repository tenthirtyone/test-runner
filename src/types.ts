export type Test = {
  name: string;
  fn?: Function;
  spaces?: number;
};

export type Describe = {
  name: string;
  fn: Function;
};

export type BeforeEach = {
  fn: Function;
};

declare global {
  function describe(title: string, fn: Function): void;
  function test(title: string, fn?: Function): void;
  function beforeEach(fn: Function): void;
  var ganache: any;
  var hre: any;
}
