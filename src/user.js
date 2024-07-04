import {v4 as uuidv4} from 'uuid';
import { createTodoList } from './list';
import { createTodoItem } from './item';

class User {
    constructor(name, tasks, lists) {
        this.id = uuidv4();
        this.name = name;
        // console.log(lists);

        if (tasks == null && lists == null) {
            // console.log('HERERERE')
            this.tasks = createTodoList("All Tasks", "");
            this.lists = [];
        } else {
            this.tasks = tasks;
            this.lists = lists;
        }
        
    }

    getTasks() {
        return this.tasks;
    }

    getLists() {
        return this.lists;
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }
    
    setLists(lists) {
        this.lists = lists;
    }

    createNewList(name, description) {
        const newList = createTodoList(name, description);
        this.lists.push(newList);
    }


    createTask(name, description,date,list_id,priority) {
        const newTask = createTodoItem(name, description, date, priority)
        this.tasks.addTask(newTask);
        const index = this.lists.findIndex(list => list.id === list_id);
        if (index!== -1) {
            this.lists[index].addTask(newTask);
        }
    }

    removeTask(task, item) {
        this.tasks.removeTask(task);

        const index = this.lists.findIndex(list => list.id === item.id);
        if (index !== -1) {
            this.lists[index].removeTask(task);
        }
    }

    removeList(item) {
        const index = this.lists.findIndex(list => list.id === item.id);
        if (index!== -1) {
            this.lists.splice(index, 1);
        }
    }
}

const createNewUser = (title) => {
    return new User(title);
}

const recallUser = (title, tasks, lists) => {
    return new User(title, tasks, lists);
}

export { User, createNewUser, recallUser };