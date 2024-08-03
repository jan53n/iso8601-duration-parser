import { describe, it, expect } from "@jest/globals";
import { parse } from "../index.js";

describe("ISO 8601 Duration Parser", () => {
  // Valid Durations
  it("should parse a duration with only years", () => {
    expect(parse("P3Y")).toEqual({
      years: 3,
      months: null,
      weeks: null,
      days: null,
      hours: null,
      minutes: null,
      seconds: null
    });
  });

  it("should parse a duration where an identifier without a preceding number defaults to 1", () => {
    expect(parse("P3YM")).toEqual({
      years: 3,
      months: 1,
      weeks: null,
      days: null,
      hours: null,
      minutes: null,
      seconds: null
    });
  });

  it("should parse a duration with only months", () => {
    expect(parse("P2M")).toEqual({
      years: null,
      months: 2,
      weeks: null,
      days: null,
      hours: null,
      minutes: null,
      seconds: null
    });
  });

  it("should parse a duration with only weeks", () => {
    expect(parse("P4W")).toEqual({
      years: null,
      months: null,
      weeks: 4,
      days: null,
      hours: null,
      minutes: null,
      seconds: null
    });
  });

  it("should parse a duration with only days", () => {
    expect(parse("P5D")).toEqual({
      years: null,
      months: null,
      weeks: null,
      days: 5,
      hours: null,
      minutes: null,
      seconds: null
    });
  });

  it("should parse a duration with only time", () => {
    expect(parse("PT3H")).toEqual({
      years: null,
      months: null,
      weeks: null,
      days: null,
      hours: 3,
      minutes: null,
      seconds: null
    });
  });

  it("should parse a duration with time including minutes and seconds", () => {
    expect(parse("PT2H30M15S")).toEqual({
      years: null,
      months: null,
      weeks: null,
      days: null,
      hours: 2,
      minutes: 30,
      seconds: 15
    });
  });

  it("should parse a full duration with all components", () => {
    expect(parse("P1Y2M3W4DT5H6M7S")).toEqual({
      years: 1,
      months: 2,
      weeks: 3,
      days: 4,
      hours: 5,
      minutes: 6,
      seconds: 7
    });
  });

  it("should parse a duration with fractional components", () => {
    expect(parse("P1.5Y0.5M")).toEqual({
      years: 1.5,
      months: 0.5,
      weeks: null,
      days: null,
      hours: null,
      minutes: null,
      seconds: null
    });
  });

  // Invalid Durations
  it("should throw an error for invalid format without P", () => {
    expect(() => parse("1Y")).toThrow();
  });

  it("should throw an error for invalid time format without T", () => {
    expect(() => parse("P3H")).toThrow();
  });

  it("should throw an error for invalid time format without time components", () => {
    expect(() => parse("PT")).toThrow();
  });

  it("should throw an error for empty duration", () => {
    expect(() => parse("P")).toThrow();
  });
});
