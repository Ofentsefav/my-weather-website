function getWeather() {
    const apiKey = '6be550484bbf0d8a9e75e6540545dd33';
    const locationInput = document.getElementById('locationInput');
    const resultDiv = document.getElementById('result');

    const city = locationInput.value;

    if (!city) {
        resultDiv.innerHTML = 'Please enter a city.';
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert to Celsius

            const resultHTML = `<p>Weather in ${city}: ${weatherDescription}</p>
                                <p>Temperature: ${temperature} &#8451;</p>`;

            resultDiv.innerHTML = resultHTML;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            resultDiv.innerHTML = 'Error fetching weather data. Please try again.';
        });
}
