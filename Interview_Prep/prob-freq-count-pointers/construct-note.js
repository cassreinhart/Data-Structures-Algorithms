// add whatever parameters you deem necessary
function constructNote(message, letters) {
    function freqCounter(str) {
        let frequencies = {};

        for (let char in str) {
            frequencies[char] = frequencies[char]++ || 1;
        }
        return frequencies
    }

    let msgFreq = freqCounter(message);
    let lettersFreq = freqCounter(letters);

    for (let char in msgFreq) {
        if (!lettersFreq[char]) return false;
        if (lettersFreq[char] !== msgFreq[char]) return false;
    }
    return true
}

module.exports = constructNote;
