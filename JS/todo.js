const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input"); // === toDoForm.getElementById("todo-form input");
const toDos = [];

const TODOS_KEY = "todos";

toDoForm.addEventListener("submit",toDoSubmit);

/* todolist 목록을 제출했을 때 이벤트 */
function toDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";   // 엔터를 누를 때마다 칸을 비우게 함. 입력값을 이미 newToDo에 복사해 저장해놨기 때문에 newToDo 값은 그대로이고, value 값은 비워짐.
    toDos.push(newToDo);    // toDos array에 newToDo를 push.
    saveToDos();
    paintToDo(newToDo);
};


/* todolist를 로컬 스토리지에 저장 */
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};


/* 투두리스트 화면 생성 */
function paintToDo(argNewToDo){
    const liEliment = document.createElement("li"); // html에 <li> 생성
    const spanEliment = document.createElement("span");     // html에 <span> 생성
    const deleteBtnEliment = document.createElement("button");
    deleteBtnEliment.innerText = "❌"
    deleteBtnEliment.addEventListener("click", deleteToDo);
    liEliment.appendChild(spanEliment);     // <li> 안에 <span>을 넣음
    liEliment.appendChild(deleteBtnEliment);    // <li> 안에 삭제버튼
    spanEliment.innerText = argNewToDo;     // <span>에 사용자가 입력하여 인자로 받은 값을 넣어줌.
    toDoList.appendChild(liEliment);       // <ul> 안에 <li>를 넣음.
}

/* todolist 삭제버튼 */
function deleteToDo(deleteEvent) {
    const toDoText = deleteEvent.target.parentElement;  // console.dir()로 하나하나 찾아감. 이벤트가 발생한 btn의 타겟을 찾아, 그 부모를 찾고 그 부모인 <li>를 삭제.
    toDoText.remove();  // 삭제
    // this.parentNode.remove();    -> 위 코드를 이 한줄로도 구현 가능
};


/* 투두리스트 지속보관 */
const keepToDos = localStorage.getItem(TODOS_KEY);
console.log(keepToDos);
if(keepToDos!==null){
    const parsedToDos = JSON.parse(keepToDos);
    parsedToDos.forEach((item) => console.log("this is turn of", item));  // array에서 처리되고 있는 item 인자를 그냥 제공.

}

function sayHello(item){    // JS에서 eventListner의 인자를 그냥 제공해주는 것처럼, 지금 처리되고 있는 item 또한 그냥 제공해줌.
    console.log("this is turn of " + item, "i know it");
}



