import {parse, format, isValid} from "date-fns";
import loadUI from "./loadUI";


const displayList = (list, user) => {
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '';

    const listInformation = document.createElement('div');
    listInformation.className = 'list-information';

    const listName = document.createElement('div');
    listName.className = 'list-name';
    listName.textContent = list.name;

    const deleteList = document.createElement('button');
    deleteList.className = 'list-delete-button';
    deleteList.innerHTML = "<i class='fa-solid fa-delete-left fa-2x'></i>";

    deleteList.addEventListener('click', () => {
        user.removeList(list);
        loadUI(user);
    });

    const listDescription = document.createElement('div');
    listDescription.className = 'list-description';
    listDescription.textContent = list.description;

    if(list.id !== user.tasks.id) {
        listName.appendChild(deleteList);
    } 

    listInformation.appendChild(listName);
    listInformation.appendChild(listDescription);


    const modal = document.getElementById('modal-edit-task');



    const listContent = document.createElement('div');
    listContent.className = 'list-content';
    list.list.forEach((item, index) => {
        const itemContainer = document.createElement('div');
        itemContainer.className = 'item-container';

        const itemName = document.createElement('div');
        itemName.className = 'item-name';
        itemName.innerHTML = item.title;

        const itemDue = document.createElement('div');
        itemDue.className = 'item-due';
        itemDue.innerHTML = item.dueDate;
        
        const itemPriority = document.createElement('div');
        itemPriority.className = 'item-priority';
        itemPriority.innerHTML = item.priority;

        const editButton = document.createElement('button');
        editButton.className = 'task-delete-button';
        editButton.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';

        editButton.addEventListener('click', () => {
            openModal(index);
        });

        const deleteButton = document.createElement('button');
        deleteButton.className = 'task-delete-button';
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

        deleteButton.addEventListener('click', () => {
            list.removeTask(item);
            displayList(list, user);
        });

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDue);
        itemContainer.appendChild(itemPriority);
        itemContainer.appendChild(editButton);
        itemContainer.appendChild(deleteButton);




        // itemContainer.addEventListener('click', () => {
        //     openModal(index);
        // });

        listContent.appendChild(itemContainer);
    });

    let currentIndex = null;

    function openModal(index) {
        currentIndex = index;

        const task = list.list[index];
        console.log(list);

        document.getElementById("name-task2").value = task.title;
        document.getElementById("description-task2").value = task.description;
        
        let dueDate = task.dueDate;
        dueDate = format(dueDate, "yyyy-MM-dd");
        document.getElementById("date-task2").value = dueDate;

        document.getElementById("priority-task2").value = task.priority;
            modal.style.display = "block";

    }

    var span = document.getElementsByClassName("close3")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    contentContainer.appendChild(listInformation);
    contentContainer.appendChild(listContent);

    const form = document.getElementById("task-edit-form");

    form.onsubmit = function(event) {
        event.preventDefault(); // Prevent the default form submission

        list.list[currentIndex].title = document.getElementById("name-task2").value;
        list.list[currentIndex].description = document.getElementById("description-task2").value;
        
        // list.list[currentIndex].title = document.getElementById("projects-task").value;
        list.list[currentIndex].priority = document.getElementById("priority-task2").value;
        
        let date = document.getElementById("date-task2").value;
        const dateObject = parse(date, "yyyy-MM-dd", new Date());
        if (isValid(dateObject)) {
            date = format(dateObject, 'MM/dd/yyyy');
        }
        list.list[currentIndex].dueDate = date;


        // Close the modal
        modal.style.display = "none";

        loadUI(user);
    }



}

export default displayList;