// Mock console.log to test HackerRank's processData fn...
let outputData = "";
const storeLog = (input) => (outputData += `${input}-NEWLINE-`);
console["log"] = jest.fn(storeLog);

const fs = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);

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
  it("parse morse code dictionary", () => {
    const morseCodeChar = parseMorseCodeChar("A   .-");
    expect(morseCodeChar.character).toBe("A");
    expect(morseCodeChar.morse).toBe(".-");
  });

  it("build morse code dictionary", () => {
    const input = ["A   .-", "W   .--"];
    expect(buildTextToMorseDictionary(input)).toEqual({
      A: ".-",
      W: ".--",
    });
  });

  it("parse full input into the different structures", () => {
    expect(parseInput(fullInput)).toEqual({
      encodedWords: [".--.....--"],
      dictionary: buildTextToMorseDictionary(inputMorseCodeDictionary),
      context: ["WHAT"],
    });
  });

  it("parse raw data", async () => {
    const data = await readFileAsync(
      "./morse-code-decoder.data.raw.txt",
      "utf8"
    );

    const input = parseInput(data);

    expect(input.dictionary["A"]).toBe(".-");
    expect(input.dictionary["0"]).toBe("-----");

    expect(input.context).toEqual([
      "AN",
      "EARTHQUAKE",
      "EAT",
      "GOD",
      "HATH",
      "IM",
      "READY",
      "TO",
      "WHAT",
      "WROTH",
    ]);

    expect(input.encodedWords).toHaveLength(11);
  });
});

describe("morse code encoding", () => {
  it("encoding example 1", () => {
    const text = "EEE";
    const dictionary = buildTextToMorseDictionary(inputMorseCodeDictionary);
    expect(encode(text, dictionary)).toBe("...");
  });

  it("encoding example 2", () => {
    const text = "WROTH";
    const dictionary = buildTextToMorseDictionary(inputMorseCodeDictionary);
    expect(encode(text, dictionary)).toBe(".--.-.----....");
  });
});

describe("morse code decoding", () => {
  describe("perfect match", () => {
    it("given the morse code '.--.....--' (possibly 'WHAT'), and 'WHAT' being part of the context, should return 'WHAT' as a perfect match", () => {
      const morse = ".--.....--";
      const dictionary = buildTextToMorseDictionary(inputMorseCodeDictionary);
      const context = ["WHAT"];

      expect(decode(morse, dictionary, context)).toBe("WHAT");
    });

    it("given the morse code '.--.....--' (possibly 'WHAT'), and 'WHAT' and 'ATHAT' in the context, should return the shortest perfect match, plus an exclamation mark", () => {
      const morse = ".--.....--";
      const dictionary = buildTextToMorseDictionary(inputMorseCodeDictionary);
      const context = ["WHAT", "ATHAT"];

      expect(decode(morse, dictionary, context)).toBe("WHAT!");
    });
  });

  describe("close match", () => {
    it("given the morse code '.--.....--' (possibly 'WHAT'), and 'HAT' in the context, should return the best/closest valid word, plus a question mark", () => {
      const morse = ".--.....--";
      const dictionary = buildTextToMorseDictionary(inputMorseCodeDictionary);
      const context = ["HAT"];

      expect(decode(morse, dictionary, context)).toBe("HAT?");
    });
  });

  describe("no match", () => {
    it("given the morse code '.--.....--' (possibly 'WHAT'), without 'WHAT' being part of the context, should return that no matching was found", () => {
      const morse = ".--.....--";
      const dictionary = buildTextToMorseDictionary(inputMorseCodeDictionary);
      const context = [];

      expect(decode(morse, dictionary, context)).toBe("No matching word found");
    });
  });

  describe("processData", () => {
    it("Sample input with various scenarios", () => {
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
      expect(stdout[2]).toBe("MALE?");
      expect(stdout[3]).toBe("No matching word found");
    });
  });
});

