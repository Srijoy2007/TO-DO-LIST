//selectror
const todoInput = document.querySelector('.to-do');
const todobutton = document.querySelector('.button');
const todoList = document.querySelector('.todo-list');
const filteroption = document.querySelector('.filter-todos')

//Event listener
todobutton.addEventListener('click',addtodo);
todoList.addEventListener('click',deleteCheck)
filteroption.addEventListener('click',filtertodo)


//function
function addtodo(event){
    event.preventDefault();
    //todo div
    console.log(todoInput.value)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //completed
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //trash
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
     //append
     todoList.appendChild(todoDiv)
     todoInput.value="";

}
function deleteCheck(e){
    const item =  e.target;

    //delete 
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation
         
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        //todo.remove();
    }

    //check
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        console.log(todo)
        
    
    }
} 
