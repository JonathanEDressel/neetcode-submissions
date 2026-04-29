class Solution {
    /**
     * @param {string[]} wordsDict
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    shortestDistance(wordsDict, word1, word2) {
        var d1 = -1, d2 = -1;
        var diff = Infinity;
        for(var i = 0; i < wordsDict.length; i++) {
            if(wordsDict[i] === word1)
                d1 = i;
            if(wordsDict[i] === word2)
                d2 = i;
            if(d1 !== -1 && d2 !== -1) {
                diff = Math.abs(d1 - d2) < diff ? Math.abs(d1 - d2) : diff;
            }
        }
        return diff;
    }
}
