// Mock console.log to test HackerRank's processData fn...
let outputData = "";
const storeLog = (input) => (outputData += `${input}-NEWLINE-`);
console["log"] = jest.fn(storeLog);

const {
  parseMorseCodeChar,
  buildTextToMorseDictionary,
  parseInput,
  encode,
  decode,
  processData,
} = require("./morse-code-decoder");
const {
  inputMorseCodeDictionary,
  fullInput,
} = require("./morse-code-decoder.data");

afterEach(() => (outputData = ""));

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

  test("parse full input into the different structures", () => {
    expect(parseInput(fullInput)).toEqual({
      encodedWords: [".--.....--"],
      dictionary: buildTextToMorseDictionary(inputMorseCodeDictionary),
      context: ["WHAT"],
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

  describe("processData", () => {
    test("Sample input with various scenarios", () => {
      const input = [
        "55",
        ...inputMorseCodeDictionary,
        "*",
        "WHAT   ",
        "ATHAT",
        "MALE",
        "*",
        ".--.....--   ",
        ".--.....-   ",
        "--.-.-...-..-",
        ".------.-.--..",
        "*",
      ];

      processData(input);

      const stdout = outputData.split("-NEWLINE-");
      expect(stdout[0]).toBe("WHAT!");
      expect(stdout[1]).toBe("WHAT? 1");
      expect(stdout[2]).toBe("MALE? 4");
      expect(stdout[3]).toBe("No matching word found");
    });
  });
});
