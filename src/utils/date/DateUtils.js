import {getHumanReadable} from "./DateUtils+humanReadable.js";

export function dateFromString(dateString) {
    const dataSplit = dateString.split('.');
    return new Date(dataSplit[2], dataSplit[1] - 1, dataSplit[0]);
}

export function dateToString(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return dd + '.' + mm + '.' + yyyy;
}

const addZeroIfNecessary = (v) => {
    if (v < 10) {
        return '0' + v;
    }
    return v;
}

export const DateUtils = {
    isValidStrict: (dateString) => {
        const isValidDDMMYYYY = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;
        return isValidDDMMYYYY.test(dateString);
    },

    getFormattedTime: (date) => {
        let hh = date.getHours();
        hh = addZeroIfNecessary(hh);

        let mm = date.getMinutes();
        mm = addZeroIfNecessary(mm);

        return hh + ":" + mm;
    },

    getCurrentDate: () => {
        return getCurrentDate();
    },

    getCurrentDateTime: () => {
        return DateUtils.getCurrentDate() + ' ' + DateUtils.getCurrentTime();
    },

    getCurrentTime: () => {
        const date = new Date();
        return DateUtils.getFormattedTime(date);
    },

    isValidDate: (dateString) => {
        const isValidMMYYYY = /^(0[1-9]|1[0-2]).?([0-9]{4})$/
        const isValidYYYY = /^([0-9]{4})$/
        return DateUtils.isValidStrict(dateString) || isValidMMYYYY.test(dateString) || isValidYYYY.test(dateString);
    },

    isValidTime: (timeString) => {
        const isValidTime = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
        return isValidTime.test(timeString);
    },

    dropSeconds: (timeString) => {
        if (timeString) {
            const parts = timeString.split(':');
            if (parts < 3) {
                return timeString;
            }
            return parts[0] + ':' + parts[1];
        }
        return null;
    },

    getTimeDiffInHours(dateTime1, dateTime2) {
        const dtObject1 = DateUtils.getDateObjectFromDateTime(dateTime1);
        const dtObject2 = DateUtils.getDateObjectFromDateTime(dateTime2);

        let result = (dtObject2 - dtObject1) / 3600000.0;
        result = Math.ceil(result);

        return result;
    },

    getTimeDiffInMinutes(dateTime1, dateTime2) {
        const dtObject1 = DateUtils.getDateObjectFromDateTime(dateTime1);
        const dtObject2 = DateUtils.getDateObjectFromDateTime(dateTime2);

        let result = (dtObject2 - dtObject1) / 60000.0;
        result = Math.ceil(result);

        return result;
    },

    humanReadableDiff: getHumanReadable,

    getDateObjectFromDateTime: (dateTime) => {
        const [date, time] = dateTime.split(' ');
        const [day, month, year] = date.split('.');
        const [hours, minutes] = time.split(':');

        return  new Date(+year, +month - 1, +day, +hours, +minutes);
    },

    getWeekDay: (date) => {
        if (!date) {
            return '';
        }
        return dateFromString(date).toLocaleString('uk-UA', {weekday: 'long'})
    },

    splitDateTime: (dateTime) => {
        if (!dateTime) {
            return dateTime;
        }

        const parts = dateTime.split(' ');

        if (parts.length === 1) {
            return parts[0];
        }
        return [parts[0], parts[1]];
    },

    splitHoursMinutes: (hoursMinutes) => {
        if (!hoursMinutes) {
            return hoursMinutes;
        }

        const parts = hoursMinutes.split(':');
        if (parts.length === 1) {
            return hoursMinutes;
        }

        return [parts[0], parts[1]];
    }
};

export function getCurrentDate() {
    const today = new Date();
    return dateToString(today);
}

export function getCurrentYear() {
    const currentDate = getCurrentDate();
    const yearString = currentDate.split('.')[2];
    return parseInt(yearString);
}

export function datePlusDays(dateString, days) {
    const date = dateFromString(dateString);
    date.setDate(date.getDate() + days);
    return dateToString(date);
}

export function datePlusMonth(dateString, months) {
    const date = dateFromString(dateString);
    date.setMonth(date.getMonth() + months);
    return dateToString(date);
}

export function dateLessOrEqual(d1, d2) {
    const date1 = dateFromString(d1);
    const date2 = dateFromString(d2);
    return date1 <= date2;
}

export function dateLess(d1, d2) {
    const date1 = dateFromString(d1);
    const date2 = dateFromString(d2);
    return date1 < date2;
}

export function dateGreater(d1, d2) {
    const date1 = dateFromString(d1);
    const date2 = dateFromString(d2);
    return date1 > date2;
}

export function daysBetween(d1, d2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const date1 = dateFromString(d1);
    const date2 = dateFromString(d2);
    return Math.round((date2 - date1) / oneDay);
}

export function getWeekNumber(dateString) {
    const date = dateFromString(dateString);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    let week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
        - 3 + (week1.getDay() + 6) % 7) / 7);
}

export function getMondayFor(dateString) {
    let date = dateFromString(dateString);
    const day = date.getDay(), diff = date.getDate() - day + (day == 0 ? -6 : 1);
    date = new Date(date.setDate(diff));
    return dateToString(date);
}

export function monthNameBy(date) {
    const elements = date.split('.');
    const month = elements[1];
    switch (month) {
        case '01':
            return 'Січень';
        case '02':
            return 'Лютий';
        case '03':
            return 'Березень';
        case '04':
            return 'Квітень';
        case '05':
            return 'Травень';
        case '06':
            return 'Червень';
        case '07':
            return 'Липень';
        case '08':
            return 'Серпень';
        case '09':
            return 'Вересень';
        case '10':
            return 'Жовтень';
        case '11':
            return 'Листопад';
        case '12':
            return 'Грудень';
    }
}

export function replaceDay(dateString, newDay) {
    let elements = dateString.split('.');
    return newDay + '.' + elements[1] + '.' + elements[2];
}

export function replaceYear(dateString, newYear) {
    let elements = dateString.split('.');
    return elements[0] + '.' + elements[1] + '.' + newYear;
}

export function getDayFromDate(dateString) {
    let elements = dateString.split('.');
    return elements[0];
}

export function getDayInt(dateString) {
    let elements = dateString.split('.');
    return parseInt(elements[0]);
}

export function getMonthInt(dateString) {
    let elements = dateString.split('.');
    return parseInt(elements[1]);
}

export function getYearInt(dateString) {
    let elements = dateString.split('.');
    return parseInt(elements[2]);
}
