class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    confusingNumber(n) {
        const map = { '0': '0', '1': '1', '6': '9', '8': '8', '9': '6' };
        const s = n.toString();
        let rotated = '';

        for (const ch of s) {
            if (!(ch in map)) 
                return false;      
            rotated += map[ch];
        }

        rotated = rotated.split('').reverse().join('');
        return rotated !== s; 
    }
}
