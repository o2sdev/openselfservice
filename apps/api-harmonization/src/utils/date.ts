import dayjs from 'dayjs';
import 'dayjs/locale/de';
import 'dayjs/locale/en';
import 'dayjs/locale/pl';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

export const DATE_FORMAT = 'L';

export const formatDateRelative = (
    date: string | number,
    locale: string,
    today: string,
    yesterday: string,
    timezone?: string,
) => {
    let formattedDate = dayjs(date);

    if (!formattedDate.isValid()) {
        return '';
    }

    if (locale) {
        formattedDate = formattedDate.locale(locale);
    }

    if (timezone) {
        formattedDate = formattedDate.tz(timezone);
    } else {
        formattedDate = formattedDate.tz('Europe/London');
    }

    if (formattedDate.isToday()) {
        return `${formattedDate.format('HH:mm')} ${today}`;
    } else if (formattedDate.isYesterday()) {
        return yesterday;
    } else {
        return formattedDate.format(DATE_FORMAT);
    }
};

export const formatTime = (date: string | number, locale: string, timezone?: string) => {
    let formattedTime = dayjs(date);

    if (!formattedTime.isValid()) {
        return '';
    }

    if (locale) {
        formattedTime = formattedTime.locale(locale);
    }

    if (timezone) {
        formattedTime = formattedTime.tz(timezone);
    } else {
        formattedTime = formattedTime.tz('Europe/London');
    }

    return formattedTime.format('LT');
};
