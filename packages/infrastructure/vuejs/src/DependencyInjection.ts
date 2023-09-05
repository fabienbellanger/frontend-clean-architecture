import type {App, InjectionKey} from "vue";
import router from "@/router";
import type {HttpClient, NavigationRoute} from "@frontend-clean-architecture/adapters/lib";
import {SaleRepositoryHttp} from "@frontend-clean-architecture/adapters/lib/repositories/SaleRepositoryHttp";
import {GetSaleUseCase} from "@frontend-clean-architecture/domain/lib";
import {
    CreateSaleControllerFactory,
    type HttpHeader,
    SaleControllerFactory
} from "@frontend-clean-architecture/adapters/lib";
import {CreateSaleUseCase} from "@frontend-clean-architecture/domain/lib/usecases/CreateSaleUseCase";

export const SALE_CONTROLLER_FACTORY: InjectionKey<SaleControllerFactory> = Symbol();
export const CREATE_SALE_CONTROLLER_FACTORY: InjectionKey<CreateSaleControllerFactory> = Symbol();

export const dependencies = (app: App) => {
    const httpClient: HttpClient = {
        baseUrl: 'http://localhost/api/v1',

        // Get method
        get<T>(url: string): Promise<T> {
            return fetch(this.baseUrl + url).then(value => value.json()); // Can use Axios instead
        },

        // Post method
        post<T, B>(url: string, body: B, headers?: HttpHeader[]): Promise<T> {
            return fetch(this.baseUrl + url, {
                method: 'POST',
                body: JSON.stringify(body),
                // headers: ... // TODO
            })
                .then(value => value.json());
        },
    };

    const navigation = {
        navigate(route: NavigationRoute): Promise<void> {
            return router.push(route).then();
        }
    };

    // Repositories
    const saleRepository = new SaleRepositoryHttp(httpClient);

    // Use cases
    const getSaleUseCase = new GetSaleUseCase(saleRepository);
    const createSaleUseCase = new CreateSaleUseCase(saleRepository);

    // Controllers factories
    const saleControllerFactory = new SaleControllerFactory(getSaleUseCase);
    const createSaleControllerFactory = new CreateSaleControllerFactory(createSaleUseCase, navigation);

    app.provide(SALE_CONTROLLER_FACTORY, saleControllerFactory);
    app.provide(CREATE_SALE_CONTROLLER_FACTORY, createSaleControllerFactory);
}