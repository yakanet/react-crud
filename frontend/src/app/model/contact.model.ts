export interface IContact {
    id: number | undefined;
    name: string;
    email: string;
}

export function emptyContact(): IContact {
    return {
        id: undefined,
        name: '',
        email: ''
    }
}
