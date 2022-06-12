class DateTimeService {
    // Get time difference as a string in ms
    getFriendlyDuration(ms) {
        let seconds = ms / 1000;
        if (seconds < 60)
            return `${seconds} seconds`;

        let mins = 0;
        for (; seconds >= 60; seconds -= 60)
            ++mins;

        if (mins < 60)
            return `${mins} mins, ${seconds} seconds`;

        let hours = 0;
        for (; mins >= 60; mins -= 60)
            ++hours;

        if (hours < 24)
            return `${hours} hours, ${mins} minutes, ${seconds} seconds`;

        let days = 0;
        for (; hours >= 24; hours -= 24)
            ++days;

        return `${days} days, ${hours} hours, ${mins} mins, ${seconds} seconds`;
    }
}

module.exports = DateTimeService;