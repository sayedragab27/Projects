"use strict";

const apiKey="188ac6ea6878428eb21223044252806";
const baseUrl="http://api.weatherapi.com/v1/";
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date=new Date();

const searchInput=document.getElementById("search-input");
const searchBtn=document.getElementById("search-btn");
async function getCurrentWeather(q) {
    try {
        const response = await fetch(`${baseUrl}current.json?key=${apiKey}&q=${q?q:"cairo"}&aqi=no`);
        const data = await response.json();
        console.log(data);
        if(!response.ok)
        {
            throw new Error(`${data.error.message} While getting current weather`);
        }
        return data;
    } catch (error) {
        console.log(error);
    }
    
}
async function getForecastWeather(q) {
   try {
    const response = await fetch(`${baseUrl}forecast.json?key=${apiKey}&q=${q?q:"cairo"}&days=7&aqi=no&alerts=no`);
    const data = await response.json();
    if(!response.ok)
    {
        throw new Error(`${data.error.message} While getting forecast weather`);
    }
  const {location,current,forecast}=data;
  const currentWeather={current,location};
  const forecastWeather=data.forecast.forecastday;
  displayWeather(currentWeather,forecastWeather);
   } catch (error) {
    console.log(error);
   }
}
searchBtn.addEventListener("click",function(e){
    e.preventDefault();
    getForecastWeather(searchInput.value);
})
searchInput.addEventListener("input",function(e){
        getForecastWeather(searchInput.value);

})
getForecastWeather();
function displayWeather(currentWeather,forecastWeather) {
try{
let Box=``;
const whiteBox=`
    <div class="col-lg-4 m-0 p-0">
                    <div class="card border-0 border ">
                        <div class="card-title d-flex justify-content-between mb-0 px-2 py-2">
                            <span>${days[date.getDay()]}</span>
                            <span>${date.getDate()} ${months[date.getMonth()]}</span>
                        </div>
                        <div class="card-body py-4 px-3 ">
                            <span class=" mb-2">${currentWeather.location.name}</span>
                            <h2 class="display-1 fw-bold text-white">${currentWeather.current.temp_c}<span>°C</span></h2>
                            <img src="${currentWeather.current.condition.icon}" class="img-fluid mb-2" alt="Current Weather Icon">
                            <p>${currentWeather.current.condition.text}</p>
                            <ul class=" d-flex gap-4 list-unstyled">
                                <li>
                                    <img src="./images/icon-umberella.png" alt="">
                                    <span>20%</span>
                                </li>
                                <li>
                                    <img src="./images/icon-wind.png" alt="">
                                    <span>18km/h</span>
                                </li>
                                <li>
                                    <img src="./images/icon-compass.png" alt="">
                                    <span>East</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
`;
let blackBox=``
for(let i=1;i<3;i++){
const dayIndex = (date.getDay() + i) % 7; 
 blackBox+=`
         <div class="col-lg-4 m-0 p-0">
                    <div class="card  border-0 text-center border h-100 w-100 " id="${i % 2 !== 0 ? "middle-card" : ''}">
                        <div class="card-title  mb-0 px-2 py-2">
                            <span>${days[dayIndex]}</span>
                        </div>
                        <div class="card-body py-4 px-3 " id="${i % 2 !== 0 ? "middle-card" : ''}">
                            <img src="${forecastWeather[i]["day"].condition.icon}" class="img-fluid mb-2" alt="Current Weather Icon">
                            <!-- <span class=" mb-2">London</span> -->
                            <h2 class="display-6 text-white">${forecastWeather[i]["day"].maxtemp_c}°C</h2>
                            <p>${forecastWeather[i]["day"].condition.text}</p>

                        </div>
                    </div>
                </div>

`;
// console.log(days["date.getDay())"+i]);
}
Box=whiteBox+blackBox;
document.getElementById('WeatherCards').innerHTML=Box;
} catch (error) {
    console.log("Error while displaying weather:"+error.message);
}
}