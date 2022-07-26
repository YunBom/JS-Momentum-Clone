const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  /* string만 저장할 때. 위 변수들 처럼 중요한 정보를 담은게 아닐 때 대문자 사용. 관습같은 거. */
const USERNAME_KEY = "username"

function LoginSubmit(event) {
    event.preventDefault();     /* form이 submit 될 때 새로고침 되는 기본동작을 막음 */
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);  /* 유저가 이름을 제출하면 form이 보이지 않게 숨김 */
    localStorage.setItem(USERNAME_KEY, userName);    /* 앞의 "username"은(현재 USERNAME_KEY 라는 변수로 저장) 저장될 아이템의 이름(key), 뒤의 userName은 여기서 지정한 변수(value) */
    paintGreetings(userName);
};

function paintGreetings(userName) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${userName}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {   // 유저네임이 로컬에 없을 경우 폼을 보여줌.
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", LoginSubmit);
} 
else {
    paintGreetings(savedUsername);
}










