import { formatDay } from "../utils/formatters/formatDay";
import { Day } from "./Day";

export function Weather({
  location,
  weather: {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: dates,
    weathercode: codes,
  },
}) {
  return (
    <div>
      <h2>Weather {location}</h2>
      <ul className="weather">
        {dates.map((date, i) => (
          <Day
            key={date}
            date={formatDay(date)}
            min={Math.floor(min.at(i))}
            max={Math.ceil(max.at(i))}
            code={codes.at(i)}
          />
        ))}
      </ul>
    </div>
  );
}
