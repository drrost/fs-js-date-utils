import {DateUtils} from "./DateUtils.js";

export const NOMINATIVE = 'nominative';
export const ACCUSATIVE = 'accusative';

// Minutes

const getMinutesNominative = (minutes) => {
    if (minutes >= 10 && minutes <= 20) {
        return minutes + ' хвилин';
    }
    switch (minutes % 10) {
        case 1:
            return minutes + ' хвилина';
        case 2:
        case 3:
        case 4:
            return minutes + ' хвилини';
        default:
            return minutes + ' хвилин';
    }
}

const getMinutesAccusative = (minutes) => {
    if (minutes >= 10 && minutes <= 20) {
        return minutes + ' хвилин';
    }
    switch (minutes % 10) {
        case 1:
            return minutes + ' хвилину';
        case 2:
        case 3:
        case 4:
            return minutes + ' хвилини';
        default:
            return minutes + ' хвилин';
    }
}

const getMinutes = (minutes, _case) => {
    switch (_case) {
        case NOMINATIVE:
            return getMinutesNominative(minutes);
        case ACCUSATIVE:
            return getMinutesAccusative(minutes);
    }
}

// Hours

const getHoursNominative = (hours) => {
    if (hours >= 10 && hours <= 20) {
        return hours + ' годин';
    }
    switch (hours % 10) {
        case 1:
            return hours + ' година';
        case 2:
        case 3:
        case 4:
            return hours + ' години';
        default:
            return hours + ' годин';
    }
}

const getHoursAccusative = (hours) => {
    if (hours >= 10 && hours <= 20) {
        return hours + ' годин';
    }
    switch (hours % 10) {
        case 1:
            return hours + ' годину';
        case 2:
        case 3:
        case 4:
            return hours + ' години';
        default:
            return hours + ' годин';
    }
}

const getHours = (hours, _case) => {
    switch (_case) {
        case NOMINATIVE:
            return getHoursNominative(hours);
        case ACCUSATIVE:
            return getHoursAccusative(hours);
    }
}

// Days

const getDaysNominative = (days) => {
    if (days >= 10 && days <= 20) {
        return days + ' діб';
    }
    switch (days % 10) {
        case 1:
            return days + ' доба';
        case 2:
        case 3:
        case 4:
            return days + ' доби';
        default:
            return days + ' діб';
    }
}

const getDaysAccusative = (days) => {
    if (days >= 10 && days <= 20) {
        return days + ' діб';
    }
    switch (days % 10) {
        case 1:
            return days + ' добу';
        case 2:
        case 3:
        case 4:
            return days + ' доби';
        default:
            return days + ' діб';
    }
}

const getDays = (days, _case) => {
    switch (_case) {
        case NOMINATIVE:
            return getDaysNominative(days);
        case ACCUSATIVE:
            return getDaysAccusative(days);
    }
}

// Main

export const getHumanReadable = (dateTime1, dateTime2, _case = NOMINATIVE) => {
    const diff = DateUtils.getTimeDiffInMinutes(dateTime1, dateTime2);
    if (diff === 0) {
        return getMinutes(diff, _case);
    }

    const days = Math.floor(diff / (24 * 60));
    let hours = Math.floor(diff / 60);
    if (days) {
        hours %= 24;
    }
    const minutes = diff % 60;

    let result = '';
    if (minutes) {
        result = getMinutes(minutes, _case);
    }
    if (hours) {
        result = getHours(hours, _case) + (result ? ' ' + result : '');
    }
    if (days) {
        result = getDays(days, _case) + (result ? ' ' + result : '');
    }

    return result;
}
