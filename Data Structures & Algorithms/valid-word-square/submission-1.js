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
            console.log(tracker)
            if(tracker.has(wordAcross))
                return true;
            console.log('adding word across')
            tracker.set(wordAcross, 1);
            console.log('added - ', wordDown)
            console.log('logging - ', tracker.has(wordDown))
            if(tracker.has(wordDown))
                return true;
            console.log('added word down')
            
            tracker.set(wordDown, 1);
        }
        return false;
    }
}
