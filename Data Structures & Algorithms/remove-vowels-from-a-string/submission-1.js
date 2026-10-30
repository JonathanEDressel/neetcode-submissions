class Solution {
    removeVowels(s) {
        return [...s].filter(c => !'aeiou'.includes(c)).join('')
    }
}
