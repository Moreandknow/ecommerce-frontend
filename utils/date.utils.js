import { addDays, format } from "date-fns";

export function getEstimate(numberEstimate, options = {}) {
  const { returnObject = false } = options;
  if (!numberEstimate) {
    return returnObject ? { start: null, end: null } : "";
  }

  const today = new Date();
  const estimationString = numberEstimate.toString();

  let futureDateStart = null;
  let futureDateEnd = null;

  // Kalo data estimatenya d-d
  if (estimationString.includes("-")) {
    const [startDay, endDay] = estimationString
      .split("-")
      .map((d) => parseInt(d.trim(), 10));

    if (isNaN(startDay) || isNaN(endDay)) {
      return returnObject ? { start: null, end: null } : "";
    }

    futureDateStart = addDays(today, startDay);
    futureDateEnd = addDays(today, endDay);
  } else {
    const startDay = parseInt(estimationString.trim(), 10);

    if (isNaN(startDay)) {
      return returnObject ? { start: null, end: null } : "";
    }

    const endDay = startDay + 2;

    futureDateStart = addDays(today, startDay);
    futureDateEnd = addDays(today, endDay);
  }

  if (returnObject) {
    return {
      start: futureDateStart,
      end: futureDateEnd,
    };
  }

  if (futureDateStart.getMonth() === futureDateEnd.getMonth()) {
    return `${format(futureDateStart, "d")} - ${format(
      futureDateEnd,
      "d MMM"
    )}`;
  } else {
    return `${format(futureDateStart, "d MMM")} - ${format(
      futureDateEnd,
      "d MMM"
    )}`;
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
