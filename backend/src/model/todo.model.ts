export class Todo {

    constructor(
        public id?: number,
        public name?: string,
        public archived?: boolean,
    ) {}

    toString() {
        return JSON.stringify(this);
    }
}
