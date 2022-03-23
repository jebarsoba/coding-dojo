/**
 *
 *
 * <TEST CASES>
 *
 *
 */
describe("input parsing", () => {
  test("parse morse code dictionary", () => {
    const morseCodeChar = parseMorseCodeChar("A   .-");
    expect(morseCodeChar.character).toBe("A");
    expect(morseCodeChar.morse).toBe(".-");
  });

  test("build morse code dictionary", () => {
    const input = ["A   .-", "W   .--"];
    expect(buildTextToMorseDictionary(input)).toEqual({
      A: ".-",
      W: ".--",
    });
  });
});

describe("morse code encoding", () => {
  test("encoding example 1", () => {
    const text = "EEE";
    const dictionary = buildTextToMorseDictionary(inputMorseCodeDictionary);
    expect(encode(text, dictionary)).toBe("...");
  });
});

describe("morse code decoding", () => {
  describe("perfect match", () => {
    test("given the morse code '.--.....--' (possibly 'WHAT'), and 'WHAT' being part of the context, should return 'WHAT' as a perfect match", () => {
      const morse = ".--.....--";
      const dictionary = buildTextToMorseDictionary(inputMorseCodeDictionary);
      const context = ["WHAT"];

      expect(decode(morse, dictionary, context)).toBe("WHAT");
    });

    test("given the morse code '.--.....--' (possibly 'WHAT'), and 'WHAT' and 'ATHAT' in the context, should return the shortest perfect match, plus an exclamation mark", () => {
      const morse = ".--.....--";
      const dictionary = buildTextToMorseDictionary(inputMorseCodeDictionary);
      const context = ["WHAT", "ATHAT"];

      expect(decode(morse, dictionary, context)).toBe("WHAT!");
    });
  });

  describe("close match", () => {
    test("given the morse code '.--.....--' (possibly 'WHAT'), and 'HAT' in the context, should return the best/closest valid word, plus a question mark and a mismatch indicator", () => {
      const morse = ".--.....--";
      const dictionary = buildTextToMorseDictionary(inputMorseCodeDictionary);
      const context = ["HAT"];

      // I don't remember exactly the rules for the computation of the mismatch indicator...
      // I assume I have to show how many characters are different (3 in this case, comparing the morse from 'HAT' and 'WHAT').
      expect(decode(morse, dictionary, context)).toBe("HAT? 3");
    });
  });

  describe("no match", () => {
    test("given the morse code '.--.....--' (possibly 'WHAT'), without 'WHAT' being part of the context, should return that no matching was found", () => {
      const morse = ".--.....--";
      const dictionary = buildTextToMorseDictionary(inputMorseCodeDictionary);
      const context = [];

      expect(decode(morse, dictionary, context)).toBe("No matching word found");
    });
  });
});
/**
 *
 *
 * </TEST CASES>
 *
 *
 */

/**
 *
 *
 * <PROGRAM>
 *
 *
 */
function processData(input) {
  const { encodedWords, dictionary, context } = parseInput(input);

  for (const morse of encodedWords) {
    const decodedWord = decode(morse, dictionary, context);
    console.log(decodedWord);
  }
}

/**
 * Parse input, to create these structures: dictionary, context and encodedWords
 */
function parseInput(input) {
  // TODO: Take raw dictionary from input...
  const dictionary = buildTextToMorseDictionary(inputMorseCodeDictionary);

  // TODO: Parse the context and encodedWords from the real input...
  const context = ["WHAT"];
  const encodedWords = [".--.....--"];
  return { encodedWords, dictionary, context };
}

function buildTextToMorseDictionary(input) {
  let morseCodeChars = input.map(parseMorseCodeChar);
  return morseCodeChars.reduce((dictionary, morseCodeChar) => {
    dictionary[morseCodeChar.character] = morseCodeChar.morse;
    return dictionary;
  }, {});
}

function parseMorseCodeChar(line) {
  let regEx = /([A-Z0-9])(\s*)([.-]{1,6})/;
  let groups = regEx.exec(line);
  return {
    character: groups[1],
    morse: groups[3],
  };
}

/**
 * Encodes all words in the context,
 * and returns the best one possible,
 * depending on the ressamblance to the morse received as an input.
 */
function decode(morse, dictionary, context) {
  let perfectMatches = [];
  let partialMatches = [];

  for (let contextWord of context) {
    const encodedContextWord = encode(contextWord, dictionary);

    if (morse === encodedContextWord) {
      perfectMatches.push(contextWord);
    } else if (partialMatch(morse, encodedContextWord)) {
      partialMatches.push({
        word: contextWord,
        mismatch: calculateMismatchIndicator(morse, encodedContextWord),
      });
    }
  }

  if (perfectMatches.length === 0 && partialMatches.length === 0) {
    return "No matching word found";
  }

  if (perfectMatches.length > 0) {
    return buildPerfectMatch(perfectMatches);
  } else if (partialMatches.length > 0) {
    return buildClosestMatch(partialMatches);
  }
}

function encode(text, dictionary) {
  return text.split("").reduce((encodedText, currChar) => {
    encodedText += dictionary[currChar];
    return encodedText;
  }, "");
}

function calculateMismatchIndicator(text1, text2) {
  return Math.abs(text1.length - text2.length).toString();
}

function partialMatch(text1, text2) {
  const text = text1.length > text2.length ? text1 : text2;
  const partial = text1.length > text2.length ? text2 : text1;
  return text.toLowerCase().indexOf(partial.toLowerCase()) > -1;
}

function buildPerfectMatch(perfectMatches) {
  return (
    perfectMatches.sort((a, b) => a.length - b.length)[0] +
    (perfectMatches.length > 1 ? "!" : "")
  );
}

function buildClosestMatch(partialMatches) {
  const closestMatch = partialMatches.sort(
    (a, b) => a.mismatch - b.mismatch
  )[0];
  return `${closestMatch.word}? ${closestMatch.mismatch}`;
}
/**
 *
 *
 * </PROGRAM>
 *
 *
 */

/**
 *
 *
 * <INPUT>
 *
 *
 */
const inputMorseCodeDictionary = [
  "A   .-",
  "B   -...",
  "C   -.-.",
  "D   -..",
  "E   .",
  "F   ..-.",
  "G   --.",
  "H   ....",
  "I   ..",
  "J   .---",
  "K   -.-",
  "L   .-..",
  "M   --",
  "N   -.",
  "O   ---",
  "P   .--.",
  "Q   --.-",
  "R   .-.",
  "S   ...",
  "T   -",
  "U   ..-",
  "V   ...-",
  "W   .--",
  "X   -..-",
  "Y   -.--",
  "Z   --..",
  "1   .----",
  "2   ..---",
  "3   ...--",
  "4   ....-",
  "5   .....",
  "6   -....",
  "7   --...",
  "8   ---..",
  "9   ----.",
  "0   -----",
];
/**
 *
 *
 * </INPUT>
 *
 *
 */
