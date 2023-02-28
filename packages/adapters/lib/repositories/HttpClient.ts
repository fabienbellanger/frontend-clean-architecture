export type HttpHeader = [string, string];

export interface HttpClient {
    baseUrl: string;

    get<T>(url: string, headers?: HttpHeader[]): Promise<T>;
    /*post<T, B>(url: string, body: B, headers?: HttpHeader[]): Promise<T>;
    put<T, B>(url: string, body: B, headers?: HttpHeader[]): Promise<T>;
    patch<T, B>(url: string, body: B, headers?: HttpHeader[]): Promise<T>;
    delete<T>(url: string, headers?: HttpHeader[]): Promise<T>;*/
}
