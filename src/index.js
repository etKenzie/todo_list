import './main.css';
import { createNewUser, recallUser } from './user.js';
import loadUI from './loadUI.js';
import { recallList } from './list.js';
import { recallItem } from './item.js';

let userJSON = localStorage.getItem('user');
let userData = JSON.parse(userJSON);


let user;

if (userData) {
    userData.tasks = recallList(userData.tasks);
    if (!userData.lists) {
        userData.lists = [];
    } else {
        let curList;
        for (let i = 0; i < userData.lists.length; i++) {
            userData.lists[i] = recallList(userData.lists[i]);
            curList = userData.lists[i].getList();

        }
    }
    
    user = recallUser("Main User", userData.tasks, userData.lists);
    

} else {
    user = createNewUser("Main User");
}
// user = createNewUser("Main User");

loadUI(user);

// displaySidebar(mainUser);