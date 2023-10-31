export const FETCH_ALL = 'fetchAll';
export const CREATE = 'create';
export const UPDATE = 'update';
export const DELETE = 'delete';

abstract class HttpClient<I, T> {
    protected JSON_CONTENT_TYPE_HEADER = {
        'Content-Type': 'application/json'
    };

    constructor(protected readonly url: string) {
    }

    abstract [FETCH_ALL]: () => Promise<T[]>
    abstract [CREATE]: (item: T) => Promise<T>
    abstract [UPDATE]: (item: T) => Promise<T>
    abstract [DELETE]: (item: I) => Promise<void>
}

export default HttpClient;