import {Waiter} from "../types";
import HttpClient from "../../../clients/HttpClient";

export class WaiterClient extends HttpClient<number, Waiter> {

    public fetchAll = async (): Promise<Waiter[]> => {
        const response = await fetch(this.url)
        return response.json();
    };

    public create = async (waiter: Waiter): Promise<Waiter> => {
        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(waiter),
            headers: this.JSON_CONTENT_TYPE_HEADER
        });
        return response.json();
    };

    public update = async (waiter: Waiter): Promise<Waiter> => {
        const response = await fetch(`${this.url}/${waiter.id}`, {
            method: 'PUT',
            body: JSON.stringify(waiter),
            headers: this.JSON_CONTENT_TYPE_HEADER
        });
        return response.json();
    };

    public delete = async (waiterId: number): Promise<void> => {
        const response = await fetch(`${this.url}/${waiterId}`, {
            method: 'DELETE'
        });
        return response.json();
    };
}