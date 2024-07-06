<template>
  <div class="w-full h-full flex-col p-4 bg-slate-100 dark:bg-slate-900">
    <div class="flex flex-row items-center justify-between">
      <div class="flex flex-col gap-y-1">
        <p class="text-3xl font-semibold">Add a Product</p>
        <p class="text-sm font-light">Orders placed accross your store</p>
      </div>
      <div class="flex flex-row items-center gap-x-2">
        <Button variant="outline" class="text-red-500 hover:text-red-700"
          >Discard</Button
        >
        <Button variant="outline">Save as Draft</Button>
        <Button>Publish Product</Button>
      </div>
    </div>
    <form class="mt-5">
      <div class="grid grid-cols-12 gap-4">
        <!-- Left -->
        <div class="col-span-8 p-4 border rounded-md bg-background">
          <FormField v-slot="{ componentField }" name="title" class="w-full">
            <FormItem class="w-full">
              <FormLabel>Product Title</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Product Title"
                  class="w-full"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField
            v-slot="{ componentField }"
            name="description"
            class="w-full"
          >
            <FormItem class="w-full mt-4">
              <FormLabel>Product Description</FormLabel>
              <FormControl>
                <TextEditor v-bind="componentField" />
              </FormControl>
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="images" class="w-full">
            <FormItem class="w-full mt-4">
              <FormLabel>Product Images</FormLabel>
              <Input
                type="file"
                class="w-full"
                v-bind="componentField"
                accept="image/*"
              />
            </FormItem>
          </FormField>
          <div class="mt-4">
            <p class="text-sm font-medium">Inventory</p>
            <div class="grid grid-cols-12 gap-4 mt-2">
              <div class="col-span-3 flex flex-col gap-y-2">
                <div
                  role="button"
                  v-for="menu in menuRef"
                  :key="menu.name"
                  @click="handleActiveMenu(menu.name)"
                  class="p-2 rounded-md cursor-pointer flex flex-row items-center w-full gap-x-2"
                >
                  <Icon :name="menu.icon" class="w-4 h-4" />
                  <p class="text-sm">{{ menu.name }}</p>
                </div>
              </div>
              <div class="col-span-9">
                <div
                  v-if="activeMenu.toLowerCase() === 'pricing'"
                  class="w-full gap-y-2"
                >
                  <FormField
                    v-slot="{ componentField }"
                    name="price"
                    class="w-full"
                  >
                    <FormItem class="w-full">
                      <FormLabel>Price</FormLabel>
                      <Input
                        type="number"
                        class="w-full"
                        v-bind="componentField"
                      />
                    </FormItem>
                  </FormField>
                  <FormField
                    v-slot="{ componentField }"
                    name="price-discount"
                    class="w-full"
                  >
                    <FormItem class="w-full">
                      <FormLabel>Price Discount</FormLabel>
                      <Input
                        type="number"
                        class="w-full"
                        v-bind="componentField"
                      />
                    </FormItem>
                  </FormField>
                </div>
                <div v-else-if="activeMenu.toLowerCase() === 'stock'" class="w-full">
                  <FormField
                    v-slot="{ componentField }"
                    name="stock-product"
                    class="w-full"
                  >
                    <FormItem class="w-full">
                      <FormLabel>Stock Product</FormLabel>
                      <Input
                        type="number"
                        class="w-full"
                        v-bind="componentField"
                      />
                    </FormItem>
                  </FormField>
                </div>
                <div v-else-if="activeMenu.toLowerCase() === 'sku'" class="w-full">
                  <FormField
                    v-slot="{ componentField }"
                    name="sku-product"
                    class="w-full"
                  >
                    <FormItem class="w-full">
                      <FormLabel>SKU Product</FormLabel>
                      <Input
                        type="text"
                        class="w-full"
                        v-bind="componentField"
                      />
                    </FormItem>
                  </FormField>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Right -->
        <div class="col-span-4 flex flex-col gap-y-3">
          <div
            class="w-full bg-background p-4 border rounded-md flex flex-col gap-y-2"
          >
            <p class="text-lg font-semibold">Organize</p>
            <FormField v-slot="{ componentField }" name="category">
              <FormItem class="w-full">
                <FormLabel>Category</FormLabel>
                <Select v-bind="componentField">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="baju">Baju</SelectItem>
                      <SelectItem value="celana">Celana</SelectItem>
                      <SelectItem value="jaket">Jaket</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="vendor">
              <FormItem class="w-full">
                <FormLabel>Vendor</FormLabel>
                <Select v-bind="componentField">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select vendor" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="baju">Baju</SelectItem>
                      <SelectItem value="celana">Celana</SelectItem>
                      <SelectItem value="jaket">Jaket</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            </FormField>
          </div>
          <div class="w-full bg-background p-4 border rounded-md flex-flex-col">
            <p class="text-lg font-semibold">Variants</p>
            <div class="flex flex-col items-start w-full">
              <div class="flex flex-row items-center justify-between w-full">
                <p class="font-medium">Option 1</p>
                <Button variant="ghost" size="xs">Remove</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import FormLabel from "~/components/ui/form/FormLabel.vue";
import TextEditor from "../../../components/core/TextEditor.vue";
const menuRef = ref([
  {
    name: "Pricing",
    icon: "lucide:tag",
  },
  {
    name: "Stock",
    icon: "lucide:box",
  },
  {
    name: "SKU",
    icon: "lucide:barcode",
  },
]);
const activeMenu = ref(menuRef.value[0].name);

const handleActiveMenu = (menu: string) => {
  activeMenu.value = menu;
};
</script>

<style></style>
