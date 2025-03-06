import dayjs from 'dayjs';
import 'dayjs/locale/de';
import 'dayjs/locale/en';
import 'dayjs/locale/pl';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(localizedFormat);

export const DATE_FORMAT = 'L';

export const formatDateRelative = (date: string | number, locale: string, today: string, yesterday: string) => {
    const formattedDate = dayjs(date);

    if (locale) {
        formattedDate.locale(locale);
    }

    if (formattedDate.isToday()) {
        return `${formattedDate.format('HH:mm')} ${today}`;
    } else if (formattedDate.isYesterday()) {
        return yesterday;
    } else {
        return formattedDate.format(DATE_FORMAT);
    }
};
