<template>
  <DefaultLayout>
      <div class="flex w-[100%] pb-4 mx-auto">
        <div class="mx-auto pb-24">
            <div class="bg-white">
                <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                  <FormRegister isEdit="true" />
                </div>
            </div>
        </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
  import DefaultLayout from '~~/layouts/DefaultLayout.vue';
  import { useProductStore } from '~~/stores/product';
</script>
