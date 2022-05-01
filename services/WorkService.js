const WorkDay = require("../models/WorkDay");

class WorkService {
    constructor() {
        this.currentWorkDay = null;
        this.history = [];
    }

    // Returns success result
    clockIn() {
        if (this.currentWorkDay == null) {
            this.currentWorkDay = new WorkDay();
            return true;
        }
        return false;
    }

    // Returns success result
    clockOut() {
        if (this.currentWorkDay != null) {
            this.currentWorkDay.clockOut();
            this.history.push(this.currentWorkDay);
            this.currentWorkDay = null;
            return true;
        }
        return false;
    }
}

// Singleton
module.exports = new WorkService();