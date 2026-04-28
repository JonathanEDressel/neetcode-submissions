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
            var w1 = similarPairs[i][0];
            var w2 = similarPairs[i][1];
            if (!tracker.has(w1)) 
                tracker.set(w1, []); 
            tracker.get(w1).push(w2);
        }

        for(var i = 0; i < sentence1.length; i++) {
            var w1 = sentence1[i];
            var w2 = sentence2[i];
            if(w1 === w2)
                continue;
            if(tracker.has(w1) && tracker.get(w1).includes(w2))
                continue;
            if(tracker.has(w2) && tracker.get(w2).includes(w1))
                continue;
            return false;
        }
        return true;
    }
}
