import { parse as _parse } from "../generated/test/parser.js";
import { performance } from "perf_hooks";

/**
 * parse google search queries
 * @param {string} payload 
 */
export function parse(payload) {
    const wrapped = performance.timerify(_parse);
    return wrapped(payload);
}


const obs = new PerformanceObserver((list) => {
    console.log(list.getEntries());
});

obs.observe({ entryTypes: ['function'] });