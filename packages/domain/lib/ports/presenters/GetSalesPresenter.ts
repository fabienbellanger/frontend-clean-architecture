import {Sale} from "../../entities";

export interface GetSalesPresenter {
    displaySales(sales: Sale[]): void;
}