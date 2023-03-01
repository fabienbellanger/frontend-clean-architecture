import {Price, Sale, SaleBuilder, SaleRepository, SaleState} from "@frontend-clean-architecture/domain";

export class SaleRepositoryBuilder {
    withGetSale(getSale: (id: string) => Promise<Sale>) {
        this.getSale = getSale;
        return this;
    }

    build(): SaleRepository {
        return {
            getSale: this.getSale,
            getSales: this.getSales,
        };
    }

    private getSales: () => Promise<Sale[]> = () => Promise.resolve([]);

    private getSale: (id: string) => Promise<Sale> = () => Promise.resolve(new SaleBuilder()
        .withId('1')
        .withDate(new Date())
        .withState(SaleState.open)
        .withPriceAti(new Price(10.0, 'EUR'))
        .withLines([])
        .build());
}