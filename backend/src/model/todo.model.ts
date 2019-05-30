export class Todo {

    constructor(
        public id?: number,
        public name?: string,
        public archived?: boolean,
        public dueDate?: Date
    ) {}

    toString() {
        return JSON.stringify(this);
    }
}
