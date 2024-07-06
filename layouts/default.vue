<template>
  <div class="flex w-full min-h-screen flex-row py-4 px-4 space-x-3">
    <CoreSidebar />
    <div class="flex-1 flex flex-col">
      <CoreNavbar />
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
