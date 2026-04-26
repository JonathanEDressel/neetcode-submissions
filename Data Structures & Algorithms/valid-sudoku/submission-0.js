class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    createArray(nums, i, j) {
        var res = [];
        res.push(nums[i][j]);
        res.push(nums[i-1][j-1]);
        res.push(nums[i+1][j+1]);
        res.push(nums[i-1][j+1]);
        res.push(nums[i+1][j-1]);
        res.push(nums[i-1][j]);
        res.push(nums[i+1][j]);
        res.push(nums[i][j-1]);
        res.push(nums[i][j+1]);
        return res;
    }
    isValidGrid(nums) {
        var tracker = new Map();
        for(var i = 0; i < nums.length; i++) {
            if(nums[i] === '.')
                continue;
            if(tracker.has(nums[i]))
                return false;
            tracker.set(nums[i], 1);
        }
        return true;
    }

    isValidSudoku(board) {
        for(var i = 0; i < board.length; i++) {
            var trackerCol = new Map();
            var trackerRow = new Map();
            for(var j = 0; j < board[i].length; j++) {
                
                if(board[i][j] !== '.') {
                    if(trackerCol.has(board[i][j])) {
                        return false;
                    }
                    trackerCol.set(board[i][j], 1);
                }

                if(board[j][i] !== '.') {
                    if (trackerRow.has(board[j][i])) {
                        return false;
                    }
                    trackerRow.set(board[j][i], 1);
                }
            }
        }
        for(var i = 1; i <= 7; i += 3) {
            for(var j = 1; j <= 7; j += 3) {
                var nums = this.createArray(board, i, j);
                if(!this.isValidGrid(nums)) {
                    return false;
                }
            }
        }
        return true;
    }
}
