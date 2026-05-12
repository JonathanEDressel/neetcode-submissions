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

    dfs(nums, res, sub, i) {
        if(i >= nums.length) {
            res.push([...sub])
            var tmp = this.xor(sub);
            return tmp;
        }
        sub.push(nums[i]);
        var left = this.dfs(nums, res, sub, i + 1);
        sub.pop();
        var right = this.dfs(nums, res, sub, i + 1);
        return right + left;
    }

    subsetXORSum(nums) {
        var sub = [], res = [];
        return this.dfs(nums, res, sub, 0);
    }
}
