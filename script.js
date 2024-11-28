function getWeather(city){
const APIKEY = "20522163809899d0c7ae5d2508ea7fdf";
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
            console.log(data)

            let cityName = document.getElementById('city');
            cityName.innerHTML=(data.name)

            let showtemperature = document.getElementById('temp');
            showtemperature.innerHTML=(data.main.temp +'°C');

            let feelsLike = document.getElementById('feels');
            feelsLike.innerHTML=(data.main.feels_like);

            let haze = document.getElementById('haze');
            haze.innerHTML=(data.weather[0].main)

            let showHumidity = document.getElementById('humidity');
            showHumidity.innerHTML=(data.main.humidity);

            let windSpeed = document.getElementById('speed');
            windSpeed.innerHTML=(data.wind.speed +'km/h')
        })
    .catch((err)=>{
        console.log(err)
    })
}


getWeather("Nagpur")


function readData(){
    let city = document.getElementById('inp').value;
    getWeather(city)    
}
