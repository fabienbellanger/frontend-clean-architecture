import {GetSalesPresenter, GetSalesUseCase} from "@frontend-clean-architecture/domain";

export class GetSalesUseCaseBuilder {
    withExecute(execute: (presenter: GetSalesPresenter) => Promise<void>) {
        this.execute = execute;
        return this;
    }

    build(): GetSalesUseCase {
        return {execute: this.execute} as GetSalesUseCase;
    }

    private execute: (presenter: GetSalesPresenter) => Promise<void> = () => Promise.resolve();
}