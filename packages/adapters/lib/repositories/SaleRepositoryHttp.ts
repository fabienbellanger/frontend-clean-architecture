import {Sale, SaleRepository} from "@frontend-clean-architecture/domain";
import {HttpClient, SaleDto, SaleMapper} from "@frontend-clean-architecture/adapters";


export class SaleRepositoryHttp implements SaleRepository {
    constructor(private http: HttpClient) {}

    getSales(): Promise<Sale[]> {
        return Promise.reject('unimplemented yet!');
    }

    getSale(id: string): Promise<Sale> {
        return this.http.get<SaleDto>(`/sales/${id}`)
            .then((res) => SaleMapper.toSaleDomain(res))
    }
}