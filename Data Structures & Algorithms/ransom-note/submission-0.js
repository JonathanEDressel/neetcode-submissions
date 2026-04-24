class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        var tracker = new Map();
        for(var i = 0; i < magazine.length; i++) {
            if(tracker.has(magazine[i])) {
                tracker.set(magazine[i], tracker.get(magazine[i]) + 1);
            }
            else {
                tracker.set(magazine[i], 1);
            }
        }
        for(var i = 0; i < ransomNote.length; i++) {
            if(!tracker.has(ransomNote[i])) {
                return false;
            }
            tracker.set(ransomNote[i], tracker.get(ransomNote[i])-1);
            if(tracker.get(ransomNote[i]) < 0)
                return false;
        }
        return true;
    }
}
