import {Sale} from "../../entities";

export interface GetSalePresenter {
    displaySale(sale: Sale): void;
    displayLoading(): void;
}
