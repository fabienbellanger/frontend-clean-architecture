import {Presenter, Subscriber} from "../presenters";

export abstract class Controller<T> {
    protected constructor(protected presenter: Presenter<T>) {}

    get vm() {
        return this.presenter.vm;
    }

    subscribeVM(subscriber: Subscriber<T>) {
        this.presenter.subscribeVM(subscriber);
    }
}
