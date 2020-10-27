import format from 'date-fns/format';

const DATE_FORMAT = 'EEEE, MMMM d';
const MONTH_DAY_FORMAT = 'MMMM d, yyyy';
const MONTH_FORMAT = 'MMMM';
const MONTH_YEAR_FORMAT = 'MMMM yyyy';
const SHORT_DATE_FORMAT = 'MM/dd/yyyy';
const SHORT_DATE_TIME_FORMAT = 'MM/dd/yy h:mm a';
const TIME_FORMAT = 'h:mm a..aaa';

const formatDate = date => format(date, DATE_FORMAT);
const formatMonth = date => format(date, MONTH_FORMAT);
const formatMonthDay = date => format(date, MONTH_DAY_FORMAT);
const formatMonthYear = date => format(date, MONTH_YEAR_FORMAT);
const formatShortDate = date => format(date, SHORT_DATE_FORMAT);
const formatShortDateTime = date => format(date, SHORT_DATE_TIME_FORMAT);
const formatTime = date => format(date, TIME_FORMAT);

export {
  formatDate,
  formatMonth,
  formatMonthDay,
  formatMonthYear,
  formatShortDate,
  formatShortDateTime,
  formatTime,
};
