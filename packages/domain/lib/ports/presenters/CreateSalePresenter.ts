import {Sale} from "../../entities";

export interface CreateSalePresenter {
    notifySaleCreated(sale: Sale): void;
    notifyNewSaleError(error: Error): void;
}