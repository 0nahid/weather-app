const searchBtn = document.getElementById('search-btn');
const city = document.getElementById('searchCity').innerText;
searchBtn.addEventListener('click', function () {
    const searchCityInput = document.getElementById('search-city-input').value;
    document.getElementById('searchCity').innerText = searchCityInput;
    searchWeather(searchCityInput);
})

function searchWeather(city) {
    const query = city;
    const apiKey = '1a301874a116ded8ea06640d46bfd1f4';
    const unit = 'metric';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${query}&units=${unit}`;
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            document.getElementById('tempData').innerText = data.main.temp;
            document.getElementById('lead').innerText = data.weather[0].main;
            const weatherIcon = data.weather[0].icon;
            const imageUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
            document.getElementById('imageUrl').src = imageUrl;
        })
}
searchWeather(city);