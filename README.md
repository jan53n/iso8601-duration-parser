# ISO 8601 Duration Parser

This project is a PEG.js-based parser for ISO 8601 duration strings, as defined by the ISO 8601 standard. The parser can handle durations specified in years, months, weeks, days, hours, minutes, and seconds, both in full and partial forms.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Tests](#tests)

## Installation

To use the ISO 8601 Duration Parser, you need to have Node.js installed. You can install the required dependencies using npm:

```bash
npm install;
npm run build;
```

## Usage

You can use the parser to parse ISO 8601 duration strings into JavaScript objects. Here's an example:

```javascript
import { parse } from './index.js';

const duration = parse("P1Y2M3W4DT5H6M7S");
console.log(duration);

// Output:
// {
//   years: 1,
//   months: 2,
//   weeks: 3,
//   days: 4,
//   hours: 5,
//   minutes: 6,
//   seconds: 7
// }
```

## API

### `parse(input: string): Object`

Parses an ISO 8601 duration string and returns an object representing the duration.

#### Parameters
- `input`: A string in ISO 8601 duration format (e.g., "P1Y2M3W4DT5H6M7S").

#### Returns
- An object with the following structure:
  ```javascript
  {
    years: number | null,
    months: number | null,
    weeks: number | null,
    days: number | null,
    hours: number | null,
    minutes: number | null,
    seconds: number | null
  }
  ```

## Tests

To run the tests for the parser, you can use Jest. Ensure you have Jest installed:

Run the tests with the following command:

```bash
npm test
```