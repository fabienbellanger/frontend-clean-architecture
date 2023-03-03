import {Sale, SaleRepository, SaleState} from "@frontend-clean-architecture/domain";

export class SaleRepositoryBuilder {
    withGetSale(getSale: (id: string) => Promise<Sale>) {
        this.getSale = getSale;
        return this;
    }

    withGetSales(getSales: () => Promise<Sale[]>) {
        this.getSales = getSales;
        return this;
    }

    build(): SaleRepository {
        return {
            getSale: this.getSale,
            getSales: this.getSales,
        };
    }

    private getSales: () => Promise<Sale[]> = () => Promise.resolve([]);

    private getSale: (id: string) => Promise<Sale> = () => Promise.resolve(new Sale('1', new Date(), 10.0, SaleState.open, []));
}