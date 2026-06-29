class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        var mapper = new Set();

        for(var e of emails) {
            var [l, d] = e.split('@');
            l = l.split('+')[0];
            l = l.replaceAll('.', '');
            mapper.add(`${l}@${d}`);
        }
        return mapper.size;
    }
}
