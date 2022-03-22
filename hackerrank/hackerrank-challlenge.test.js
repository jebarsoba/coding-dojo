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
 * and returns the best possible result depending on the context
 */
function decode(morse, dictionary, context) {
  let foundWords = [];
  let validWord = findValidWord(morse, dictionary, foundWords);
  while (validWord !== "") {
    foundWords.push(validWord);
    validWord = findValidWord(morse, dictionary, foundWords);
  }

  const perfectMatch = findPerfectMatch(foundWords, context);
  if (perfectMatch) {
    return perfectMatch;
  }

  const closeMatch = findCloseMatch(foundWords, context);
  if (closeMatch) {
    return closeMatch;
  }

  // TODO: Cover the other scenarios...

  return "No matching word found";
}

/**
 * Decodes the morse code into a valid word, different than the given ones (alreadyFoundWords)
 */
function findValidWord(morse, dictionary, alreadyFoundWords) {
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
  return decodedWord;
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

function findPerfectMatch(foundWords, context) {
  for (let possibleOutcome of foundWords) {
    if (context.includes(possibleOutcome)) {
      return possibleOutcome;
    }
  }
  return undefined;
}

function findCloseMatch(foundWords, context) {
  for (let possibleOutcome of foundWords) {
    for (let contextWord of context) {
      if (partialMatch(possibleOutcome, contextWord)) {
        return possibleOutcome + "?";
      }
    }
  }
  return undefined;
}

function partialMatch(possibleOutcome, contextWord) {
  const text =
    possibleOutcome.length > contextWord.length
      ? possibleOutcome
      : contextWord;
  const partial =
    possibleOutcome.length > contextWord.length
      ? contextWord
      : possibleOutcome;
  return text.toLowerCase().indexOf(partial.toLowerCase()) > -1;
}
