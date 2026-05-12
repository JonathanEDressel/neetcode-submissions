class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    dfs(nums, subset, i, res) {
        if(i >= nums.length) {
            res.push([...subset]);
            return;
        }
        subset.push(nums[i])
        this.dfs(nums, subset, i + 1, res);
        subset.pop();
        this.dfs(nums, subset, i + 1, res);
    }

    subsets(nums) {
        var res = [], subset = [];
        this.dfs(nums, subset, 0, res);
        return res;
    }
}
