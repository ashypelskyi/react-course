abstract class HttpClient<I, T> {
    protected JSON_CONTENT_TYPE_HEADER = {
        'Content-Type': 'application/json'
    };

    constructor(protected readonly url: string) {
    }

    abstract fetchAll: () => Promise<T[]>
    abstract create: (item: T) => Promise<T>
    abstract update: (item: T) => Promise<T>
    abstract delete: (item: I) => Promise<void>
}

export default HttpClient;