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

    withCreateSale(createSale: (sale: Sale) => Promise<void>) {
        this.createSale = createSale;
        return this;
    }

    build(): SaleRepository {
        return {
            getSale: this.getSale,
            getSales: this.getSales,
            createSale: this.createSale,
        };
    }

    private getSales: () => Promise<Sale[]> = () => Promise.resolve([]);

    private getSale: (id: string) => Promise<Sale> = () => Promise.resolve(new Sale('1', new Date(), 10.0, SaleState.open, []));

    private createSale: (sale: Sale) => Promise<void> = () => Promise.resolve();
}