class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    xor(nums) {
        if(nums.length === 0)
            return 0;
        return nums[0] ^ this.xor(nums.slice(1));
    }

    dfs(nums, sub, i) {
        if(i >= nums.length) {
            return this.xor(sub);
        }
        sub.push(nums[i]);
        var left = this.dfs(nums, sub, i + 1);
        sub.pop();
        var right = this.dfs(nums, sub, i + 1);
        return right + left;
    }

    subsetXORSum(nums) {
        var sub = [];
        return this.dfs(nums, sub, 0);
    }
}
