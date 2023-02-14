const axios = require("axios");

const API_KEY = "c36def2464e21e5dfdef2667c0817ff2";

const checkWeather = async (lon, lat) => {
  try {
    const result = await axios.get(
      `https://history.openweathermap.org/data/2.5/history/city?lat=${lat}&lon=${lon}&type=hour&start=1609459200&end=1609459200&appid=${API_KEY}`
    );
    let weatherHtml = "";
    let roundHour = 1;
    for (const hourData of result.data.list) {
      const temp = hourData.main.temp;
      if (temp >= 15 && temp <= 35) {
        weatherHtml += `<p>At hour ${roundHour}, the temperature is between 15 and 35 degrees Celsius</p>`;
      }
      roundHour++;
    }
    if (weatherHtml === "") {
      weatherHtml = "<p>No round hours found with the desired temperature range</p>";
    }
    return weatherHtml;
  } catch (error) {
    return `Failed to fetch weather data. Error: ${error}`;
  }
};

module.exports = checkWeather;
