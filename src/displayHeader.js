import loadUI from "./loadUI";


const displayHeader = (user) => {
    const header = document.getElementsByTagName("header")[0]
    header.innerHTML = "";
    const addTask = document.createElement('button');
    addTask.className = 'button-add-item';
    addTask.textContent = '+';



    // MODAL SECTION
    
    const modal = document.getElementById('modal-add-task');
    var span = document.getElementsByClassName("close2")[0];

    var projectSelect = document.getElementById("projects-task")
    var option = document.createElement('option');
    projectSelect.innerHTML = '';
    option.value = '';
    option.text = 'Select a project';
    projectSelect.appendChild(option);
    
    
    user.getLists().forEach(list => {
        var option = document.createElement('option');
        option.value = list.id;
        option.text = list.name;
        projectSelect.appendChild(option);
    });


    addTask.addEventListener('click', () => {
        var form = document.getElementById("modal-task-form");
                if (form) {
                    form.reset();
                }
                // Show the modal
                modal.style.display = "block";
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }



    header.appendChild(addTask);

    document.getElementById("modal-task-form").onsubmit = function(event) {
        event.preventDefault(); // Prevent the default form submission

        var name = document.getElementById("name-task").value;
        var description = document.getElementById("description-task").value;
        var date = document.getElementById("date-task").value;
        var selectedItem = document.getElementById("projects-task").value;
        var priority = document.getElementById("priority-task").value;

        // You can add your own logic here to handle the form data

        user.createTask(name, description, date, selectedItem, priority)

        // Close the modal
        modal.style.display = "none";

        loadUI(user);
    }
    
    

    // const toggleSidebar = document.createElement('button');

    const headerTitle = document.createElement('div');
    headerTitle.classList.add('header-title');
    headerTitle.innerHTML = "Todo<b>List</b>";
    header.appendChild(headerTitle);


    

}

export default displayHeader;