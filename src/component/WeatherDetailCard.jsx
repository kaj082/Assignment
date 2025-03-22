import "./WeatherDetailCard.css";

const WeatherDetailCard = ({ data }) => {
  console.log(data, "data");
  const weatherDescriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Light rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Light snow",
    73: "Moderate snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };
  const getWeatherDescription = (code) => {
    return weatherDescriptions[code] || "Unknown weather";
  };
  const formatTime = (timeStr) => {
    const date = new Date(timeStr);
    return `${date.getHours()}:${
      date.getMinutes() < 10 ? "0" : ""
    }${date.getMinutes()}`;
  };
  const hourly_time_and_weather = data.hourly;

  return (
    <div className="WeatherDetailCard">
      <h1>Weather Data</h1>
      <div className="label_value_container">
        <p className="label">user location:</p>
        <p className="value">
          {data.latitude} - {data.longitude}
        </p>
      </div>

      <p className="label">Past 3 Days Temp</p>

      {data?.hourly?.time.map((time, index) => (
        <div key={index} className="label_value_container">
          <h2 className="value">{formatTime(time)}</h2>
          <p className="value">
            Temperature: {data?.hourly.temperature_2m[index]}°C
          </p>
          <p className="value">
            {getWeatherDescription(data?.hourly.weather_code[index])}
          </p>
        </div>
      ))}
      {/* <div className="label_value_container">
        <p className="label">current temperature,</p>
        <p className="value">val</p>
      </div> */}
      {/* <div>
        {hourly_time_and_weather.slice(0, 3).map(() => (
          <div className="label_value_container">
            <p className="label">weather description,</p>
            <p className="value">{getWeatherDescription()}</p>
            <p className="value">{getWeatherDescription()}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default WeatherDetailCard;
