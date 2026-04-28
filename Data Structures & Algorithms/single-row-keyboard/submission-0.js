class Solution {
    /**
     * @param {string} keyboard
     * @param {string} word
     * @return {number}
     */
    calculateTime(keyboard, word) {
        var start = 0;
        var res = 0;
        var tracker = new Map();
        for(var i = 0; i < keyboard.length; i++) {
            tracker.set(keyboard[i], i);
        }   

        for(var i = 0; i < word.length; i++) {
            var d = tracker.get(word[i]);
            res += Math.abs(d - start);
            start = d;
        }

        return res;
    }
}
