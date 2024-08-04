import peggy from "peggy";
import fs from "fs";
import { join } from "path";

const { NODE_ENV } = process.env;
const CUSTOM_BUILD_PATH = NODE_ENV || "";
const START_GRAMMAR_FILE = join(
  "grammar",
  "syntax.pegjs",
);

const WRITE_PATH = join("generated", CUSTOM_BUILD_PATH);
const sourceText = fs.readFileSync(START_GRAMMAR_FILE).toString();

/** @type {import("peggy").SourceBuildOptions}  */
const buildConfig = {
  output: "source",
  cache: true,
  format: "es",
};

const parserSource = peggy.generate(sourceText, buildConfig);

fs.mkdirSync(WRITE_PATH, { recursive: true });
fs.writeFileSync(join(WRITE_PATH, "parser.js"), parserSource);
