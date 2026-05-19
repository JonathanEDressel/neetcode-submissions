class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    confusingNumber(n) {
        var s = n.toString();
        var res = '';
        for(var i = 0; i < s.length; i++) {
            switch(s[i]) {
                case '6':
                    res += '9';
                    break;
                case '9':
                    res += '6';
                    break;   
                default:
                    res += s[i];
            }
        }
        return res.split("").reverse().join("") !== s;
    }
}
