const tasks = [
    {
        id: 1,
        title: 'Do groceries',
        content: 'Healthy food only',
        finished: false
    },
    {
        id: 2,
        title: 'Read a book',
        content: 'Finish reading The Book Thief book',
        finished: true
    },
    {
        id: 3,
        title: 'Create tests for course',
        content: 'Create tests for Programming course (make sure to upload it to mega)',
        finished: false
    },
];



const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');
const title = document.getElementById('title');
const titleError = document.getElementById('titleError');
const content = document.getElementById('content');

const closeBtn = document.getElementById('closeBtn');
const saveBtn = document.getElementById('saveBtn');
const addTaskBtn = document.getElementById('addTaskBtn');
const addModal = document.getElementById('addModal');

addTaskBtn.addEventListener('click', () => {
    showModal();
});

saveBtn.addEventListener('click', () =>{
    if(!title.value){
        titleError.classList.remove('hide');
        showModal();
    } else{
        titleError.classList.add('hide');
        addTask();
        closeModal();
        todoList.innerHTML = '';
        doneList.innerHTML = '';
        loadTasks();
    }
    
});

closeBtn.addEventListener('click', () =>{
    closeModal();
});


function loadTasks(){
    tasks.forEach(task => {
        let card = document.createElement('div');
        let cbody = document.createElement('div');
        let ctitle = document.createElement('h5');
        let cpar = document.createElement('p');
        card.classList.add('card');
        cbody.classList.add('card-body');
        ctitle.classList.add('card-title');
        cpar.classList.add('card-text');

        ctitle.innerText = task.title;
        cpar.innerText = task.content;

        card.appendChild(cbody);
        cbody.appendChild(ctitle);
        cbody.appendChild(cpar);

        if(task.finished){
            let button = document.createElement('a');
            button.classList.add('btn', 'btn-success');
            button.innerText = 'DELETE';

            cbody.appendChild(button);
            doneList.appendChild(card);

            button.addEventListener('click', () => {
                deleteTask(task);
            });

        }else{
            let button = document.createElement('a');
            button.classList.add('btn', 'btn-success');
            button.innerText = 'FINISH';
            cbody.appendChild(button);
            todoList.appendChild(card);

            button.addEventListener('click', () => {
                finishTask(task);
            });
        }
    });
}

function deleteTask(task){

    tasks.splice(tasks.indexOf(task), 1);
    todoList.innerHTML = '';
    doneList.innerHTML = '';
    loadTasks();
}

function finishTask(task){
    task.finished = true;
    todoList.innerHTML = '';
    doneList.innerHTML = '';
    loadTasks();
}

function showModal(){
    addModal.classList.add('show');
    addModal.style.display = 'block';
}

function closeModal(){
    addModal.classList.remove('show');
    addModal.style.display = 'none';
}

function addTask(){
    let newTask = {
        id : Math.floor(Math.random()*1000),
        title : title.value,
        content : content.value,
        finished : false
    }
    tasks.push(newTask);
}


loadTasks();