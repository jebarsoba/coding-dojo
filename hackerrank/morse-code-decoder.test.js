describe("input parsing", () => {
  test("parse morse code dictionary", () => {
    const morseCodeChar = parseMorseCodeChar("A   .-");
    expect(morseCodeChar.character).toBe("A");
    expect(morseCodeChar.morse).toBe(".-");
  });

  test("build morse code dictionary", () => {
    const input = ["A   .-", "W   .--"];
    expect(buildMorseCodeDictionary(input)).toEqual({
      ".-": "A",
      ".--": "W",
    });
  });
});

describe("morse code decoding", () => {
  describe("perfect match", () => {
    test("given the morse code '.--.....--' (possibly 'WHAT'), and 'WHAT' being part of the context, should return 'WHAT' as a perfect match", () => {
      const morse = ".--.....--";
      const dictionary = buildMorseCodeDictionary(inputMorseCodeDictionary);
      const context = ["WHAT"];

      expect(decode(morse, dictionary, context)).toBe("WHAT");
    });

    test("given the morse code '.--.....--' (possibly 'WHAT'), and 'WHAT' and 'ATHAT' in the context, should return the shortest perfect match, plus an exclamation mark", () => {
      const morse = ".--.....--";
      const dictionary = buildMorseCodeDictionary(inputMorseCodeDictionary);
      const context = ["WHAT", "ATHAT"];

      expect(decode(morse, dictionary, context)).toBe("WHAT!");
    });
  });

  describe("close match", () => {
    test("given the morse code '.--.....--' (possibly 'WHAT'), and 'HAT' in the context, should return the best/closest valid word, plus a question mark and a mismatch indicator", () => {
      const morse = ".--.....--";
      const dictionary = buildMorseCodeDictionary(inputMorseCodeDictionary);
      const context = ["HAT"];

      // I don't remember exactly the rules for the computation of the mismatch indicator...
      // I assume I have to show how many characters are different (1 in this case, comparing 'HAT' and 'WHAT').
      expect(decode(morse, dictionary, context)).toBe("WHAT? 1");
    });
  });

  describe("no match", () => {
    test("given the morse code '.--.....--' (possibly 'WHAT'), without 'WHAT' being part of the context, should return that no matching was found", () => {
      const morse = ".--.....--";
      const dictionary = buildMorseCodeDictionary(inputMorseCodeDictionary);
      const context = [];

      expect(decode(morse, dictionary, context)).toBe("No matching word found");
    });
  });
});

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
  const dictionary = buildMorseCodeDictionary(inputMorseCodeDictionary);

  // TODO: Parse the context and encodedWords from the real input...
  const context = ["WHAT"];
  const encodedWords = [".--.....--"];
  return { encodedWords, dictionary, context };
}

function parseMorseCodeChar(line) {
  let regEx = /([A-Z0-9])(\s*)([.-]{1,6})/;
  let groups = regEx.exec(line);
  return {
    character: groups[1],
    morse: groups[3],
  };
}

function buildMorseCodeDictionary(input) {
  let morseCodeChars = input.map(parseMorseCodeChar);
  return morseCodeChars.reduce((dictionary, morseCodeChar) => {
    dictionary[morseCodeChar.morse] = morseCodeChar.character;
    return dictionary;
  }, {});
}

/**
 * Decodes the morse code into all words possible,
 * and returns the word that best fits the given context (if possible)
 */
function decode(morse, dictionary, context) {
  let validWords = findValidWords(morse, dictionary, []);

  const perfectMatch = findPerfectMatch(validWords, context);
  if (perfectMatch) {
    return perfectMatch;
  }

  const closeMatch = findCloseMatch(validWords, context);
  if (closeMatch) {
    return closeMatch;
  }

  return "No matching word found";
}

/**
 * Returns an array of valid words that can be decoded from the given morse code
 */
function findValidWords(morse, dictionary, alreadyFoundWords) {
  let decodedWord = "";
  let morseSequence = "";
  let encodedChars = morse.split("");
  for (let i = 0; i < encodedChars.length; i++) {
    morseSequence += encodedChars[i];
    const decodedChar = dictionary[morseSequence];

    if (
      decodedChar &&
      !isAlreadyFound(decodedWord, decodedChar, alreadyFoundWords)
    ) {
      decodedWord += decodedChar;
      morseSequence = "";
    }
  }

  if (decodedWord === "") {
    return alreadyFoundWords;
  }

  return findValidWords(morse, dictionary, [...alreadyFoundWords, decodedWord]);
}

/**
 * Checks if the decoded word will match the already found combinations
 */
function isAlreadyFound(decodedWord, decodedChar, alreadyFoundWords) {
  for (let alreadyFoundWord of alreadyFoundWords) {
    if (alreadyFoundWord[decodedWord.length] === decodedChar) {
      return true;
    }
  }

  return false;
}

function findPerfectMatch(validWords, context) {
  let perfectMatches = [];
  for (let candidateWord of validWords) {
    if (context.includes(candidateWord)) {
      perfectMatches.push(candidateWord);
    }
  }

  if (perfectMatches.length === 0) {
    return undefined;
  }

  return (
    perfectMatches.sort((a, b) => a.length - b.length)[0] +
    (perfectMatches.length > 1 ? "!" : "")
  );
}

function findCloseMatch(validWords, context) {
  let candidateWords = [];
  for (let candidateWord of validWords) {
    for (let contextWord of context) {
      if (partialMatch(candidateWord, contextWord)) {
        candidateWords.push({
          word: candidateWord,
          mismatch: calculateMismatchIndicator(candidateWord, contextWord),
        });
      }
    }
  }

  if (candidateWords.length === 0) {
    return undefined;
  }

  const closestMatch = candidateWords.sort(
    (a, b) => a.mismatch - b.mismatch
  )[0];
  return `${closestMatch.word}? ${closestMatch.mismatch}`;
}

function calculateMismatchIndicator(candidateWord, contextWord) {
  return Math.abs(candidateWord.length - contextWord.length).toString();
}

function partialMatch(candidateWord, contextWord) {
  const text =
    candidateWord.length > contextWord.length ? candidateWord : contextWord;
  const partial =
    candidateWord.length > contextWord.length ? contextWord : candidateWord;
  return text.toLowerCase().indexOf(partial.toLowerCase()) > -1;
}

const inputMorseCodeDictionary = [
  "A   .-",
  "B   -...",
  "C   -.-.",
  "D   -..",
  // "E   .",
  "F   ..-.",
  "G   --.",
  "H   ....",
  // "I   ..",
  "J   .---",
  "K   -.-",
  "L   .-..",
  "M   --",
  "N   -.",
  "O   ---",
  "P   .--.",
  "Q   --.-",
  "R   .-.",
  // "S   ...",
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
