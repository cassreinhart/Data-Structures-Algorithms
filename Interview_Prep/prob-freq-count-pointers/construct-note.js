// add whatever parameters you deem necessary
function constructNote(message, letters) {
    function freqCounter(str) {
        let frequencies = {};

        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (!frequencies[char]) frequencies[char] = 1;
            else {
                frequencies[char]++
            }
        }
        return frequencies
    }

    let msgFreq = freqCounter(message);
    let lettersFreq = freqCounter(letters);

    console.log(msgFreq, lettersFreq)

    for (let char in msgFreq) {
        if (!lettersFreq[char]) return false;
        if (lettersFreq[char] < msgFreq[char]) return false;
    }
    return true //there are >= the letters required for the msg
}

module.exports = constructNote;
