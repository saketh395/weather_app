var button=document.querySelector('.button');
var inputvalue=document.querySelector('.city');
var temp=document.querySelector('.temp');
var min_temp=document.querySelector('.min_temp');
var max_temp=document.querySelector('.max_temp');
var pressure=document.querySelector('.pressure');
var humidity=document.querySelector('.humidity');
var wind_speed=document.querySelector('.wind_speed');
var sunrise=document.querySelector('.sunrise');
var sunset=document.querySelector('.sunset');
var long=document.querySelector('.long');
var lat=document.querySelector('.lat');
var icon=document.querySelector('.icon');
var main=document.querySelector('.main');
var namev=document.querySelector('.name');
var feels_like=document.querySelector('.feels_like');
button.addEventListener('click',function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&APPID=36e5c0a69d3aeadcf9d1e1d5dfcbaadb&units=metric')
  .then(response=> response.json())
  .then(data=>{
    var tempvalue=data['main']['temp'];
    var min_tempvalue=data['main']['temp_min'];
    var max_tempvalue=data['main']['temp_max'];
    var pressurevalue=data['main']['pressure'];
    var humidityvalue=data['main']['humidity'];
    var wind_speedvalue=data['wind']['speed'];
    var sunrisevalue=data['sys']['sunrise'];
    sunrisevalue=new Date(sunrisevalue*1000);
    sunrisevalue=sunrisevalue.toLocaleTimeString();
    var sunsetvalue=data['sys']['sunset'];
    sunsetvalue=new Date(sunsetvalue*1000);
    sunsetvalue=sunsetvalue.toLocaleTimeString();
    var longvalue=data['coord']['lon'];
    var latvalue=data['coord']['lat'];
    var iconvalue=data['weather'][0]['icon'];
    var mainvalue=data['weather'][0]['description'];
    var namevalue=data['name'];
    var feels_likevalue=data['main']['feels_like'];
    
    feels_like.innerHTML="<h2>Feels_Like(celcius)</h2><b>"+feels_likevalue+'</b>';
    namev.innerHTML="<h2>Location</h2><b>"+namevalue+'</b>';
    main.innerHTML='<img src=\'http://openweathermap.org/img/wn/'+iconvalue+'@2x.png\'><h3>'+mainvalue+'</h3>';
    temp.innerHTML="<h2>Temperature(celcius)</h2><b>"+tempvalue+'</b>';
    min_temp.innerHTML="<h2>Min Temperature(celcius)</h2><b>"+min_tempvalue+'</b>';
    max_temp.innerHTML="<h2>Max Temperature(celcius)</h2><b>"+max_tempvalue+'</b>';
    pressure.innerHTML="<h2>Pressure(hPa)</h2><b>"+pressurevalue+'</b>';
    humidity.innerHTML="<h2>Humidity(%)</h2><b>"+humidityvalue+'</b>';
    wind_speed.innerHTML="<h2>Wind Speed(m/s)</h2><b>"+wind_speedvalue+'</b>';
    long.innerHTML="<h2>Longitude</h2><b>"+longvalue+'</b>';
    lat.innerHTML="<h2>Latitude</h2><b>"+latvalue+'</b>';
  })
  .catch(err => alert("wrong city entered"))
})



