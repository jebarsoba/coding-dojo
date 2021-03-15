class RomanToInt {
    romanToInt(s) {
        const romanIntMap = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        };

        const subtract = (cur, prev) => {
            if (!prev) {
                return 0;
            }

            // Maybe, it could be simplified by just checking if prev < cur...
            let applySubtraction = false;
            switch (cur) {
                case "V":
                case "X":
                    if (prev === "I") {
                        applySubtraction = true;
                    }
                    break;
                case "L":
                case "C":
                    if (prev === "X") {
                        applySubtraction = true;
                    }
                    break;
                case "D":
                case "M":
                    if (prev === "C") {
                        applySubtraction = true;
                    }
                    break;
                default:
                    break;
            }
            return applySubtraction ? romanIntMap[prev] * 2 : 0;
        };

        return s.split('').reduce((acc, cur, i, arr) => {
            acc += romanIntMap[cur] - subtract(cur, arr[i - 1]);
            return acc;
        }, 0);
    }
}

module.exports = RomanToInt;