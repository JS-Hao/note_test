import dayjs from 'dayjs';
import pluginIsYesterday from 'dayjs/plugin/isYesterday';
import pluginIsToday from 'dayjs/plugin/isToday';
import pluginIsTomorrow from 'dayjs/plugin/isTomorrow';

dayjs.extend(pluginIsYesterday);
dayjs.extend(pluginIsToday);
dayjs.extend(pluginIsTomorrow);

const isToday = (date: number) => {
  return dayjs(date).isToday();
};

const isYesterday = (date: number) => {
  return dayjs(date).isYesterday();
};

const isLastWeek = (date: number) => {
  return dayjs(date).isAfter(dayjs().subtract(7, 'day'));
};

const isLastMonth = (date: number) => {
  return dayjs(date).isAfter(dayjs().subtract(30, 'day'));
};

const config: Array<{ date: string; condition: (date: number) => boolean }> = [
  { date: '今天', condition: isToday },
  { date: '昨天', condition: isYesterday },
  { date: '最近7天', condition: isLastWeek },
  { date: '最近30天', condition: isLastMonth },
  { date: '更早', condition: () => true },
];

export const getDateRange = (date: number) => {
  return config.find((it) => it.condition(date))?.date;
};

export const formatDate = (date: number) => {
  return dayjs(date).format('YYYY年MM月DD日 HH:mm');
};
