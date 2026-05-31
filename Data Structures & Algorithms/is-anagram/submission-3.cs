public class Solution {
    public bool IsAnagram(string s, string t) {
        Dictionary<char, int> tracker = new Dictionary<char, int>();
        for (int i = 0; i < s.Length; i++) {
            int d = 1;
            if (tracker.ContainsKey(s[i])) {
                d += tracker[s[i]];
            }
            tracker[s[i]] = d;
        }

        for (int i = 0; i < t.Length; i++) {
            if(!tracker.ContainsKey(t[i]) || tracker[t[i]] < 0)
                return false;
            tracker[t[i]]--;
        }
        return true;
    }
}
