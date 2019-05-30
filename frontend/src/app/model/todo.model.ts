export interface ITodo {
    id: number | undefined;
    name: string;
    archived: boolean;
}

export function emptyTodo(): ITodo {
    return {
        id: undefined,
        name: '',
        archived: false
    }
}
