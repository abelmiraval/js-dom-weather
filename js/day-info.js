import { createDOM } from "./utils/dom.js";
import { formatTemp, formatWindSpeed } from "./utils/format-data.js";

function tabInfoTemplate(id, { temp_max, temp_min, humidity, windSpeed }) {
  return ` <div class="dayWeather-summary" tabindex="0" aria-labelledby="item-${id}">
      <div class="max-temp">
        <p>Máx: </p>
        <span>${temp_max}</span>
      </div>
      <div class="min-temp">
        <p>Mín: </p>
        <span>${temp_min}</span>
      </div>
      <div class="wind">
        <p>Viento: </p>
        <span>${windSpeed}</span>
      </div>
      <div class="humidity">
        <p>Humedad: </p>
        <span>${humidity}%</span>
      </div>
    </div>`;
}

export function createTabInfo(id,weather) {

  const temp_max = formatTemp(weather.main.temp_max);
  const temp_min = formatTemp(weather.main.temp_min);
  const humidity = weather.main.humidity
  const windSpeed = formatWindSpeed(weather.wind.speed)
  const config = {
    temp_max,
    temp_min,
    humidity,
    windSpeed,
  };

  const $tabInfo = createDOM(tabInfoTemplate(id,config));
  if (id > 0) {
    $tabInfo.hidden = true;
  }
  return $tabInfo;
}