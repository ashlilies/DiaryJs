const DateTimeService = require("../services/DateTimeService");
const WorkDay = class {
    constructor() {
        this.startTime = new Date();
        this.endTime = null;
        this.note = "";
    }
    // Property getter
    get duration() {
        return this.calcDuration();
    }

    // Returns a friendly string that shows the duration of a completed workday
    get durationFriendly() {
        let duration = this.duration;
        let dts = new DateTimeService();
        if (duration != null)
            return dts.getFriendlyDuration(duration);
        return "Unavailable";
    }
    // Call this function to end the day
    clockOut() {
        this.endTime = new Date();
    }
    // Method: return duration if the full day is now over.
    calcDuration() {
        if (this.endTime == null)
            return null;
        return this.endTime - this.startTime;
    }
}

module.exports = WorkDay;