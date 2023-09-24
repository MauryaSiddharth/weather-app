 const API_KEY = "75935365a26ecc1fe0fafbfb72024a49";
 const API_URL = "https://api.openweathermap.org/data/2.5/weather?&q=";
 
 const SearchBox = document.querySelector(".search input");
 const SearchBtn = document.querySelector(".search button");
 const weatherIcon = document.querySelector(".weathericon");
 
 async function checkWeather(city) {
   const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
   if(response.status == 404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
   }
   else{
    const weatherData = await response.json();
 
  
 
    document.querySelector(".city").innerHTML = weatherData.name;
    document.querySelector(".temp").innerHTML =
      Math.round(weatherData.main.temp - 273.15) + "°C";
    document.querySelector(".humidity").innerHTML = weatherData.main.humidity + "%";
    document.querySelector(".wind").innerHTML = weatherData.wind.speed + "Km/h";
  
    if (weatherData.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (weatherData.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (weatherData.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (weatherData.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (weatherData.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
  }
   }
   
 
 SearchBtn.addEventListener("click", () => {
   checkWeather(SearchBox.value);
 });
 