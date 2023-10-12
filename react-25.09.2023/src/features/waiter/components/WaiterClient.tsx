import {Waiter} from "../types";

export class WaiterClient {
    constructor(private readonly url: string) {
    }

    public async fetchAll(): Promise<Waiter[]> {
        const response = await fetch(this.url)
        return response.json();
    }

    public async create(waiter: Waiter): Promise<Waiter> {
        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(waiter),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

    public async edit(waiter: Waiter): Promise<Waiter> {
        const response = await fetch(`${this.url}/${waiter.id}`, {
            method: 'PUT',
            body: JSON.stringify(waiter),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

    public async delete(waiterId: number): Promise<void> {
        const response = await fetch(`${this.url}/${waiterId}`, {
            method: 'DELETE'
        });
        return response.json();
    }
}