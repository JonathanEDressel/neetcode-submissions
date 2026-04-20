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
        for(var i = 0; i < intervals.length; i++) {
            for(var j = 0; j < intervals.length; j++) {
                if (i === j)
                    continue;
                var iIdx = intervals[i];
                var jIdx = intervals[j];
                if((iIdx.start > jIdx.start && iIdx.end < jIdx.end) || (iIdx.start < jIdx.start && iIdx.end > jIdx.end))
                    return false;
            }
        }
        return true;
    }
}
