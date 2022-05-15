/*
 * Accepts a Date object and turns it into a friendly string representation.
 */
const formatDate = (date) => {
    return date.toLocaleString("en-SG", {
        hour12: false,
        weekday: "long",
        day: "numeric",
        month: 'short',
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

const timeDuration = (date1, date2) => {
    const DTS = require("../services/DateTimeService");
    diff = date2 - date1;
    const dts = new DTS();
    return dts.getFriendlyDuration(diff);
}

module.exports = {formatDate, timeDuration};