public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        if(strs.Length == 1)
            return strs[0];
        string res = "";

        int currIdx = 0;
        while(true)
        {
            bool hasSame = true;
            for(int i = 0; i < strs.Length - 1; i++) {
                var s1 = strs[i][currIdx];
                var s2 = strs[i+1][currIdx];
                if(strs[i].Length <= currIdx || strs[i+1].Length <= currIdx)
                    return res;
                if(s1 != s2)
                    return res;
            }
            res += strs[0][currIdx];
            currIdx++;
        }
        return res;
    }
}