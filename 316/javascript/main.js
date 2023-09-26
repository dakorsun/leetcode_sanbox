/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    console.log(`SOURCE: ${s}`);
    // collect duplicate letters
    function getIndex(arr, lett, avoidIndex) {
        return arr.findIndex((l, i) => l === lett && i !== avoidIndex);
    }
    function getLastIndex(arr, lett, avoidIndex) {
        return arr.findLastIndex((l, i) => l === lett && i !== avoidIndex);
    }

    const sArr = s.split('');

    const [duplicates] = sArr.reduce(
        ([dup, uniq], letter) => {
            if (getIndex(uniq, letter, -1) > -1) {
                //if (getIndex(dup, letter) === -1) {
                // avoid duplicates in duplicates
                dup.push(letter);
                //}
            } else {
                uniq.push(letter);
            }
            return [dup, uniq];
        },
        [[], []]
    );
    console.log(`-- duplicates: ${duplicates}`);

    // map throught by each duplicate letter and remove at place that will result the lowest charCode Sum;

    const resultArr = [...sArr];
    let dLetterEntries = [];
    let resultingSums = [];
    let sumToRemove = 0;
    let indexToRemove = 0;
    let interimString;

    duplicates.forEach((dLetter) => {
        // grab all indexes where letter appears in a source string
        dLetterEntries = resultArr.reduce((acc, letter, i) => {
            if (letter === dLetter) acc.push(i);
            return acc;
        }, []);

        // get sums for all removal options in the same order as entries array
        resultingSums = dLetterEntries.map((i) => {
            interimString = resultArr.join('');
            const resultString =
                interimString.slice(0, i) + interimString.slice(i + 1);
            return resultString.split('').reduce((acc, letter) => {
                return acc + letter.charCodeAt();
            }, 0);
        });
        // pick lowest sum index to use in entries array
        sumToRemove = resultingSums.reduce((resIndex, sum, i, arr) => {
            if (resIndex === -1) return i;
            return resIndex > i ? i : resIndex;
        }, -1);

        indexToRemove = dLetterEntries[sumToRemove];

        resultArr.splice(indexToRemove, 1);
    });

    // duplicates.sort().reverse();
    // console.log(`-- sorted duplicates: ${duplicates}`);
    /* const sArr = s.split('');
let smallerIndex = -1;
let largerIndex = -1;
let isSmallerBetween = false;
let isLargerBetween = false;
let toRemoveIndex = -1;
duplicates.forEach((dLetter) => {
smallerIndex = getIndex(resultArr, dLetter, -1);
largerIndex = getLastIndex(resultArr, dLetter, smallerIndex);
if (smallerIndex > -1) {
if (largerIndex > -1) {
isSmallerBetween =
    resultArr.findIndex(
        (guess, i) =>
            guess < dLetter &&
            i > smallerIndex &&
            i < largerIndex
    ) > -1;
isLargerBetween =
    resultArr.findIndex(
        (guess, i) =>
            guess > dLetter &&
            i > smallerIndex &&
            i < largerIndex
    ) > -1;
console.log(
    `-- -- "${dLetter}" - smallerIndex: ${smallerIndex}, largerIndex: ${largerIndex}, isSmallerBetween: ${isSmallerBetween}, isLargerBetween: ${isLargerBetween}`
);
toRemoveIndex = smallerIndex;
if (isSmallerBetween && isLargerBetween) {
    toRemoveIndex = smallerIndex;
} else if (isSmallerBetween) {
    toRemoveIndex = smallerIndex;
} else if (isLargerBetween) {
    toRemoveIndex = largerIndex;
}
console.log(`-- -- toRemoveIndex: ${toRemoveIndex}`);
resultArr.splice(toRemoveIndex, 1);
} else {
console.log(
    `-- -- "${dLetter}" - smallerIndex: ${smallerIndex}, largerIndex: ${largerIndex}, isBetween: ${isSmallerBetween}, isLargerBetween: ${isLargerBetween}`
);
console.log(`-- -- toRemoveIndex: ${smallerIndex}`);
resultArr.splice(smallerIndex, 1);
}
}
console.log(`-- interim string: ${resultArr.join('')}`);
});
*/

    return resultArr.join('');
};

module.exports = removeDuplicateLetters;