describe("HackerRank tests, based on provided input and expected output", () => {
  it("test case 1", async () => {
    const data = await readFileAsync(
      "./morse-code-decoder.data.raw.txt",
      "utf8"
    );
    const input = parseInput(data);

    expect(decode(".--.....--", input.dictionary, input.context)).toBe("WHAT");
  });

  it("test case 2", async () => {
    const data = await readFileAsync(
      "./morse-code-decoder.data.raw.txt",
      "utf8"
    );
    const input = parseInput(data);

    expect(decode(".....--....", input.dictionary, input.context)).toBe("HATH");
  });

  it("test case 3", async () => {
    const data = await readFileAsync(
      "./morse-code-decoder.data.raw.txt",
      "utf8"
    );
    const input = parseInput(data);

    expect(decode("--.----..", input.dictionary, input.context)).toBe("GOD");
  });

  it("test case 4", async () => {
    const data = await readFileAsync(
      "./morse-code-decoder.data.raw.txt",
      "utf8"
    );
    const input = parseInput(data);

    expect(decode(".--.-.----..", input.dictionary, input.context)).toBe(
      "WROTH?"
    );
  });

  it("test case 5", async () => {
    const data = await readFileAsync(
      "./morse-code-decoder.data.raw.txt",
      "utf8"
    );
    const input = parseInput(data);

    expect(decode(".--.....--", input.dictionary, input.context)).toBe("WHAT");
  });

  it("test case 6", async () => {
    const data = await readFileAsync(
      "./morse-code-decoder.data.raw.txt",
      "utf8"
    );
    const input = parseInput(data);

    expect(decode(".--.", input.dictionary, input.context)).toBe("AN");
  });

  it("test case 7", async () => {
    const data = await readFileAsync(
      "./morse-code-decoder.data.raw.txt",
      "utf8"
    );
    const input = parseInput(data);

    expect(
      decode("..-.-.-....--.-..-.--.-.", input.dictionary, input.context)
    ).toBe("EARTHQUAKE");
  });

  it("test case 8", async () => {
    const data = await readFileAsync(
      "./morse-code-decoder.data.raw.txt",
      "utf8"
    );
    const input = parseInput(data);

    expect(decode("..--", input.dictionary, input.context)).toBe("IM!");
  });

  it("test case 9", async () => {
    const data = await readFileAsync(
      "./morse-code-decoder.data.raw.txt",
      "utf8"
    );
    const input = parseInput(data);

    expect(decode(".-...--..-.--", input.dictionary, input.context)).toBe(
      "READY"
    );
  });

  it("test case 10", async () => {
    const data = await readFileAsync(
      "./morse-code-decoder.data.raw.txt",
      "utf8"
    );
    const input = parseInput(data);

    expect(decode("----", input.dictionary, input.context)).toBe("TO");
  });

  it("test case 11", async () => {
    const data = await readFileAsync(
      "./morse-code-decoder.data.raw.txt",
      "utf8"
    );
    const input = parseInput(data);

    expect(decode("..--", input.dictionary, input.context)).toBe("IM!");
  });

  it("process full raw data alltogether", async () => {
    const data = await readFileAsync(
      "./morse-code-decoder.data.raw.txt",
      "utf8"
    );
    processData(data);

    const stdout = outputData.split("-NEWLINE-");
    expect(stdout[0]).toBe("WHAT");
    expect(stdout[1]).toBe("HATH");
    expect(stdout[2]).toBe("GOD");
    expect(stdout[3]).toBe("WROTH?");
    expect(stdout[4]).toBe("WHAT");
    expect(stdout[5]).toBe("AN");
    expect(stdout[6]).toBe("EARTHQUAKE");
    expect(stdout[7]).toBe("IM!");
    expect(stdout[8]).toBe("READY");
    expect(stdout[9]).toBe("TO");
    expect(stdout[10]).toBe("IM!");
  });
});
