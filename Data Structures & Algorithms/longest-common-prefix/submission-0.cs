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
                if(strs[i][currIdx] != strs[i+1][currIdx])
                    return res;
            }
            res += strs[0][currIdx];
            currIdx++;
        }

        return res;
    }
}