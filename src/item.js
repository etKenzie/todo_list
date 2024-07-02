import {parse, format, isValid} from "date-fns";
import {v4 as uuidv4} from 'uuid';


class TodoItem {
    constructor(title, description, dueDate, priority) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.dueDate = this.formatDate(dueDate);
        this.priority = priority;
        this.completed = false;
    }

    formatDate(dueDate) {
        if (dueDate) {
            const dateObject = parse(dueDate, "yyyy-MM-dd", new Date());
            if (isValid(dateObject)) {
                return format(dateObject, 'MM/dd/yyyy');
            }
        }
        return "";
    }

    // getId() { return this.id; }


    updateDueDate(newDate) {
        this.dueDate = this.formatDate(newDate);
    }

    updateTitle(title) {
        this.title = title;
    }

    updateDescription(description) {
        this.description = description;
    }

    updatePriority(priority) {
        this.priority = priority;
    }

    toggleCompletion() {
        this.completed =!this.completed;
    }


}

const createTodoItem = (title,description,dueDate,priority) => {
    return new TodoItem(title, description, dueDate, priority);
}

export { createTodoItem, TodoItem };