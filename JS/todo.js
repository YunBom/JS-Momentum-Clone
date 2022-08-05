const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input"); // === toDoForm.getElementById("todo-form input");
let toDos = [];     // 기존에 있던 리스트가 새로운 것에 덮어씌어지는 문제. let을 이용해 기존의 것에 추가만 할 것임.

const TODOS_KEY = "todos";

toDoForm.addEventListener("submit",toDoSubmit);

/* todolist 목록을 제출했을 때 이벤트 */
function toDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";   // 엔터를 누를 때마다 칸을 비우게 함. 입력값을 이미 newToDo에 복사해 저장해놨기 때문에 newToDo 값은 그대로이고, value 값은 비워짐.
    const newTodoObject = {
        text: newToDo,
        id:Date.now(),      // id가 있는 이유 : li의 각각의 item을 구별
    };
    toDos.push(newTodoObject);    // toDos array에 newToDo를 push.
    saveToDos();
    paintToDo(newTodoObject);
};


/* todolist를 로컬 스토리지에 저장 */
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};


/* 투두리스트 화면 생성 */
function paintToDo(newTodoObject){ /* func toDoSubmit > func paintToDo */
    const liEliment = document.createElement("li"); // html에 <li> 생성
    liEliment.id = newTodoObject.id;
    const spanEliment = document.createElement("span");     // html에 <span> 생성
    const deleteBtnEliment = document.createElement("button");
    deleteBtnEliment.innerText = "❌"
    deleteBtnEliment.addEventListener("click", deleteToDo);
    liEliment.appendChild(spanEliment);     // <li> 안에 <span>을 넣음
    liEliment.appendChild(deleteBtnEliment);    // <li> 안에 삭제버튼
    spanEliment.innerText = newTodoObject.text;     // <span>에 사용자가 입력하여 인자로 받은 값을 넣어줌.
    toDoList.appendChild(liEliment);       // <ul> 안에 <li>를 넣음.
}

/* todolist 삭제버튼 */
function deleteToDo(deleteEvent) {
    const li = deleteEvent.target.parentElement;  // console.dir()로 하나하나 찾아감. 이벤트가 발생한 btn의 타겟을 찾아, 그 부모를 찾고 그 부모인 <li>를 삭제.
    li.remove();  // 삭제
    // this.parentNode.remove();    -> 위 코드를 이 한줄로도 구현 가능
    console.log(li.id);
};


/* 투두리스트 지속보관 */
const keepToDos = localStorage.getItem(TODOS_KEY);
console.log(keepToDos);
if(keepToDos!==null){
    const parsedToDos = JSON.parse(keepToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);  // array에서 처리되고 있는 item 인자를 그냥 제공.
};





