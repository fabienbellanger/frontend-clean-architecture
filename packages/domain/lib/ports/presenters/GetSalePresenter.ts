import {Sale} from "../../entities/Sale";

export interface GetSalePresenter {
    displaySale(sale: Sale | null): void
}