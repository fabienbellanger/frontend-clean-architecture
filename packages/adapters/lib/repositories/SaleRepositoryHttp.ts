import type {Sale, SaleRepository} from "@frontend-clean-architecture/domain";
import type {HttpClient, SaleDto} from "@frontend-clean-architecture/adapters";
import {SaleMapper} from "@frontend-clean-architecture/adapters";


export class SaleRepositoryHttp implements SaleRepository {
    constructor(private http: HttpClient) {}

    getSales(): Promise<Sale[]> {
        return this.http.get<SaleDto[]>(`/sales`)
            .then((res: SaleDto[]) => res.map(sale => SaleMapper.toSaleDomain(sale)));
    }

    getSale(id: string): Promise<Sale> {
        return this.http.get<SaleDto>(`/sales/${id}`)
            .then((res: SaleDto) => SaleMapper.toSaleDomain(res));
    }

    createSale(sale: Sale): Promise<void> {
        return this.http.post<void, SaleDto>('/sales', {
            id: sale.id,
            date: sale.date.toISOString(),
            state: sale.state,
            priceAti: sale.priceAti.value.toString(),
            lines: [], // TODO
        } as SaleDto)
            .then();
    }
}