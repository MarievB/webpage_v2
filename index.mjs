let weather = {
    "apiKey" : "c5403347d97fe5076be7ea16a2aa95c0",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        ).then((response) => response.json())           // data = the response from the fetch in json format
        .then((data) => this.displayWeather(data));     // we call a function with the data as input
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name; 
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description; 
        document.querySelector(".temp").innerText = temp + "°C"; 
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"; 
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h"; 
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

// document: refers to HTML doc
// querySelector: is the first element in the document that matches the specified set of CSS selectors
// addEventListener: awaits the "click" and then executes the function weather.search()
document.querySelector(".search button").addEventListener("click", function () {
        weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

// initial weather place
weather.fetchWeather("Brisbane");