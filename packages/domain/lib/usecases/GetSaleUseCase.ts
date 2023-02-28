import {SaleRepository} from "../ports";
import {GetSalePresenter} from "../ports";
import {GetSaleRequest} from "../ports";

export class GetSaleUseCase {
    constructor(private readonly saleRepository: SaleRepository) {}

    async execute(request: GetSaleRequest, presenter: GetSalePresenter) {
        presenter.displayLoading();

        const sale = await this.saleRepository.getSale(request.id);
        presenter.displaySale(sale);
    }
}
