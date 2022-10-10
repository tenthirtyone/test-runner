import { Test } from "./types";

// This does not support hooks, etc
export default function run(tests: Test[]) {
  tests.forEach((t: Test) => {
    return (() => {
      const padding = " ".repeat(t.spaces || 0);
      if (t.fn) {
        try {
          const startTime = new Date().getTime();
          t.fn();
          const totalTime = new Date().getTime() - startTime;
          console.log(padding, "✅", t.name, totalTime);
        } catch (e: any) {
          console.log(padding, "❌", t.name);

          //console.log(e.stack);
        }
      } else {
        console.log(padding, "⚠️", t.name);
      }
    })();
  });
}
