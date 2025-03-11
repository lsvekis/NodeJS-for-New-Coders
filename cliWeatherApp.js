// For Node.js v18+, fetch is built-in; for older versions, uncomment the next line.
// const fetch = require('node-fetch');
const readline = require('readline');
const apiKey = 'YOUR_API_KEY'; // Replace with your API key
// Create a readline interface for user input.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter a city name to get the current weather: ", (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Could not fetch weather for ${city}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(`\nWeather in ${city}:`);
      console.log(`Temperature: ${data.main.temp}°C`);
      console.log(`Conditions: ${data.weather[0].description}`);
    })
    .catch(error => {
      console.error('Error:', error.message);
    })
    .finally(() => {
      rl.close();
    });
});
