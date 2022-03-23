test("given the morse code '.--.....--' (possibly 'WHAT'), and 'WHAT' being part of the context, should return 'WHAT' as a perfect match", () => {
  const morse = ".--.....--";
  const dictionary = {
    ".--": "W",
    "....": "H",
    ".-": "A",
    "-": "T",
  };
  const context = ["WHAT"];

  expect(decode(morse, dictionary, context)).toBe("WHAT");
});

test("given the morse code '.--.....--' (possibly 'WHAT'), without 'WHAT' being part of the context, should return that no matching was found", () => {
  const morse = ".--.....--";
  const dictionary = {
    ".--": "W",
    "....": "H",
    ".-": "A",
    "-": "T",
  };
  const context = [];

  expect(decode(morse, dictionary, context)).toBe(
    "No matching word found"
  );
});

test("given the morse code '.--.....--' (possibly 'WHAT'), and 'HAT' in the context, should return the first valid word as a close match result", () => {
  const morse = ".--.....--";
  const dictionary = {
    ".--": "W",
    "....": "H",
    ".-": "A",
    "-": "T",
  };
  const context = ["HAT"];

  expect(decode(morse, dictionary, context)).toBe("ATHAT?");
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
  // TODO: Parse the input for real, using regular expressions; For now, I'll used pre-defined values...
  const dictionary = {
    ".--": "W",
    "....": "H",
    ".-": "A",
    "-": "T",
  };
  const context = ["WHAT"];
  const encodedWords = [".--.....--"];
  return { encodedWords, dictionary, context };
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

  // TODO: Cover the other scenarios...

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
  for (let candidateWord of validWords) {
    if (context.includes(candidateWord)) {
      return candidateWord;
    }
  }
  return undefined;
}

function findCloseMatch(validWords, context) {
  for (let candidateWord of validWords) {
    for (let contextWord of context) {
      if (partialMatch(candidateWord, contextWord)) {
        return candidateWord + "?";
      }
    }
  }
  return undefined;
}

function partialMatch(candidateWord, contextWord) {
  const text =
    candidateWord.length > contextWord.length
      ? candidateWord
      : contextWord;
  const partial =
    candidateWord.length > contextWord.length
      ? contextWord
      : candidateWord;
  return text.toLowerCase().indexOf(partial.toLowerCase()) > -1;
}
