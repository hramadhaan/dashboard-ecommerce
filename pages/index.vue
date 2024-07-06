<template>
  <div class="bg-slate-100 dark:bg-slate-900 w-full h-full rounded-md p-4">
    <SectionRevenue />
  </div>
</template>

<script lang="ts" setup>
import SectionRevenue from "../components/home/SectionRevenue.vue";

useHead({
  title: "Dashboard E-Commerce",
});
definePageMeta({
  auth: true,
});
</script>

<style></style>
