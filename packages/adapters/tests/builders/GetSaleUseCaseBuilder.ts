import {GetSalePresenter, GetSaleRequest, GetSaleUseCase} from "@frontend-clean-architecture/domain";

export class GetSaleUseCaseBuilder {
    withExecute(execute: (request: GetSaleRequest, presenter: GetSalePresenter) => Promise<void>) {
        this.execute = execute;
        return this;
    }

    build(): GetSaleUseCase {
        return {execute: this.execute} as GetSaleUseCase;
    }

    private execute: (request: GetSaleRequest, presenter: GetSalePresenter) => Promise<void> = () => Promise.resolve();
}