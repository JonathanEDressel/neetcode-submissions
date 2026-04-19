public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> complements = new Dictionary<int, int>();

        for(int i = 0; i < nums.Length; i++)
        {   
            var t = target - nums[i];
            if (complements.TryGetValue(nums[i], out var v))
            {
                return [v, i];
            }
            complements[t] = i;
        }
        return [0,0];
    }
}
