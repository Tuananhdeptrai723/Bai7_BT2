class ToDo {
    public date: string;
    public works: string[];

    constructor(date: string, works: string[]) {
        this.date = date;
        this.works = works;
    }

    public addWork(work: string): void {
        this.works.push(work);
    }

    public removeWork(work: string): void {
        const index = this.works.indexOf(work);
        if (index > -1) {
            this.works.splice(index, 1);
        }
    }
}

class ToDoList {
    public toDos: ToDo[];

    constructor() {
        this.toDos = [];
    }

    public addToDoToList(toDo: ToDo): void {
        const index = this.toDos.findIndex((item) => item.date === toDo.date);
        if (index === -1) {
            this.toDos.push(toDo);
        } else {
            this.toDos[index] = toDo;
        }
    }

    public removeToDoFromList(toDo: ToDo): void {
        const index = this.toDos.indexOf(toDo);
        if (index > -1) {
            this.toDos.splice(index, 1);
        }
    }
}

const toDoList = new ToDoList();

const toDo1 = new ToDo('2023-03-31', ['Work 1', 'Work 2']);
toDoList.addToDoToList(toDo1);

const toDo2 = new ToDo('2023-04-01', ['Work 3', 'Work 4']);
toDoList.addToDoToList(toDo2);

const toDo3 = new ToDo('2023-04-02', ['Work 5', 'Work 6']);
toDoList.addToDoToList(toDo3);


