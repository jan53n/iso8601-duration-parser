import { parse as _parse } from "../generated/test/parser.js";
import { performance } from "perf_hooks";
import fs from "fs";
 
function append(log) {
    return fs.appendFileSync(".performance.log", log);
}

const obs = new PerformanceObserver((list) => {
    list.getEntriesByType("function").forEach((e) => {
        append(`${e.entryType}, ${e.name}, ${e.duration}, ${e?.detail}\n`);
    });
    
    performance.clearMarks();
    performance.clearMeasures();
});

obs.observe({ entryTypes: ['function'] });

export function parse(payload) {
    const wrapped = performance.timerify(_parse);
    return wrapped(payload);
}