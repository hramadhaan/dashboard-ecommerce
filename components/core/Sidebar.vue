<template>
  <aside class="w-2/12 flex flex-col items-start bg-background h-screen">
    <div class="py-5 flex w-full">
      <div class="flex flex-row items-center justify-between w-full">
        <div class="flex flex-row items-center space-x-2">
          <div
            class="h-8 w-8 rounded-lg flex items-center justify-center bg-primary"
          >
            <Icon
              class="text-white dark:text-black"
              name="lucide:trending-up"
            />
          </div>
          <p class="font-semibold font-work-sans text-lg">Dashboard</p>
        </div>
      </div>
    </div>
    <Separator />
    <div class="w-full overflow-y-scroll">
      <!-- Sidebar Menu -->
      <div class="w-full">
        <p class="uppercase text-xs py-5">Menu</p>
        <NuxtLink
          v-for="menu in MENU_SIDEBAR_ITEMS"
          :key="menu.id"
          :to="menu.href"
          class="flex w-full flex-col items-start gap-y-4"
        >
          <div
            class="flex flex-row items-center space-x-3 cursor-pointer w-full group hover:bg-slate-900 dark:hover:bg-slate-100 p-2 rounded-md"
          >
            <Icon
              :name="menu.icon"
              class="group-hover:text-slate-100 dark:group-hover:text-slate-900"
            />
            <span
              class="font-medium font-work-sans group-hover:text-slate-100 dark:group-hover:text-slate-900"
              >{{ menu.name }}</span
            >
          </div>
        </NuxtLink>
      </div>
      <!-- Sidebar Accounts -->
      <div class="w-full">
        <p class="uppercase text-xs py-5">Accounts</p>
        <div class="flex w-full flex-col items-start gap-y-4">
          <div
            v-for="sidebar in ACCOUNT_SIDEBAR_ITEMS"
            :key="sidebar.id"
            class="flex flex-row items-center space-x-3 cursor-pointer w-full group hover:bg-slate-900 dark:hover:bg-slate-100 p-2 rounded-md"
          >
            <Icon
              :name="sidebar.icon"
              class="group-hover:text-slate-100 dark:group-hover:text-slate-900"
            />
            <span
              class="font-medium font-work-sans group-hover:text-slate-100 dark:group-hover:text-slate-900"
              >{{ sidebar.name }}</span
            >
          </div>
        </div>
      </div>
      <!-- Sidebar Others -->
      <div class="w-full">
        <p class="uppercase text-xs py-5">Others</p>
        <div class="flex w-full flex-col items-start gap-y-4">
          <div
            v-for="setting in SETTING_SIDEBAR_ITEMS"
            :key="setting.id"
            class="flex flex-row items-center space-x-3 cursor-pointer w-full group hover:bg-slate-900 dark:hover:bg-slate-100 p-2 rounded-md"
          >
            <Icon
              :name="setting.icon"
              class="group-hover:text-slate-100 dark:group-hover:text-slate-900"
            />
            <span
              class="font-medium font-work-sans group-hover:text-slate-100 dark:group-hover:text-slate-900"
              >{{ setting.name }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
const MENU_SIDEBAR_ITEMS = ref([
  {
    id: "1",
    name: "Overview",
    icon: "lucide:home",
    href: "/",
  },
  {
    id: "2",
    name: "Analytics",
    icon: "lucide:line-chart",
    href: "/",
  },
  {
    id: "3",
    name: "Products",
    icon: "lucide:shopping-cart",
    href: "/products",
  },
  {
    id: "4",
    name: "Order",
    icon: "lucide:wallet",
    href: "/",
  },
  {
    id: "5",
    name: "Customers",
    icon: "lucide:user",
    href: "/",
  },
  {
    id: "6",
    name: "Reports",
    icon: "lucide:files",
    href: "/",
  },
]);

const ACCOUNT_SIDEBAR_ITEMS = ref([
  {
    id: "1",
    name: "Message",
    icon: "lucide:message-circle",
    href: "/",
  },
  {
    id: "2",
    name: "Profile",
    icon: "lucide:user",
    href: "/",
  },
]);

const SETTING_SIDEBAR_ITEMS = ref([
  {
    id: "1",
    name: "Settings",
    icon: "lucide:settings",
    href: "/",
  },
  {
    id: "2",
    name: "Logout",
    icon: "lucide:log-out",
    href: "/",
  },
]);
</script>

<style></style>
