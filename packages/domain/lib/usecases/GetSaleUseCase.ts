import type {SaleRepository} from "../ports";
import type {GetSalePresenter} from "../ports";
import type {GetSaleRequest} from "../ports";

export class GetSaleUseCase {
    constructor(private readonly saleRepository: SaleRepository) {}

    async execute(request: GetSaleRequest, presenter: GetSalePresenter) {
        presenter.displayLoading();

        setTimeout(async () => {
            try {
                const sale = await this.saleRepository.getSale(request.id);
                presenter.displaySale(sale);

            } catch (err: any) {
                presenter.displayError(err);
            }
        }, 1_000);
    }
}
