import {SaleRepository} from "../ports/repositories/SaleRepository";
import {GetSalePresenter} from "../ports/presenters/GetSalePresenter";
import {GetSaleRequest} from "../ports/requests/GetSaleRequest";

export class GetSaleUseCase {
    constructor(private readonly saleRepository: SaleRepository) {}

    async execute(request: GetSaleRequest, presenter: GetSalePresenter) {
        const sale = await this.saleRepository.GetSale(request.id);
        presenter.displaySale(sale);
    }
}