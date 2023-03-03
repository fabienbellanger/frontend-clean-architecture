import {GetSaleUseCaseBuilder} from "../builders/GetSaleUseCaseBuilder";
import {GetSalePresenter, GetSaleRequest, Sale, SaleState} from "@frontend-clean-architecture/domain";
import {SaleController, SalePresenter} from "@frontend-clean-architecture/adapters";

describe('SaleController', () => {
    test('on display loading, update sale vm', () => {
        // Given
        const useCase = new GetSaleUseCaseBuilder()
            .withExecute((request: GetSaleRequest, presenter: GetSalePresenter) => {
                presenter.displayLoading();
                return Promise.resolve();
            })
            .build();
        const presenter = new SalePresenter();
        const controller = new SaleController('1', useCase, presenter);

        // When
        controller.fetchSale();

        // Then
        expect(controller.vm.loading).toBeTruthy();
    });

    test('on display error, update sale vm', () => {
        // Given
        const err = new Error('not valid id');
        const useCase = new GetSaleUseCaseBuilder()
            .withExecute((request: GetSaleRequest, presenter: GetSalePresenter) => {
                presenter.displayError(err);
                return Promise.resolve();
            })
            .build();
        const presenter = new SalePresenter();
        const controller = new SaleController('1', useCase, presenter);

        // When
        controller.fetchSale();

        // Then
        expect(controller.vm.error).toEqual(err);
        expect(controller.vm.loading).toBeFalsy();
    });

    test('on display sale, update sale vm', () => {
        // Given
        const sale = new Sale('1', new Date('2023-03-01'), 10.0, SaleState.open, []);
        const useCase = new GetSaleUseCaseBuilder()
            .withExecute((request: GetSaleRequest, presenter: GetSalePresenter) => {
                presenter.displaySale(sale);
                return Promise.resolve();
            })
            .build();
        const presenter = new SalePresenter();
        const controller = new SaleController('1', useCase, presenter);

        // When
        controller.fetchSale();

        // Then
        expect(controller.vm.sale).toEqual(sale);
        expect(controller.vm.loading).toBeFalsy();
        expect(controller.vm.error).toBeUndefined();
    });
});