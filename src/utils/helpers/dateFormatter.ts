import { DateManager } from '~/utils/modules';

const ISO_DATE = 'YYYY-MM-DDTHH:mm:ss';
const SHORT_DATE = 'DD/MM/YYYY';
const LONG_DATE = 'D [de] MMMM';
const HOUR_MINUTE = 'HH:mm';

export const formatScreenDateToISO = (date: Date): string =>
  DateManager.utc(date, SHORT_DATE).format(ISO_DATE);

export const formatShortDate = (date: Date): string =>
  DateManager.utc(date).format(SHORT_DATE);

export const formatLongDate = (date: Date): string =>
  DateManager.utc(date).format(LONG_DATE);

export const formatHourMinuteDate = (date: Date): string =>
  DateManager(date).format(HOUR_MINUTE);
