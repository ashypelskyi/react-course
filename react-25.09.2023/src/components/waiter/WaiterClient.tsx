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
}