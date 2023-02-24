import {Sale} from "../../entities/Sale";

export interface SaleRepository {
    GetSales(): Promise<Sale[]>;
    GetSale(id: string): Promise<Sale | null>;
    CreateSale(sale: Sale): Promise<void>;
}