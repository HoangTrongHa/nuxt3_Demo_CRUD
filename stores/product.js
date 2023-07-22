import { defineStore } from "pinia";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios;

export const useProductStore = defineStore('product', {
    state: () => ({
        products: {},
        isLoading: false,
    }),
    actions: {
        async getProduct() {
            let res = await $axios.get('/products');
            this.$state.products = res.data;
        },
        async delete(id) {
            await $axios.delete(`/products/${id}`);
        },
        async actionDataProduct(body) {
            if(body.id) {
                await $axios.put(`/products/${body.id}`, body);
            } else {
                await $axios.post('/products', body);
            }
        },
    },
    persist: true,
})