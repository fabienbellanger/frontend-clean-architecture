import type {Sale} from "../../entities";

export interface SaleRepository {
    createSale(sale: Sale): Promise<void>;

    getSales(): Promise<Sale[]>;

    getSale(id: string): Promise<Sale>;
}