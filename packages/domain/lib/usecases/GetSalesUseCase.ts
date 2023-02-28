import {SaleRepository} from "../ports";
import {GetSalesPresenter} from "../ports";

export class GetSalesUseCase {
    constructor(private readonly saleRepository: SaleRepository) {}

    async execute(presenter: GetSalesPresenter) {
        const sales = await this.saleRepository.getSales();
        presenter.displaySales(sales);
    }
}