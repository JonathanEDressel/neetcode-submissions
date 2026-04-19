public class Solution {
    public int LengthOfLongestSubstring(string s) {
        var res = 0;
        Dictionary<char, int> mapper = new Dictionary<char, int>();
        int l = 0, r = 0;
        while(r < s.Length) {
            if (!mapper.ContainsKey(s[r])) {
                mapper.Add(s[r], 0);
                r++;
            }
            else {
                while(mapper.ContainsKey(s[r])) {
                    mapper.Remove(s[l]);
                    l++;
                }
            }
            if(mapper.Count > res)
                res = mapper.Count;
        }

        return res;
    }
}
