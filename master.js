import { run3hit90 } from "./core.js";

export function dispatchM5(code) {
  const hits = run3hit90();
  return hits[code - 1] || "Invalid dispatch";
}
