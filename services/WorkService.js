const WorkDay = require("../models/WorkDay");

class WorkService {
    constructor() {
        this.currentWorkDay = null;
        this.history = [];
    }

    // Return success result
    clockIn() {
        if (this.currentWorkDay == null) {
            this.currentWorkDay = new WorkDay();
            return true;
        }
        return false;
    }

    // Return success result
    clockOut() {
        if (this.currentWorkDay != null) {
            this.currentWorkDay.clockOut();
            this.history.push(this.currentWorkDay);
            this.currentWorkDay = null;
            return true;
        }
        return false;
    }

    get currentNote() {
        if (this.currentWorkDay != null)
            return this.currentWorkDay.note;
        return null;
    }
    // Return success result
    set currentNote(noteText) {
        if (this.currentWorkDay != null) {
            this.currentWorkDay.note = noteText;
            return true;
        }
        return false;
    }

    get historyNewToOld() {
        return this.history.slice().reverse();
    }
}

// Singleton
module.exports = new WorkService();