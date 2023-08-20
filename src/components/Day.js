import { getWeatherIcon } from "../helpers/getWeatherIcon";

export function Day({ date, min, max, code }) {
  return (
    <li className="day">
      <span>{getWeatherIcon(code)}</span>
      <p>{date}</p>
      <p>
        {min}&deg; &mdash; <strong>{max}</strong>
        &deg;
      </p>
    </li>
  );
}
