const searchBtn = document.getElementById('search-btn');
const nameOfCity = document.getElementById('nameOfCity');
const cityNameE = document.getElementById('cityName');
const tempE = document.getElementById('temp');
const weatherTypeE = document.getElementById('weatherType');
import { API_KEY, BASE_URL} from './config.js';
 
 async function getweather(cityName){
  
    const response= await fetch(API_KEY.replace('${cityName}', cityName))
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