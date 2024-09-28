const tareas = [
    { id: 1, nombre: 'Tarea 1', comentarios: [] },
    { id: 2, nombre: 'Tarea 2', comentarios: [] }
];

let currentTask = null;

const loginForm = document.getElementById('login-form');
const tasksContainer = document.getElementById('tasks-container');
const commentsContainer = document.getElementById('comments-container');
const tasksList = document.getElementById('tasks-list');
const commentsList = document.getElementById('comments-list');
const newComment = document.getElementById('new-comment');
const addCommentBtn = document.getElementById('add-comment-btn');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        loadTasks();
        document.getElementById('login-container').classList.add('hidden');
        tasksContainer.classList.remove('hidden');
    } else {
        alert('Token incorrecto');
    }
});

function loadTasks() {
    tasksList.innerHTML = '';
    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.textContent = tarea.nombre;
        li.addEventListener('click', () => loadComments(tarea));
        tasksList.appendChild(li);
    });
}

function loadComments(tarea) {
    currentTask = tarea;
    commentsList.innerHTML = '';
    tarea.comentarios.forEach(comment => {
        const li = document.createElement('li');
        li.textContent = comment;
        commentsList.appendChild(li);
    });
    tasksContainer.classList.add('hidden');
    commentsContainer.classList.remove('hidden');
}

addCommentBtn.addEventListener('click', () => {
    const comment = newComment.value.trim();
    if (comment !== '' && currentTask) {
        currentTask.comentarios.push(comment);
        loadComments(currentTask);
        newComment.value = '';
    }
});
