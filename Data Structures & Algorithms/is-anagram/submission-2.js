class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length)
            return false;

        var tracker = new Map();
        for(var i = 0; i < s.length; i++)
        {
            if (tracker.has(s[i]))
               tracker.set(s[i], tracker.get(s[i])+1);
            else
            {
                tracker.set(s[i], 1);
            }
        }
        for (var i = 0; i < t.length; i++)
        {
            if(tracker.has(t[i]))
               tracker.set(t[i], tracker.get(t[i])-1);
            else
               return false;
            if(tracker.get(t[i]) < 0)
               return false;
        }
        return true;
    }
}
