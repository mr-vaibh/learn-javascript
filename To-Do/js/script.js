const newTaskTitle = document.querySelector('#newTaskTitle');
const newTaskBody = document.querySelector('#newTaskBody');
const saveTask = document.querySelector('#saveTask');


saveTask.addEventListener('click', () => {
    let task = localStorage.getItem('tasks');

    if (task == null) {
		taskList = [];
	} else {
		taskList = JSON.parse(task);
    }
    
    let newTaskObj = {
        title: newTaskTitle.value,
        body: newTaskBody.value,
        date: new Date().toLocaleDateString('en-GB'),
		time: new Date().toLocaleTimeString(),
    };
    console.log(newTaskObj);
    taskList.push(newTaskObj);
    localStorage.setItem('tasks', taskList);

    updateTasksInUI();
});

function updateTasksInUI() {
    let task = localStorage.getItem('tasks');

    if (task == null) {
		taskList = [];
	} else {
		taskList = JSON.parse(task);
    }
    
    let html = '';

    taskList.forEach((task, index) => {
        html += `
                <div class="card border-secondary shadow mb-2 mx-2 noteCard" style="width: 21rem;">
					<div class="card-header h5">${task.title}</div>
					<div class="card-body text-dark">
						<p class="card-text">${task.body}</p>
					</div>
					<div class="card-footer text-muted">${task.date} at ${task.time} <i class="fa fa-trash float-right" style="font-size: 24px;cursor: pointer;"></i> </div>
				</div>
        `;
    });

    let taskRow = document.getElementById('taskRow');
    if (taskList.length != 0) {
		taskRow.innerHTML = html;
	} else {
		taskRow.innerHTML = `<p>No notes found, notes will be displayed here once added</p>`;
	}
}