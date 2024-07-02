import './main.css';
import { createTodoItem, TodoItem } from './item.js';
// import { createTodoList, TodoList } from './list.js';
import displayList from './displayList.js';
import { createNewUser } from './user.js';
import displaySidebar from './displaySidebar.js';
import loadUI from './loadUI.js';

const mainUser = createNewUser("Main")



const test = createTodoItem("Title", "description", "2024-08-10", "low");
const test2 = createTodoItem("Title2", "description2", "2024-10-10", "medium");
const test3 = createTodoItem("Title3", "descripti222", "2024-10-11", "high");

// mainUser.appendTask(test);
// mainUser.appendTask(test2);






// mainUser.removeTask(test);


mainUser.createNewList("Test List", "RAJOIDJFOIDNF");
mainUser.createNewList("Second ", "RAJOIDJFOIDNF")

// mainUser.appendTask(test3, mainUser.getLists()[1])

// console.log(mainUser);

loadUI(mainUser);

// displaySidebar(mainUser);