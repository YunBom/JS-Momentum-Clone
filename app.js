const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  /* string만 저장할 때. 위 변수들 처럼 중요한 정보를 담은게 아닐 때 대문자 사용. 관습같은 거. */


function LoginSubmit(event) {
    event.preventDefault();     /* form이 submit 될 때 새로고침 되는 기본동작을 막음 */
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);  /* 유저가 이름을 제출하면 form이 보이지 않게 숨김 */
    console.log(userName);  /* 유저 이름을 한번 더 확인 */
    greeting.innerText = `Hello ${userName}`;   /* html H1에 유저이름이 뜨게 함 */
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

loginForm.addEventListener("submit", LoginSubmit);









