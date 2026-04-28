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
            if(tracker.has(w1))
                tracker.set(w1, tracker.get(w1).push(w2))
            else
                tracker.set(w1, [].push(w2));
        }
        console.log(tracker.get('great'))
        for(var i = 0; i < sentence1.length; i++) {
            if(sentence1[i] === sentence2[i])
                continue;
            console.log(tracker.get(sentence1[i]))
            // if(tracker.get(sentence1[i]).contains(sentence2[i]) || (tracker.get(sentence2[i]).contains(sentence1[i])))
                // continue;
            return false;
        }
        return true;
    }
}
