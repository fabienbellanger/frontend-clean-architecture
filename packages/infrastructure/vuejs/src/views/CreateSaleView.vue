<template>
    <div>
        <h1>Sale creation</h1>
    </div>
</template>

<script lang="ts" setup>
import { inject, onMounted, ref } from 'vue';
import {CREATE_SALE_CONTROLLER_FACTORY} from "@/DependencyInjection";
import {CreateSaleController} from "@frontend-clean-architecture/adapters";

const controller = inject(CREATE_SALE_CONTROLLER_FACTORY)?.build() as CreateSaleController;
const vm = ref(controller.vm);

onMounted(() => {
    controller.subscribeVM(updatedVm => {
        vm.value = { ...updatedVm };
    });
})
</script>