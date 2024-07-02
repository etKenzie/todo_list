import {v4 as uuidv4} from 'uuid';
import { createTodoList } from './list';
import { createTodoItem } from './item';

class User {
    constructor(name) {
        this.id = uuidv4();
        this.name = name;
        this.tasks = createTodoList("All Tasks", "");
        this.lists = [];
    }

    getTasks() {
        return this.tasks;
    }

    getLists() {
        return this.lists;
    }

    createNewList(name, description) {
        const newList = createTodoList(name, description);
        this.lists.push(newList);
    }

    // appendTask(task) {
    //     console.log(task);
    //     this.tasks.addTask(task);
    // }

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

export { User, createNewUser };