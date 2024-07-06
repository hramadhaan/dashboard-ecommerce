<template>
  <div
    class="flex w-full min-h-screen items-center justify-center bg-background"
  >
    <div
      class="w-4/12 p-4 border rounded-md bg-background drop-shadow-md flex flex-col items-start"
    >
      <div
        class="h-8 w-8 rounded-lg flex items-center justify-center bg-primary"
      >
        <Icon class="text-white dark:text-black" name="lucide:trending-up" />
      </div>
      <p class="font-work-sans font-semibold text-xl mt-5">Welcome Back</p>
      <p class="text-sm font-light">Please enter your details below !</p>
      <form
        class="flex flex-col items-start w-full space-y-4 mt-5"
        @submit="onSubmit"
      >
        <FormField v-slot="{ componentField }" name="email" class="w-full">
          <FormItem class="w-full">
            <FormControl>
              <Input
                type="email"
                placeholder="Email"
                class="w-full"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password" class="w-full">
          <FormItem class="w-full">
            <FormControl>
              <Input
                type="password"
                placeholder="Password"
                class="w-full"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button class="w-full" type="submit">Login</Button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as z from "zod";
import { FormField } from "~/components/ui/form";
import FormControl from "~/components/ui/form/FormControl.vue";
import FormItem from "~/components/ui/form/FormItem.vue";
import FormMessage from "~/components/ui/form/FormMessage.vue";
definePageMeta({
  layout: "no-authentication",
  auth: {
    navigateAuthenticatedTo: "/",
  },
});
const { status, signIn } = useAuth();

const validationZod = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(5, "Password must be at least 5 characters"),
});

const formSchema = toTypedSchema(validationZod);

const form = useForm({ validationSchema: formSchema });

const onSubmit = form.handleSubmit(async (values) => {
  // console.log("Values: ", values);
  await signIn("credentials", {
    email: values.email,
    password: values.password,
    callbackUrl: "/",
  });
});

console.log("Session: ", { status: status.value });
</script>

<style></style>
