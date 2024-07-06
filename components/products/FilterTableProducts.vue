<template>
  <div class="flex flex-col mx-4 mt-4">
    <div class="flex flex-row items-center gap-x-4">
      <Button variant="link">All</Button>
      <Button variant="link">Published</Button>
      <Button variant="link">Drafts</Button>
    </div>
    <div class="flex flex-row items-center gap-x-4">
      <Input type="text" placeholder="Search..." />

      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline"
            ><Icon name="lucide:filter" class="size-4 mr-2" /> Filter</Button
          >
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Filter</DialogTitle>
            <DialogDescription
              >Produk akan di munculkan sesuai dengan filter yang akan
              dipilih.</DialogDescription
            >
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Button @click="goToAddProduct">
        <Icon name="lucide:plus" class="size-4 mr-2" />
        Add Product
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const goToAddProduct = () => {
  router.push("/products/new");
};
</script>
