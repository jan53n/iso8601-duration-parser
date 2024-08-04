import { parse as _parse } from "./generated/parser.js";

/**
 * @param {string} payload 
 */
export function parse(payload) {
    return _parse(payload);
}