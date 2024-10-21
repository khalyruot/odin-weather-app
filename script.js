const weatherCity = document.getElementById("input_box");
const weatherAPIkey = 'KGG5PXYW4YLPP77N39WZ6EEL9';
const displayWeatherPart_F = document.getElementById("display_weather_F");
const displayWeatherPart_C = document.getElementById("display_weather_C")
const display_slace_sign = document.getElementById('slace_sign');
const dispaly_adress = document.getElementById("current_adress");

async function getWeather(location){
    location = weatherCity.value;
    const weatherAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${weatherAPIkey}`;
    console.log(weatherAPI);
    try{
        
        const response = await fetch(weatherAPI,{mode:"cors"});
        const data = await response.json();

        const currentAdress = data.resolvedAddress;
        dispaly_adress.innerText = currentAdress;

        const tempF = data.currentConditions.temp;
        displayWeatherPart_F.innerText = tempF + " F"

        const tempC = (tempF-32) * (5/9)
        displayWeatherPart_C.innerText = tempC.toFixed(1) + " C";

        display_slace_sign.innerText = "|";

        return displayWeatherPart_F, display_slace_sign,displayWeatherPart_C;
        
    }catch(error){
        throw newError("Location not found")
    }
    
}


