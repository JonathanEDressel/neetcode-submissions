class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        for(var i = 0; i < words.length; i++) {
            var wordAcross = words[i];
            var wordDown = '';
            for(var j = 0; j < words.length; j++) {
                if (words[j].length > i) {
                    wordDown += words[j][i];
                }
            }
            if(wordAcross !== wordDown)
                return false;
        }
        return true;
    }
}
