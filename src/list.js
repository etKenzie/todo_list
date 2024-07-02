import { createTodoItem, TodoItem } from "./item";
import {v4 as uuidv4} from 'uuid';

class TodoList {
    constructor(name, description) {
        this.id = uuidv4();
        this.name = name;
        this.description = description;
        this.list = [];
    }

    // getId () { return this.id; }

    getName () { return this.name; }

    addTask (task) {
        this.list.push(task);
    }

    removeTask (item) {
        const index = this.list.findIndex(task => task.id === item.id);
        if (index!== -1) {
            this.list.splice(index, 1);
        }
    }

}

const createTodoList = (title, description) => {
    return new TodoList(title, description);
}

export { createTodoList,  TodoList };