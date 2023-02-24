import {SaleRepository} from "../ports/repositories/SaleRepository";
import {GetSalesPresenter} from "../ports/presenters/GetSalesPresenter";

export class GetSalesUseCase {
    constructor(private readonly saleRepository: SaleRepository) {}

    async execute(presenter: GetSalesPresenter) {
        const sales = await this.saleRepository.GetSales();
        presenter.displaySales(sales);
    }
}