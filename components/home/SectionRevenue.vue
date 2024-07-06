<template>
  <div class="grid grid-cols-3 gap-3">
    <RevenueCard
      description-type="Target: Rp. 10.000.000"
      type-name="Revenue"
      :action-type="() => {}"
      value="10.000.000"
      :presentase-value="50"
      status-type="up"
    />
    <RevenueCard
      description-type="Target: Rp. 10.000.000"
      type-name="Revenue"
      :action-type="() => {}"
      value="10.000.000"
      :presentase-value="50"
      status-type="down"
    />
    <RevenueCard
      description-type="Target: Rp. 10.000.000"
      type-name="Revenue"
      :action-type="() => {}"
      value="10.000.000"
      :presentase-value="50"
      status-type="down"
    />
    <!-- Revenue Report -->
    <div class="bg-background rounded-md p-4">
      <div class="flex flex-row items-center justify-between">
        <div class="flex flex-col items-start">
          <span class="font-medium">Revenue Report</span>
          <span class="font-light text-xs text-slate-400">in 2024</span>
        </div>
        <Select>
          <SelectTrigger class="w-24">
            <SelectValue placeholder="Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Range</SelectLabel>
              <SelectItem value="years">Years</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="weeks">Weeks</SelectItem>
              <SelectItem value="days">Days</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
    <!-- Transaction -->
    <div class="bg-background rounded-md p-4 col-span-2">
      <div class="flex flex-row items-center justify-between">
        <div class="flex flex-col items-start">
          <span class="font-medium">Revenue Report</span>
          <span class="font-light text-xs text-slate-400"
            >You have 75 transactions this month</span
          >
        </div>
        <div class="flex flex-row items-center space-x-4">
          <Select>
            <SelectTrigger class="w-24">
              <SelectValue placeholder="Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Range</SelectLabel>
                <SelectItem value="years">Years</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="weeks">Weeks</SelectItem>
                <SelectItem value="days">Days</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Dialog>
            <DialogTrigger as-child>
              <Button variant="outline"
                >Filter<Icon name="lucide:filter" class="ml-2"
              /></Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Filter</DialogTitle>
                <DialogDescription>Filter here</DialogDescription>
              </DialogHeader>
              <div class="grid gap-4 py-4">
                <div class="grid grid-cols-4 items-center gap-4">
                  <Label for="name" class="text-right"> Name </Label>
                  <Input id="name" value="Pedro Duarte" class="col-span-3" />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                  <Label for="username" class="text-right"> Username </Label>
                  <Input id="username" value="@peduarte" class="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit"> Save changes </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DialogTrigger from "../ui/dialog/DialogTrigger.vue";
import Label from "../ui/label/Label.vue";
import Select from "../ui/select/Select.vue";
import SelectContent from "../ui/select/SelectContent.vue";
import SelectGroup from "../ui/select/SelectGroup.vue";
import SelectItem from "../ui/select/SelectItem.vue";
import SelectLabel from "../ui/select/SelectLabel.vue";
import SelectTrigger from "../ui/select/SelectTrigger.vue";
import SelectValue from "../ui/select/SelectValue.vue";
import RevenueCard from "./RevenueCard.vue";
</script>
