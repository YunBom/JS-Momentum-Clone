const API_KEY = "40c05b28bdc72f6d81";
function onGeoOk(position){     // position : JS가 user의 postition을 전달하는 매개변수.
    console.log(position);
    const lat = position.coords.latitude;   // latitude 경도
    const lng = position.coords.longitude;   // longitude 위도
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url).then(Response => Response.json()).then(data => {
        console.log(data.name, data.weather[0].main);
    });     // JS에서 url 호출. 
};
function onGeoError(){
    alert("Can't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);   // 유저의 위치 호출


