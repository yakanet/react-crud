export class Contact {

    constructor(
        public id?: number,
        public name?: string,
        public email?: string,
    ) {}

    toString() {
        return JSON.stringify(this);
    }
}
