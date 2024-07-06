<template>
  <div class="w-full">
    <Table class="bg-background rounded-md">
      <TableCaption>A list of your recent products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>SKU</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="product in props.products" :key="product._id">
          <TableCell>{{ product.sku }}</TableCell>
          <TableCell>{{ product.name }}</TableCell>
          <TableCell>{{ product.price }}</TableCell>
          <TableCell>{{ product.quantity }}</TableCell>
          <TableCell class="capitalize">{{ product.status }}</TableCell>
          <TableCell>
            <Button size="sm">Edit</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "~/types/product";
import { Table } from "../ui/table";

interface Props {
  products?: Product[];
}
const props = defineProps<Props>();
</script>

<style></style>
