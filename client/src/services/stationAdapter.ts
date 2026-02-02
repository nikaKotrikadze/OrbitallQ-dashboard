import { type Station } from "../data/stations";

export function mapWeatherToStation(
  station: Station,
  weatherApi: any
): Station {
  return {
    ...station,
    weather: {
      condition: weatherApi.weather[0].main,
      temperatureC: Math.round(weatherApi.main.temp),
      windSpeedKmh: Math.round(weatherApi.wind.speed * 3.6),
      precipitationMmH: weatherApi.rain?.["1h"] ?? 0,
      cloudCoverPercent: weatherApi.clouds.all,
    },
    lastUpdated: new Date().toISOString(),
  };
}
