const API_KEY = "40c05b28bdc72f6d8159841f66b71074";
function onGeoOk(position){     // position : JS가 user의 postition을 전달하는 매개변수.
    console.log(position);  // onGeoOK가 받는 매개변수 object가 무엇인지 보여줌 [ GeolocationPosition ]
    const lat = position.coords.latitude;   // latitude 경도
    const lon = position.coords.longitude;   // longitude 위도
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        // 화씨에서 섭씨온도를 얻기 위해 url 뒤에 [ &units=metric ]을 추가
    fetch(url).then(Response => Response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `날씨 ${data.weather[0].main} / 온도 ${data.main.temp}`;
    });     // JS에서 url 호출. F12 네트워크
};
function onGeoError(){
    alert("Can't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);   // 유저의 위치 호출


