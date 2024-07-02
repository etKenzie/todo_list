import displayList from "./displayList";
import loadUI from "./loadUI";


const displaySidebar = (user) => {
    let modal = document.getElementById('modal-add-project');
    var span = document.getElementsByClassName("close")[0];

    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';

    const allTasks = document.createElement('div');
    allTasks.classList.add('all-tasks');


    const buttonDisplayTasks = document.createElement('button');
    buttonDisplayTasks.classList.add('sidebar-option');
    buttonDisplayTasks.textContent = 'All Tasks';
    buttonDisplayTasks.addEventListener('click', () => {
        displayList(user.getTasks(),user);
    })

    // allTasks.appendChild(addTask);
    allTasks.appendChild(buttonDisplayTasks);

    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('sidebar-projects');

    const projectsContainerTitle = document.createElement('div');
    projectsContainerTitle.textContent = 'Projects';
    projectsContainerTitle.classList.add('sidebar-title');
    projectsContainer.appendChild(projectsContainerTitle);

    const addProject = document.createElement('button');
    addProject.classList.add('button-add-project');
    addProject.textContent = '+';

    // MODAL SECTION

    addProject.addEventListener('click', () => {
        document.getElementById("modal-project-form").reset();
        modal.style.display = "block";

    })

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById("modal-project-form").onsubmit = function(event) {
        event.preventDefault(); // Prevent the default form submission

        var name = document.getElementById("name").value;
        var description = document.getElementById("description").value;

        // console.log("Name: " + name);
        // console.log("Description: " + description);

        // You can add your own logic here to handle the form data
        user.createNewList(name, description);



        // Close the modal
        modal.style.display = "none";

        loadUI(user);

    }




    projectsContainerTitle.appendChild(addProject)

    projectsContainer.appendChild(projectsContainerTitle);


    // projectsContainer.innerHTML = `
    //     <div class = "sidebar-title">Projects</div>
    //     <button class = "sidebar-option">Create New Project</button>
    //     `
    
    const projectList = document.createElement('div');
    projectList.classList.add('sidebar-projects-list');
    // console.log(user.getLists());

    user.getLists().forEach(list => {
        // console.log(list);
        const project = document.createElement('button');
        project.classList.add('sidebar-option');
        project.textContent = list.getName();
        project.addEventListener('click', () => {
            displayList(list, user);;
        })
        projectList.appendChild(project);
    })

    projectsContainer.appendChild(projectList);

    
    // sidebar.append(addTask);
    sidebar.appendChild(allTasks);
    sidebar.appendChild(projectsContainer);

}

export default displaySidebar;