<template>
    <div class="about">
        <h1>Sale ID from query parameter: {{saleId}}</h1>
        <br>
        <h2 v-if="vm.loading">Chargement en cours...</h2>
        <h2 v-else-if="vm.error" style="color: red">Error: {{vm.error}}</h2>
        <h2 v-else>Sale Id: {{vm.sale?.id}}</h2>
        <button style="padding: 4px 8px" @click="retry()">Retry</button>
    </div>
</template>

<script lang="ts" setup>
import { inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import {SALE_CONTROLLER_FACTORY} from "@/DependencyInjection";
import type {SaleController} from "@frontend-clean-architecture/adapters/lib";

const saleId = useRoute().params.id.toString();
const controller = inject(SALE_CONTROLLER_FACTORY)?.build(saleId) as SaleController;
const vm = ref(controller.vm);

onMounted(() => {
    controller.subscribeVM(updatedVm => {
        vm.value = { ...updatedVm };
        console.log('controller updated', vm.value);

        if (vm.value.sale !== undefined) {
            // TODO: Save in store when OK
            console.log('sale', vm.value.sale);
        }
    });
    controller.fetchSale();
})

function retry() {
    controller.fetchSale();
}
</script>
