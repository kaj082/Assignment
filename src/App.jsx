import { useEffect, useState } from "react";
import WeatherDetailCard from "./component/WeatherDetailCard";
import "./styles.css";

export default function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,weather_code&forecast_days=3"
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log(error, "error in data fetching");
      }
    })();
  }, []);

  return (
    <div className="App">
      <WeatherDetailCard data={weatherData} />
    </div>
  );
}
