import {defineStore} from "pinia";

export const useSaleStore = defineStore('sale', {
    state: () => ({ count: 0 }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        getSale(id: string) {

        },
        increment() {
            this.count++;
        },
    },
});