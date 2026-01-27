export async function getWeather(lat: string, lon: string) {
  const latNum = Number(lat);
  const lonNum = Number(lon);

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latNum}&lon=${lonNum}&units=metric&appid=${
      import.meta.env.VITE_WEATHER_KEY
    }`
  );

  return res.json();
}
