let searchInp = document.querySelector('.weather_search');
let city = document.querySelector('.weather_city');
let day1 = document.querySelector('.weather_day1');
let day2 = document.querySelector('.weather_day2');
let day3 = document.querySelector('.weather_day3');
let day4 = document.querySelector('.weather_day4');
let day5 = document.querySelector('.weather_day5');
let day6 = document.querySelector('.weather_day6');
let day7 = document.querySelector('.weather_day7');
let humidity1 = document.querySelector('.weather_indicator-humidity > .value');
let wind1 = document.querySelector('.weather_indicator-wind > .value');
let pressure1 = document.querySelector('.weather_indicator-pressure > .value');
let image1 = document.querySelector('.weather_image');
let time = document.querySelector('.weather_time');
let temperature1 = document.querySelector('.weather_temperature > .value');
let temperature2 = document.querySelector('.temperature_day2 > .value');
let temperature3 = document.querySelector('.temperature_day3 > .value');
let temperature4 = document.querySelector('.temperature_day4 > .value');
let temperature5 = document.querySelector('.temperature_day5 > .value');
let temperature6 = document.querySelector('.temperature_day6 > .value');
let temperature7 = document.querySelector('.temperature_day6 > .value');
let newicon1 = document.querySelector('.weather_image');
let newicon2 = document.querySelector('.iconday2');
let newicon3 = document.querySelector('.iconday3');
let newicon4 = document.querySelector('.iconday4');
let newicon5 = document.querySelector('.iconday5');
let newicon6 = document.querySelector('.iconday6');
let newicon7 = document.querySelector('.iconday7');

let weatherAPIKey = 'cebc7a6369bb5c7e430a8598edb0681b';
let weatherBaseEndpoint =
    'https://api.openweathermap.org/data/2.5/forecast?cnt=7&units=metric&appid=' + weatherAPIKey;

let getWeatherByCityName = async (city) => {
    let endpoint = weatherBaseEndpoint + '&q=' + city;
    let response = await fetch(endpoint);
    let weather = await response.json();
    return weather;
};

// Set default city name
const defaultCity = "Delhi"; // Change this to your desired default city

// Set the default city name in the search input
searchInp.value = defaultCity;

// Call the updateCurrentWeather function with the default city
getWeatherByCityName(defaultCity)
    .then(weather => updateCurrentWeather(weather))
    .catch(error => console.log(error));

searchInp.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        let weather = await getWeatherByCityName(searchInp.value);
        updateCurrentWeather(weather);
    }
});

let updateCurrentWeather = (data) => {
    city.textContent = data.city.name + ', ' + data.city.country;
    day1.textContent = dayOfWeek(0);
    day2.textContent = dayOfWeek(1);
    day3.textContent = dayOfWeek(2);
    day4.textContent = dayOfWeek(3);
    day5.textContent = dayOfWeek(4);
    day6.textContent = dayOfWeek(5);
    day7.textContent = dayOfWeek(6);

    humidity1.textContent = data.list[0].main.humidity;
    pressure1.textContent = data.list[0].main.pressure;
    time.textContent = data.list[0].dt_txt;

    let deg = data.list[0].wind.deg;
    let windDirection;

    if (deg > 45 && deg <= 135) {
        windDirection = 'East';
    } else if (deg > 135 && deg <= 225) {
        windDirection = 'South';
    } else if (deg > 225 && deg <= 315) {
        windDirection = 'West';
    } else {
        windDirection = 'North';
    }

    wind1.textContent = windDirection + ', ' + data.list[0].wind.speed;

    //temperatures for 7 days

    temperature1.textContent =
        data.list[0].main.temp > 0 ? '+' + Math.round(data.list[0].main.temp) : Math.round(data.list[0].main.temp);

    temperature2.textContent =
        data.list[1].main.temp > 0 ? '+' + Math.round(data.list[1].main.temp) : Math.round(data.list[1].main.temp);

    temperature3.textContent =
        data.list[2].main.temp > 0 ? '+' + Math.round(data.list[2].main.temp) : Math.round(data.list[2].main.temp);

    temperature4.textContent =
        data.list[3].main.temp > 0 ? '+' + Math.round(data.list[3].main.temp) : Math.round(data.list[3].main.temp);

    temperature5.textContent =
        data.list[4].main.temp > 0 ? '+' + Math.round(data.list[4].main.temp) : Math.round(data.list[4].main.temp);

    temperature6.textContent =
        data.list[5].main.temp > 0 ? '+' + Math.round(data.list[5].main.temp) : Math.round(data.list[5].main.temp);

    temperature7.textContent =
        data.list[6].main.temp > 0 ? '+' + Math.round(data.list[6].main.temp) : Math.round(data.list[6].main.temp);

//icons for 7 days

    let iconUrl1 = getIconUrl(data.list[0].weather[0].icon);
    newicon1.setAttribute('src', iconUrl1);

    let iconUrl2 = getIconUrl(data.list[1].weather[0].icon);
    newicon2.setAttribute('src', iconUrl2);

    let iconUrl3 = getIconUrl(data.list[2].weather[0].icon);
    newicon3.setAttribute('src', iconUrl3);

    let iconUrl4 = getIconUrl(data.list[3].weather[0].icon);
    newicon4.setAttribute('src', iconUrl4);

    let iconUrl5 = getIconUrl(data.list[4].weather[0].icon);
    newicon5.setAttribute('src', iconUrl5);

    let iconUrl6 = getIconUrl(data.list[5].weather[0].icon);
    newicon6.setAttribute('src', iconUrl6);

    let iconUrl7 = getIconUrl(data.list[6].weather[0].icon);
    newicon7.setAttribute('src', iconUrl7);

};

let dayOfWeek = (offset) => {
    let today = new Date();
    let futureDate = new Date(today);
    futureDate.setDate(today.getDate() + offset);
    return futureDate.toLocaleDateString('en-EN', { weekday: 'long' });
};

let getIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/w/${iconCode}.png`;
};




