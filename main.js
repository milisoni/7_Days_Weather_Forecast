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
let humidity2 = document.querySelector('.weather_indicator-humidity2 > .value');
let humidity3 = document.querySelector('.weather_indicator-humidity3 > .value');
let humidity4 = document.querySelector('.weather_indicator-humidity4 > .value');
let humidity5 = document.querySelector('.weather_indicator-humidity5 > .value');
let humidity6 = document.querySelector('.weather_indicator-humidity6 > .value');
let humidity7 = document.querySelector('.weather_indicator-humidity7 > .value');
let wind1 = document.querySelector('.weather_indicator-wind > .value');
let wind2 = document.querySelector('.weather_indicator-wind2 > .value');
let wind3 = document.querySelector('.weather_indicator-wind3 > .value');
let wind4 = document.querySelector('.weather_indicator-wind4 > .value');
let wind5 = document.querySelector('.weather_indicator-wind5 > .value');
let wind6 = document.querySelector('.weather_indicator-wind6 > .value');
let wind7 = document.querySelector('.weather_indicator-wind7 > .value');
let pressure1 = document.querySelector('.weather_indicator-pressure > .value');
let pressure2 = document.querySelector('.weather_indicator-pressure2 > .value');
let pressure3 = document.querySelector('.weather_indicator-pressure3 > .value');
let pressure4 = document.querySelector('.weather_indicator-pressure4 > .value');
let pressure5 = document.querySelector('.weather_indicator-pressure5 > .value');
let pressure6 = document.querySelector('.weather_indicator-pressure6 > .value');
let pressure7 = document.querySelector('.weather_indicator-pressure7 > .value');
let time = document.querySelector('.weather_time');
let time2 = document.querySelector('.time2');
let time3 = document.querySelector('.time3');
let time4 = document.querySelector('.time4');
let time5 = document.querySelector('.time5');
let time6 = document.querySelector('.time6');
let time7 = document.querySelector('.time7');
let temperature1 = document.querySelector('.weather_temperature > .value');
let temperature2 = document.querySelector('.temperature_day2 > .value');
let temperature3 = document.querySelector('.temperature_day3 > .value');
let temperature4 = document.querySelector('.temperature_day4 > .value');
let temperature5 = document.querySelector('.temperature_day5 > .value');
let temperature6 = document.querySelector('.temperature_day6 > .value');
let temperature7 = document.querySelector('.temperature_day7 > .value');
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

    //humidity for 7 days
    humidity1.textContent = data.list[0].main.humidity;
    humidity2.textContent = data.list[1].main.humidity;
    humidity3.textContent = data.list[2].main.humidity;
    humidity4.textContent = data.list[3].main.humidity;
    humidity5.textContent = data.list[4].main.humidity;
    humidity6.textContent = data.list[5].main.humidity;
    humidity7.textContent = data.list[6].main.humidity;

    //pressure for 7 days
    pressure1.textContent = data.list[0].main.pressure;
    pressure2.textContent = data.list[1].main.pressure;
    pressure3.textContent = data.list[2].main.pressure;
    pressure4.textContent = data.list[3].main.pressure;
    pressure5.textContent = data.list[4].main.pressure;
    pressure6.textContent = data.list[5].main.pressure;
    pressure7.textContent = data.list[6].main.pressure;

    //date and time
    time.textContent = data.list[0].dt_txt;
    time2.textContent = data.list[1].dt_txt;
    time3.textContent = data.list[2].dt_txt;
    time4.textContent = data.list[3].dt_txt;
    time5.textContent = data.list[4].dt_txt;
    time6.textContent = data.list[5].dt_txt;
    time7.textContent = data.list[6].dt_txt;

    let deg1 = data.list[0].wind.deg;
    let windDirection1;

    if (deg1 > 45 && deg1 <= 135) {
        windDirection1 = 'East';
    } else if (deg1 > 135 && deg1 <= 225) {
        windDirection1 = 'South';
    } else if (deg1 > 225 && deg1 <= 315) {
        windDirection1 = 'West';
    } else {
        windDirection1 = 'North';
    }

    let deg2 = data.list[1].wind.deg;
    let windDirection2;

    if (deg2 > 45 && deg2 <= 135) {
        windDirection2 = 'East';
    } else if (deg2 > 135 && deg2 <= 225) {
        windDirection2 = 'South';
    } else if (deg2 > 225 && deg2 <= 315) {
        windDirection2 = 'West';
    } else {
        windDirection2 = 'North';
    }

    let deg3 = data.list[2].wind.deg;
    let windDirection3;

    if (deg3 > 45 && deg3 <= 135) {
        windDirection3 = 'East';
    } else if (deg3 > 135 && deg3 <= 225) {
        windDirection3 = 'South';
    } else if (deg3 > 225 && deg3 <= 315) {
        windDirection3 = 'West';
    } else {
        windDirection3 = 'North';
    }

    let deg4 = data.list[3].wind.deg;
    let windDirection4;

    if (deg4 > 45 && deg4 <= 135) {
        windDirection4 = 'East';
    } else if (deg4 > 135 && deg4 <= 225) {
        windDirection4 = 'South';
    } else if (deg4 > 225 && deg4 <= 315) {
        windDirection4 = 'West';
    } else {
        windDirection4 = 'North';
    }

    let deg5 = data.list[4].wind.deg;
    let windDirection5;

    if (deg5 > 45 && deg5 <= 135) {
        windDirection5 = 'East';
    } else if (deg5 > 135 && deg5 <= 225) {
        windDirection5 = 'South';
    } else if (deg5 > 225 && deg5 <= 315) {
        windDirection5 = 'West';
    } else {
        windDirection5 = 'North';
    }

    let deg6 = data.list[5].wind.deg;
    let windDirection6;

    if (deg6 > 45 && deg6 <= 135) {
        windDirection6 = 'East';
    } else if (deg6 > 135 && deg6 <= 225) {
        windDirection6 = 'South';
    } else if (deg6 > 225 && deg6 <= 315) {
        windDirection6 = 'West';
    } else {
        windDirection6 = 'North';
    }

    let deg7 = data.list[6].wind.deg;
    let windDirection7;

    if (deg7 > 45 && deg7 <= 135) {
        windDirection7 = 'East';
    } else if (deg7 > 135 && deg7 <= 225) {
        windDirection7 = 'South';
    } else if (deg7 > 225 && deg7 <= 315) {
        windDirection7 = 'West';
    } else {
        windDirection7 = 'North';
    }

    //wind for 7 days
    wind1.textContent = windDirection1 + ', ' + data.list[0].wind.speed;
    wind2.textContent = windDirection2 + ', ' + data.list[1].wind.speed;
    wind3.textContent = windDirection3 + ', ' + data.list[2].wind.speed;
    wind4.textContent = windDirection4 + ', ' + data.list[3].wind.speed;
    wind5.textContent = windDirection5 + ', ' + data.list[4].wind.speed;
    wind6.textContent = windDirection6 + ', ' + data.list[5].wind.speed;
    wind7.textContent = windDirection7 + ', ' + data.list[6].wind.speed;
    

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




