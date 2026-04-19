class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length)
            return false;

        var len = s.length;
        var m1 = new Map();
        for(var i = 0; i < len; i++) {
            if(m1.has(s[i]))
                m1.set(s[i], m1.get(s[i]) + 1);
            else
                m1.set(s[i], 1);
        }

        for(var i = 0; i < len; i++) {
            if(!m1.has(t[i]) || m1.get(t[i]) <= 0)
                return false;
            m1.set(t[i], m1.get(t[i]) - 1);
        }
        return true;
    }
}
