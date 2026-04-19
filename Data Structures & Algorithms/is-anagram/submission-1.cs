public class Solution {
    public bool IsAnagram(string s, string t) {
        if(s.Length != t.Length)
            return false;

        Dictionary<char, int> checker = new Dictionary<char, int>();

        for(int i = 0; i < s.Length; i++) {
            if(checker.ContainsKey(s[i])) {
                checker[s[i]]++;
            }
            else {
                checker[s[i]] = 1;
            }
        }

        for(int i = 0; i < t.Length; i++) {
            if(checker.ContainsKey(t[i])) {
                checker[t[i]]--;
                if (checker[t[i]] < 0)
                    return false;
            }
            else
                return false;
        }
        return true;
    }
}
