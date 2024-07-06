<template>
  <div class="bg-background rounded-md p-4 flex flex-col items-start h-fit">
    <div class="flex flex-row items-center justify-between w-full">
      <div class="flex flex-row items-center gap-x-3">
        <div
          class="h-10 w-10 flex items-center rounded-full justify-center"
          :class="{
            'bg-green-100': statusType === 'up',
            'bg-red-100': statusType === 'down',
          }"
        >
          <Icon
            name="lucide:inbox"
            :class="{
              'text-green-700': statusType === 'up',
              'text-red-700': statusType === 'down',
            }"
          />
        </div>
        <div class="flex flex-col">
          <p class="font-medium">{{ typeName }}</p>
          <p class="font-light text-xs text-slate-400">{{ descriptionType }}</p>
        </div>
      </div>
      <Button @click="actionType" variant="ghost">
        <Icon
          name="lucide:ellipsis-vertical"
          :class="{
            'text-green-700': statusType === 'up',
            'text-red-700': statusType === 'down',
          }"
        />
      </Button>
    </div>
    <Separator class="w-full my-5" />
    <div class="flex w-full flex-row items-center justify-between">
      <p class="font-semibold text-lg">{{ value }}</p>
      <div class="flex flex-row items-center space-x-3">
        <div
          class="h-6 w-6 rounded-full flex items-center justify-center"
          :class="{
            'bg-green-100': statusType === 'up',
            'bg-red-100': statusType === 'down',
          }"
        >
          <Icon
            v-if="statusType === 'up'"
            name="lucide:trending-up"
            class="size-4 text-green-700"
          />
          <Icon
            v-else
            name="lucide:trending-down"
            class="size-4 text-red-700"
          />
        </div>
        <span
          class="text-sm font-medium"
          :class="{
            'text-green-700': statusType === 'up',
            'text-red-700': statusType === 'down',
          }"
          >{{ presentaseValue }}%</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  typeName: String;
  descriptionType: String;
  actionType: () => void;
  value: String;
  presentaseValue: Number;
  statusType: "up" | "down";
}

defineProps<Props>();
</script>
