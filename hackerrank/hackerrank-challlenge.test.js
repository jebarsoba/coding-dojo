test("given the encoded word '.--.....--' (possibly 'WHAT'), and 'WHAT' being part of the context, should return 'WHAT' as a perfect match", () => {
  const encodedWord = ".--.....--";
  const morseCode = {
    ".--": "W",
    "....": "H",
    ".-": "A",
    "-": "T",
  };
  const context = ["WHAT"];

  expect(decode(encodedWord, morseCode, context)).toBe("WHAT");
});

test("given the encoded word '.--.....--' (possibly 'WHAT'), without 'WHAT' being part of the context, should inform that no matching was found", () => {
  const encodedWord = ".--.....--";
  const morseCode = {
    ".--": "W",
    "....": "H",
    ".-": "A",
    "-": "T",
  };
  const context = [];

  expect(decode(encodedWord, morseCode, context)).toBe(
    "No matching word found"
  );
});

test("given the encoded word '.--.....--' (possibly 'WHAT'), and 'HAT' in the context, should return the first valid word as a close match result", () => {
  const encodedWord = ".--.....--";
  const morseCode = {
    ".--": "W",
    "....": "H",
    ".-": "A",
    "-": "T",
  };
  const context = ["HAT"];

  expect(decode(encodedWord, morseCode, context)).toBe("ATHAT?");
});

function processData(input) {
  const { encodedWords, morseCode, context } = parseInput(input);

  for (const encodedWord of encodedWords) {
    const decodedWord = decode(encodedWord, morseCode, context);
    console.log(decodedWord);
  }
}

/**
 * Parse input, to create these structures: morseCode, context and encodedWords
 */
function parseInput(input) {
  // TODO: Actually parse the input, using regular expressions; For now, I'll return my own...
  const morseCode = {
    ".--": "W",
    "....": "H",
    ".-": "A",
    "-": "T",
  };
  const context = ["WHAT"];
  const encodedWords = [".--.....--"];
  return { encodedWords, morseCode, context };
}

/**
 * Decodes the encoded word into all words possible,
 * and returns the best possible result depending on the context
 */
function decode(encodedWord, morseCode, context) {
  let foundWords = [];
  let validWord = findValidWord(encodedWord, morseCode, foundWords);
  while (validWord !== "") {
    foundWords.push(validWord);
    validWord = findValidWord(encodedWord, morseCode, foundWords);
  }

  const perfectMatch = findPerfectMatch(foundWords, context);
  if (perfectMatch) {
    return perfectMatch;
  }

  const closeMatch = findCloseMatch(foundWords, context);
  if (closeMatch) {
    return closeMatch;
  }

  // TODO: Cover the rest of the missing scenarios...

  return "No matching word found";
}

/**
 * Decodes the encodedWord into a valid word, different than the given ones (alreadyFoundWords)
 */
function findValidWord(encodedWord, morseCode, alreadyFoundWords) {
  let decodedWord = "";
  let morseSequence = "";
  let encodedChars = encodedWord.split("");
  for (let i = 0; i < encodedChars.length; i++) {
    morseSequence += encodedChars[i];
    const decodedChar = morseCode[morseSequence];

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
  let perfectMatch = undefined;
  for (let possibleOutcome of foundWords) {
    if (context.includes(possibleOutcome)) {
      perfectMatch = possibleOutcome;
    }
  }

  return perfectMatch;
}

function findCloseMatch(foundWords, context) {
  let closeMatch = undefined;
  for (let possibleOutcome of foundWords) {
    if (closeMatch) {
      break;
    }
    for (let contextWord of context) {
      const text =
        possibleOutcome.length > contextWord.length
          ? possibleOutcome
          : contextWord;
      const partial =
        possibleOutcome.length > contextWord.length
          ? contextWord
          : possibleOutcome;
      if (match(text, partial)) {
        closeMatch = possibleOutcome + "?";
        break;
      }
    }
  }
  return closeMatch;
}

function match(text, partial) {
  return text.toLowerCase().indexOf(partial.toLowerCase()) > -1;
}
