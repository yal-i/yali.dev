<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import ContactClient from "~/clients/contact";
import type { ContactProps } from "~/types";
import { z } from "zod";

const schema = z.object({
  name: z
    .string({
      required_error: "Adınızı giriniz",
    })
    .max(50, "Ad 50 karakterden uzun olamaz"),
  surname: z
    .string({
      required_error: "Soyadınızı giriniz",
    })
    .max(50, "Soyad 50 karakterden uzun olamaz"),
  email: z
    .string({
      required_error: "E-Posta adresinizi giriniz",
    })
    .email("Geçerli bir E-Posta adresi giriniz"),
  subject: z
    .string({
      required_error: "Konu giriniz",
    })
    .max(50, "Konu 50 karakterden uzun olamaz"),
  message: z
    .string({
      required_error: "Mesajınızı giriniz",
    })
    .max(500, "Mesaj 500 karakterden uzun olamaz"),
});

const state = reactive({
  name: undefined,
  surname: undefined,
  email: undefined,
  subject: undefined,
  message: undefined,
});

const client = new ContactClient();
const { add } = useToast();
const loading = ref(false);

async function onSubmit(event: FormSubmitEvent<ContactProps>) {
  loading.value = true;
  const status = await client.send(event.data);
  add({
    title: status === "error" ? "Bir hata oluştu!" : "Mesajınız gönderildi.",
  });
  loading.value = false;
  Object.assign(state, {
    name: undefined,
    surname: undefined,
    email: undefined,
    subject: undefined,
    message: undefined,
  });
}

const socials = [
  {
    name: "E-Posta",
    icon: "ic:baseline-email",
    value: "tangozyusufali@gmail.com",
    href: "mailto:tangozyusufali@gmail.com",
  },
  {
    name: "Instagram",
    icon: "ri:instagram-fill",
    value: "yusufalitangoz",
    href: "https://www.instagram.com/yusufalitangoz/",
  },
  {
    name: "Discord",
    icon: "ic:baseline-discord",
    value: "y.ali",
  },
];
</script>

<template>
  <h1 class="text-4xl font-bold text-center mt-16 mb-10">İletişim</h1>
  <UContainer class="grid md:grid-cols-2 gap-10" id="contact">
    <UCard :ui="{ background: '' }" v-motion-slide-visible-left>
      <UForm
        @submit="onSubmit"
        class="space-y-4"
        :schema="schema"
        :state="state"
      >
        <div class="flex gap-5">
          <UFormGroup label="Ad" name="name" class="w-1/2">
            <UInput v-model="state.name" size="md" placeholder="Adınız" />
          </UFormGroup>
          <UFormGroup label="Soyad" name="surname" class="w-1/2">
            <UInput v-model="state.surname" size="md" placeholder="Soyadınız" />
          </UFormGroup>
        </div>
        <div class="flex gap-5">
          <UFormGroup label="E-Posta" name="email" class="w-1/2">
            <UInput
              placeholder="ornek@mail.com"
              v-model="state.email"
              size="md"
            />
          </UFormGroup>
          <UFormGroup label="Konu" name="subject" class="w-1/2">
            <UInput v-model="state.subject" size="md" placeholder="Konu" />
          </UFormGroup>
        </div>
        <UFormGroup label="Mesaj" name="message">
          <UTextarea
            placeholder="Mesajınız"
            v-model="state.message"
            size="md"
          />
        </UFormGroup>
        <UButton
          :loading="loading"
          icon="fa:send"
          type="submit"
          color="black"
          size="md"
        >
          Mesaj Gönder
        </UButton>
      </UForm>
    </UCard>
    <div v-motion-slide-visible-right>
      <NuxtLink
        class="flex items-center gap-5 duration-500 transition-colors hover:bg-zinc-900 p-5 rounded-full"
        v-for="({ href, icon, name, value }, i) in socials"
        target="_blank"
        :key="i"
        :href
      >
        <UIcon
          class="bg-white text-black p-3 w-14 h-14 rounded-full"
          :name="icon"
        />
        <div>
          <h1 class="font-semibold text-lg">
            {{ name }}
          </h1>
          <span class="text-primary">
            {{ value }}
          </span>
        </div>
      </NuxtLink>
    </div>
  </UContainer>
</template>
