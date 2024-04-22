const apiKey = "2b65c442f95ea58aec44f0aad2c88fa1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".icons");


async function checkWeather(city){
    const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }else{
        
    var data = await response.json();



    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


   if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png"
   }
   else if(data.weather[0].main =="Clear"){
    weatherIcon.src = "https://github.com/MahvishFatimaa/Weather-App/blob/main/clear.png?raw=true"
   }
   else if(data.weather[0].main =="Rain"){
    weatherIcon.src = "images/rain.png"
   }
   else if(data.weather[0].main =="Drizzle"){
    weatherIcon.src = "images/drizzle.png"
   }
   else if(data.weather[0].main =="Mist"){
    weatherIcon.src = "images/mist.png"
   }

   document.querySelector(".weather").style.display = "block";
   document.querySelector(".error").style.display = "none";

    }
   
  




   


}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

