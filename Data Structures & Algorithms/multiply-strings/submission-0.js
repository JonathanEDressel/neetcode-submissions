class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */

    stringToInt(str) {
        let result = 0;

        for (let i = 0; i < str.length; i++) {
            const digit = str.charCodeAt(i) - 48;
            if (digit < 0 || digit > 9) break;
            result = result * 10 + digit;
        }

        return result;
    }

    multiply(num1, num2) {
        return (this.stringToInt(num1) * this.stringToInt(num2)).toString();
    }
}
