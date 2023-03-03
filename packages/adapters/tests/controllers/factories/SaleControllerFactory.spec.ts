import {SaleControllerFactory} from "@frontend-clean-architecture/adapters";
import {GetSaleUseCaseBuilder} from "../../builders/GetSaleUseCaseBuilder";

describe('SaleControllerFactory', () => {
    test('create a SaleControllerFactory', () => {
        // Given
        const factory = new SaleControllerFactory(
            new GetSaleUseCaseBuilder().build()
        );

        // When
        const controller = factory.build('1');

        // Then
        expect(controller).not.toBeNull();
    });
});
