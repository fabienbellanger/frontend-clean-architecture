import {Sale, SaleRepository} from "@frontend-clean-architecture/domain";
import {HttpClient, SaleDto, SaleMapper} from "@frontend-clean-architecture/adapters";


export class SaleRepositoryHttp implements SaleRepository {
    private baseUrl = 'http://localhost/api/v1';

    constructor(private http: HttpClient, private saleRepository: SaleRepository) {}

    getSales(): Promise<Sale[]> {
        return Promise.reject('unimplemented yet!');
    }

    getSale(id: string): Promise<Sale> {
        return this.saleRepository.getSale(id)
            .then((sale) => this.http.get<SaleDto>(
                `${this.baseUrl}/sales/${sale.id}`))
            .then((res) => SaleMapper.toSaleDomain(res))
    }
}