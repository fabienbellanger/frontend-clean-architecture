import {Sale} from "../../entities";

export interface SaleRepository {
    getSales(): Promise<Sale[]>;
    getSale(id: string): Promise<Sale>;
}