/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((x, y) => x.start - y.start);
        for(var i = 1; i < intervals.length; i++) {
            if (intervals[i-1].end > intervals[i].start)
                return false;
        }

        return true;
    }
}
