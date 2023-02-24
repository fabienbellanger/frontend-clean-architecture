import {Sale} from "../../entities/Sale";

export interface CreateSalePresenter {
    notifySaleCreated(sale: Sale): void
    notifyNewSaleError(error: Error): void
}