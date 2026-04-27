class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        var tracker = new Map();
        for(var i = 0; i < words.length; i++) {
            var wordAcross = '';
            var wordDown = '';
            for(var j = 0; j < words[i].length; j++) {
                wordAcross += words[i][j];
                wordDown += words[j][i];
            }

            if(tracker.has(wordAcross))
                return true;
            tracker.set(wordAcross, 1);
            if(tracker.has(wordDown))
                return true;
            tracker.set(wordDown, 1);
        }
        return false;
    }
}
