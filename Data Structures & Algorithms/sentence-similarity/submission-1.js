class Solution {
    /**
     * @param {string[]} sentence1
     * @param {string[]} sentence2
     * @param {string[][]} similarPairs
     * @return {boolean}
     */
    areSentencesSimilar(sentence1, sentence2, similarPairs) {
        if(sentence1.length !== sentence2.length)
            return false;
        var tracker = new Map();

        for(var i = 0; i < similarPairs.length; i++) {
            tracker.set(similarPairs[i][0], similarPairs[i][1]);
        }

        for(var i = 0; i < sentence1.length; i++) {
            if(sentence1[i] === sentence2[i])
                continue;
            if(tracker.get(sentence1[i]) === sentence2[i] || (tracker.get(sentence2[i]) === sentence1[i]))
                continue;
            return false;
        }
        return true;
    }
}
