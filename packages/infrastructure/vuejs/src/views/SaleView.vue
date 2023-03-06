<template>
    <div class="about">
        <h1>Sale ID from query parameter: {{saleId}}</h1>
        <br>
        <h2 v-if="vm.loading">Chargement en cours...</h2>
        <h2 v-else-if="vm.error" style="color: red">Error: {{vm.error}}</h2>
        <h2 v-else>Sale Id: {{vm.sale?.id}}</h2>
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
    });
    controller.fetchSale();
})
</script>
