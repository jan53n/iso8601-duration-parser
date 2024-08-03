import { parse as _parse } from "./generated/parser.js";

/**
 * parse google search queries
 * @param {string} payload 
 */
export function parse(payload) {
    return _parse(payload);
}