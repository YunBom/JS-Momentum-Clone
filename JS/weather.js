function onGeoOk(position){     // position : JS가 user의 postition을 전달하는 매개변수.
    console.log(position);
    const lat = position.coords.latitude;   // latitude 경도
    const lng = position.coords.longitude;   // longitude 위도
    
    console.log("You live it", lat, lng);
};
function onGeoError(){
    alert("Can't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);   // 유저의 위치 호출


