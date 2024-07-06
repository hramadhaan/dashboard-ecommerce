<script lang="ts" setup>
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

const colorMode = useColorMode();

const { data: session, status, signOut } = useAuth();

console.log("Session: ", {
  session: session.value?.user,
  status: status.value,
});

function toggleColorMode() {
  if (colorMode.value === "dark") {
    colorMode.preference = "light";
  } else {
    colorMode.preference = "dark";
  }

  console.log(colorMode.value);
  // console.log('Color Mode: ', colorMode)
}
</script>

<template>
  <header class="w-full py-4 bg-background">
    <nav class="flex flex-row items-center justify-between">
      <div class="relative w-full max-w-lg items-center">
        <Input id="search" type="text" placeholder="Search..." class="pl-10" />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <Icon
            name="lucide:search"
            class="size-6 text-muted-foreground text-black"
          />
        </span>
      </div>
      <div class="flex flex-row items-center gap-x-3">
        <Button variant="ghost">
          <Icon name="lucide:bell" class="size-4" />
        </Button>
        <Button variant="ghost" @click="toggleColorMode">
          <Icon name="lucide:moon" class="size-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="ghost">
              <Icon name="lucide:ellipsis" class="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Icon name="lucide:user" />
                <span class="ml-2">Profile</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Icon name="lucide:log-out" />
              <span class="ml-2">Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  </header>
</template>
