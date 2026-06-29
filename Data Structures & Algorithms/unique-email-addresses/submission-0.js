class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        //split based on @,
        //left side goes into key, right side goes into value

        var mapper = new Map();
        for (var i = 0; i < emails.length; i++) {
            var email = emails[i].split('@');
            var local = email[0].replaceAll(".", "").replaceAll("+", "");
            var domain = email[1].replace(".", "");
            var validDomain = !domain.includes(".", "") && !domain.includes("+", "");
            console.log(local, validDomain)
            if(mapper.has(local) || !validDomain)
                continue;
            mapper.set(local, 1);
        }
        return mapper.size;
    }
}
