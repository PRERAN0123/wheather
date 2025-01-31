let apikey = "b841b880737ca4ed68538bf97e59d41e";
let api = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apikey + "&q=";
const img = document.querySelector("#loc");

async function checkWeather(city) {
    try {
        const response = await fetch(api + city);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        console.log(data);
        document.querySelector("#description").innerHTML=data.weather[0].description
        document.querySelector(".ctry").innerHTML="COUNTRY:"+data.sys.country
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".wind").innerHTML = data.wind.speed + " m/s";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

        
        const weatherCondition = data.weather[0].main;
        if (weatherCondition === "Clouds") {
            img.src = "clouds.png";
        } else if (weatherCondition === "Drizzle") {
            img.src = "drizzle.png";
        } else if (weatherCondition === "Clear") {
            img.src = "clear.png";
        } else if (weatherCondition === "Mist") {
            img.src = "mist.png";
        } else if (weatherCondition === "Rain") {
            img.src = "rain.png";
        } else if (weatherCondition === "Snow") {
            img.src = "snow.png";
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
}


const btn = document.querySelector("#sbtn");
btn.addEventListener("click", () => {
    const input = document.querySelector("#input");
    const city = input.value.trim();

    
    if (city) {
        checkWeather(city);
    } else {
        alert('Please enter a city!');
    }
});
