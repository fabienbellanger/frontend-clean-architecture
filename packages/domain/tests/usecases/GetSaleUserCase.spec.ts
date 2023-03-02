import {SaleRepositoryBuilder} from "../builders/SaleRepositoryBuilder";
import {GetSaleRequest, GetSaleUseCase, Sale, SaleState} from "@frontend-clean-architecture/domain";
import {GetSalePresenterBuilder} from "../builders/GetSalePresenterBuilder";

describe('Get sales use case', () => {
    test('display sales list', () => {
        return new Promise<Sale>(resolve => {
            // Given
            const saleRepository = new SaleRepositoryBuilder()
                .withGetSale(() => Promise.resolve(new Sale('1', new Date(), 10.0, SaleState.open, []))
                )
                .build();
            const useCase = new GetSaleUseCase(saleRepository);
            const presenter = new GetSalePresenterBuilder()
                .withDisplaySale(sale => resolve(sale))
                .build();
            const request = new GetSaleRequest('1');

            // When
            useCase.execute(request, presenter);
        }).then(sale => {
            // Then
            expect(sale.id).toEqual('1');
        });
    });
});
