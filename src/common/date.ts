import dayjs from "dayjs";
import pluginIsYesterday from "dayjs/plugin/isYesterday";
import pluginIsToday from "dayjs/plugin/isToday";
import pluginIsTomorrow from "dayjs/plugin/isTomorrow";

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
  return dayjs(date).isAfter(dayjs().subtract(7, "day"));
};

const isLastMonth = (date: number) => {
  return dayjs(date).isAfter(dayjs().subtract(30, "day"));
};

const config: Array<{ text: string; condition: (date: number) => boolean }> = [
  { text: "今天", condition: isToday },
  { text: "昨天", condition: isYesterday },
  { text: "最近7天", condition: isLastWeek },
  { text: "最近30天", condition: isLastMonth },
  { text: "更早", condition: () => true },
];

export const getDateText = (date: number) => {
  return config.find((it) => it.condition(date))?.text;
};
