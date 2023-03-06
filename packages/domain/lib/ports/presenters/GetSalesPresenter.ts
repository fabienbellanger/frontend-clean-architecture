import type {Sale} from "../../entities";

export interface GetSalesPresenter {
    displaySales(sales: Sale[]): void;
}