import {Waiter} from "../types";
import HttpClient from "../../../clients/HttpClient";

export class WaiterClient extends HttpClient<number, Waiter> {

    public fetchAll = async (): Promise<Waiter[]> => {
        try {
            const response = await fetch(this.url)
            return response.ok ? response.json() : Promise.reject(new Error(response.statusText));
        } catch (e: unknown) {
            return Promise.reject(e as Error);
        }
    };

    public create = async (waiter: Waiter): Promise<Waiter> => {
        try {
            const response = await fetch(this.url, {
                method: 'POST',
                body: JSON.stringify(waiter),
                headers: this.JSON_CONTENT_TYPE_HEADER
            });
            return response.ok ? response.json() : Promise.reject(new Error(response.statusText));
        } catch (e: unknown) {
            return Promise.reject(e as Error);
        }

    };

    public update = async (waiter: Waiter): Promise<Waiter> => {
        try {
            const response = await fetch(`${this.url}/${waiter.id}`, {
                method: 'PUT',
                body: JSON.stringify(waiter),
                headers: this.JSON_CONTENT_TYPE_HEADER
            });

            return response.ok ? response.json() : Promise.reject(new Error(response.statusText));
        } catch (e: unknown) {
            return Promise.reject(e as Error);
        }
    };

    public delete = async (waiterId: number): Promise<void> => {
        try {
            const response = await fetch(`${this.url}/${waiterId}`, {
                method: 'DELETE'
            });

            return response.ok ? response.json() : Promise.reject(new Error(response.statusText));
        } catch (e: unknown) {
            return Promise.reject(e as Error)
        }
    };
}