class Solution {
    removeVowels(s) {
        var vowels = new Map();
        vowels.set('a', 0);
        vowels.set('e', 0);
        vowels.set('i', 0);
        vowels.set('o', 0);
        vowels.set('u', 0);

        var res = '';
        for(var i = 0; i < s.length; i++) {
            if(!vowels.has(s[i]))
                res += s[i];
        }

        return res;
    }
}
