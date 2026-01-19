const searchBtn = document.getElementById('search-btn');
const nameOfCity = document.getElementById('nameOfCity');
const cityNameE = document.getElementById('cityName');
const tempE = document.getElementById('temp');
const weatherTypeE = document.getElementById('weatherType');
 
 async function getweather(cityName){
  
    const response= await fetch(`http://api.weatherapi.com/v1/current.json?key=4405ec6ffd3e42dea33154951261901&q=${cityName}&aqi=yes`)
    const data= await response.json();
    console.log(data);
      cityNameE.innerText= `${data.location.name}`;
        tempE.innerText=  `${data.current.temp_c}`+ '°C';
        weatherTypeE.innerText= `${data.current.condition.text}`;
 }
searchBtn.addEventListener('click',()=>{
        const cityName = nameOfCity.value;
        getweather(cityName);
      
    });