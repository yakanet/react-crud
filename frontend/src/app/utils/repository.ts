

export class CrudRepository<T extends { id: number | undefined }> {
    public readonly baseUrl: string;

    constructor(endpoint: string) {
        this.baseUrl = `http://localhost:3001/${endpoint}`
    }

    async findAll(): Promise<T[]> {
        const result = await fetch(this.baseUrl);
        return await result.json() as T[];
    }

    update(value: T, list: T[]): Promise<T[]> {
        return fetch(this.baseUrl + `/${value.id}`, {
            method: 'PUT',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(value)
        })
            .then(response => response.json())
            .then(value => list.map(v => v.id === value.id ? value : v));
    }

    create(value: T, list: T[]): Promise<T[]> {
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(value)
        })
            .then(response => response.json())
            .then(value => [...list, value]);
    }

    remove(value: T, list: T[]): Promise<T[]> {
        return fetch(this.baseUrl + `/${value.id}`, {
            method: 'DELETE'
        })
            .then(() => list.filter(v => v.id !== value.id));
    }

}
