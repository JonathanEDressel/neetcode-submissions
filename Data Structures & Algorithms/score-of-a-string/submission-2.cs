public class Solution {
    public int ScoreOfString(string s) {
        int res = 0;
        int j = 0;
        for(int i = 1; i < s.Length; i++) {
            int d1 = (int) s[i];
            int d2 = (int) s[j];
            res += Math.Abs(d1 - d2);
            j++;
        }
        return res;
    }
}