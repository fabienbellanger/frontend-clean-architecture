import type {Sale} from "../../entities";

export type CreateSaleErrors = string[];

export interface CreateSalePresenter {
    notifySaleCreated(sale: Sale): void;
    notifyNewSaleError(error: CreateSaleErrors): void;
}