import { addDays, format } from "date-fns";

export function getEstimate(numberEstimate) {
  if (!numberEstimate) {
    return "";
  }

  const today = new Date();
  const estimationString = numberEstimate.toString();

  // Kalo data estimatenya d-d
  if (estimationString.includes("-")) {
    const [startDay, endDay] = estimationString
      .split("-")
      .map((d) => parseInt(d.trim(), 10));

    if (isNaN(startDay) || isNaN(endDay)) return "";

    const startDate = addDays(today, startDay);
    const endDate = addDays(today, endDay);

    if (startDate.getMonth() === endDate.getMonth()) {
      return `${format(startDate, "d")} - ${format(endDate, "d MMM")}`;
    } else {
      return `${format(startDate, "d MMM")} - ${format(endDate, "d MMM")}`;
    }
  }

  // Kalo data estimatenya d, d + 2
  else {
    const startDay = parseInt(estimationString.trim(), 10);

    if (isNaN(startDay)) return "";

    const endDay = startDay + 2;

    const startDate = addDays(today, startDay);
    const endDate = addDays(today, endDay);

    if (startDate.getMonth() === endDate.getMonth()) {
      return `${format(startDate, "d")} - ${format(endDate, "d MMM")}`;
    } else {
      return `${format(startDate, "d MMM")} - ${format(endDate, "d MMM")}`;
    }
  }
}

export function getSecondsFromDate(stringDate) {
  const targetTime = new Date(stringDate);

  // Mengambil waktu saat ini
  const currentTime = new Date();

  // Menghitung selisih waktu dalam milidetik
  const differenceInMillis = targetTime - currentTime;

  // Mengonversi selisih waktu dari milidetik ke detik
  return Math.floor(differenceInMillis / 1000);
}
