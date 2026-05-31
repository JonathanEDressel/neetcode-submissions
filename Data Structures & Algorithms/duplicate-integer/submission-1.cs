public class Solution {
    public bool hasDuplicate(int[] nums) {
        Dictionary<int, int> track = new Dictionary<int, int>();
        for(int i = 0; i < nums.Length; i++) {
            if(track.ContainsKey(nums[i]))
                return true;
            track[nums[i]] = 1;
        }

        return false;
    }
}