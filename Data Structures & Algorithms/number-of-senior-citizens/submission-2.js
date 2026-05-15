class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */

    isGreaterThan60(str) {
        var res = '';
        for(var i = 0; i < str.length; i++) {
            if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
                res = str[i+1] + str[i+2];
                break;
            }
        }
        return res > 60;
    }

    countSeniors(details) {
        var res = 0;
        for(var i = 0; i < details.length; i++)
            if(this.isGreaterThan60(details[i]))
                res++;
        return res;
    }
}
