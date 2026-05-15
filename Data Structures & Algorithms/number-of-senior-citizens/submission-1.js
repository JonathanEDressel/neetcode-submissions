class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */

    isGreaterThan60(str) {
        for(var i = 0; i < str.length; i++) {
            if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57)
                return parseInt(str[i] + str[i+1]) > 60;
        }
        return false;
    }

    countSeniors(details) {
        var res = 0;
        for(var i = 0; i < details.length; i++)
            if(this.isGreaterThan60(details[i]))
                res++;
        return res;
    }
}
