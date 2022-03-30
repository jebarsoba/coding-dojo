// Mental note: Next time, don't use regex (;-_-)
const regExMorseCodeRawDictionary = /\s*([A-Z0-9])(\s*)([.-]{1,6})\s*/;
const regExContext = /^\s*([A-Z0-9]+)\s*$/;
const regExMorseCode = /^\s*([.-]+)\s*$|^\s*([.-]+)\s*([.-]+)\s*$/;

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
  if (!Array.isArray(input)) {
    input = input.split("\n");
  }

  return {
    encodedWords: input
      .reduce((words, line) => {
        const groups = regExMorseCode.exec(line);
        for (let i = 1; groups && i <= groups.length; i++) {
          words.push(groups[i]);
        }
        return words;
      }, [])
      .filter((line) => line),
    dictionary: buildTextToMorseDictionary(
      input.filter((line) => regExMorseCodeRawDictionary.exec(line))
    ),
    context: input
      .slice(1)
      .map((line) => {
        const groups = regExContext.exec(line);
        return groups ? groups[1] : null;
      })
      .filter((line) => line),
  };
}

function buildTextToMorseDictionary(input) {
  let morseCodeChars = input.map(parseMorseCodeChar);
  return morseCodeChars.reduce((dictionary, morseCodeChar) => {
    dictionary[morseCodeChar.character] = morseCodeChar.morse;
    return dictionary;
  }, {});
}

function parseMorseCodeChar(line) {
  let groups = regExMorseCodeRawDictionary.exec(line);
  return {
    character: groups[1],
    morse: groups[3],
  };
}

/**
 * Encodes all words in the context,
 * and returns the best one possible,
 * depending on the ressamblance to the morse received as an input
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

module.exports = {
  parseMorseCodeChar,
  buildTextToMorseDictionary,
  parseInput,
  encode,
  decode,
  processData,
};
