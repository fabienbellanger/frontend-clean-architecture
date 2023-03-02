import {Sale, SaleState} from "@frontend-clean-architecture/domain";
import {HttpClient, HttpHeader, SaleDto} from "@frontend-clean-architecture/adapters";
import {SaleRepositoryHttp} from "../../lib/repositories/SaleRepositoryHttp";

describe('SaleRepositoryHttp', () => {
    test('get sale', async () => {
        // Given
        const httpClient: HttpClient = {
            get(url: string, headers?: HttpHeader[]): Promise<SaleDto> {
                const response: SaleDto = {
                    id: '1',
                    date: '2023-02-01',
                    priceAti: '10.0',
                    state: 'open',
                    lines: [],
                };
                return Promise.resolve(response);
            }
        } as HttpClient;
        const repository = new SaleRepositoryHttp(httpClient);

        // When
        const sale = await repository.getSale('1');

        // Then
        const expectedSale = new Sale('1', new Date('2023-02-01'),10.0, SaleState.open, []);
        expect(sale).toEqual(expectedSale);
    });

    test('get sales', async () => {
        // Given
        const httpClient: HttpClient = {
            get(url: string, headers?: HttpHeader[]): Promise<SaleDto[]> {
                const response: SaleDto[] = [
                    {
                        id: '1',
                        date: '2023-02-01',
                        priceAti: '10.0',
                        state: 'open',
                        lines: [],
                    },
                    {
                        id: '2',
                        date: '2023-02-02',
                        priceAti: '15.0',
                        state: 'open',
                        lines: [],
                    },
                    {
                        id: '3',
                        date: '2023-02-03',
                        priceAti: '19.5',
                        state: 'open',
                        lines: [],
                    }
                ];
                return Promise.resolve(response);
            }
        } as HttpClient;
        const repository = new SaleRepositoryHttp(httpClient);

        // When
        const sales = await repository.getSales();

        // Then
        const expectedSales = [
            new Sale('1', new Date('2023-02-01'),10.0, SaleState.open, []),
            new Sale('2', new Date('2023-02-02'),15.0, SaleState.open, []),
            new Sale('3', new Date('2023-02-03'),19.5, SaleState.open, []),
        ];
        expect(sales).toEqual(expectedSales);
    });
});
