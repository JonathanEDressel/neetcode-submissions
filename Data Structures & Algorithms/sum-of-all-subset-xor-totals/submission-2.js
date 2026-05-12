class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    

    subsetXORSum(nums) {
        var res = 0;
        const dfs = (i, sub) => {
            var t = 0;
            for(var num of sub)
                t ^= num;
            res += t;

            for(var j = i; j < nums.length; j++) {
                sub.push(nums[j]);
                dfs(j + 1, sub);
                sub.pop();
            }
        }

        dfs(0, []);
        return res;
    }
}
