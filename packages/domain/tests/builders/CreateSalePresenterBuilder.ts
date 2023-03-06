import {CreateSaleErrors, CreateSalePresenter, Sale} from "@frontend-clean-architecture/domain";

export class CreateSalePresenterBuilder {
    withNotifyNewSaleError(notifyNewSaleError: (err: CreateSaleErrors) => void) {
        this.notifyNewSaleError = notifyNewSaleError;
        return this;
    }

    withNotifySaleCreated(notifySaleCreated: (sale: Sale) => void) {
        this.notifySaleCreated = notifySaleCreated;
        return this;
    }

    build(): CreateSalePresenter {
        return {
            notifyNewSaleError: this.notifyNewSaleError,
            notifySaleCreated: this.notifySaleCreated,
        }
    }

    private notifySaleCreated: (sale: Sale) => void = () => null;

    private notifyNewSaleError: (err: CreateSaleErrors) => void = () => null;
}