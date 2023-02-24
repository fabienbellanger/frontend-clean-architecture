import {Sale} from "../../entities/Sale";

export interface GetSalesPresenter {
    displaySales(sales: Sale[]): void
}