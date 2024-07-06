<template>
  <div class="w-full h-full flex flex-col bg-slate-100 dark:bg-slate-900">
    <ProductsFilterTableProducts />
    <div class="dark:bg-slate-900 w-full h-full rounded-md p-4">
      <!-- Table -->
      <ProductsTableProducts
        v-show="!isLoading && !error"
        :products="products"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useQueryProducts } from "~/query/useQueryProducts";
import type { Product } from "~/types/product";
// First Init
const { isLoading, data: products, error } = useQueryProducts();
const showProducts = reactive<Product[]>([]);
</script>
