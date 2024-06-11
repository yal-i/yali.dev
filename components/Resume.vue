<script setup lang="ts">
const education = [
  {
    Okul: "Sultangazi Mesleki ve Teknik Anadolu Lisesi",
    "Başlangıç Yılı": "2018",
    "Bitiş Yılı": "2021",
    Durum: "Tamamlandı",
  },
  {
    Okul: "Karabük Üniversitesi",
    "Başlangıç Yılı": "2021",
    "Bitiş Yılı": "2022",
    Durum: "İstanbul Gelişim Üniversitesi'ne Geçiş Yapıldı",
  },
  {
    Okul: "İstanbul Gelişim Üniversitesi",
    "Başlangıç Yılı": "2022",
    "Bitiş Yılı": "2023",
    Durum: "Donduruldu",
  },
];

const experience = [
  {
    Şirket: "Exagate",
    Pozisyon: "Stajyer",
    "Başlangıç Yılı": "2022",
    "Bitiş Yılı": "2022",
  },
  {
    Şirket: "Hayying Danışmanlık",
    Pozisyon: "Software Developer",
    "Başlangıç Yılı": "2024",
    "Bitiş Yılı": "2024",
  },
];

const tableClass = "rounded-2xl ring-1 ring-gray-300 bg-white";
</script>

<template>
  <div class="mt-16 bg-gray-100 py-16" id="resume">
    <h1 class="text-4xl font-bold text-center mb-10">Özgeçmişim</h1>
    <UContainer class="grid xl:grid-cols-2 gap-10">
      <UTable :rows="education" :class="tableClass" />
      <UTable :rows="experience" :class="tableClass" />
    </UContainer>
  </div>
</template>
