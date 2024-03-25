const apiKey="ad82f8e6af326a5fe4e5ce869fa5481f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox=document.querySelector(".searchBox input");
const searchBtn=document.querySelector(".searchBox button");
const watherImage=document.querySelector(".weather-image");

async function checkWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ad82f8e6af326a5fe4e5ce869fa5481f&units=metrics`);
    if(response.status==404 || city==""){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    } else {
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp-273)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind-speed").innerHTML=data.wind.speed+"kmph";
        
        const weather1=data.weather[0].main;

        watherImage.src="images/"+weather1.toLowerCase()+".png";

        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    console.log(searchBox.value);
})

document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
        console.log(searchBox.value);
    }
});
