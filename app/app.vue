<script setup>
import FAQView from '../views/FAQView.vue';
import HeaderView from '../views/HeaderView.vue';
import HeroView from '../views/HeroView.vue';
import ContentView from '../views/ContentView.vue';
</script>

<template>
  <div>
    <div class="flex justify-center items-center bg-gray-100">
    <h1 class="text-4xl font-bold text-blue-600 font-poppins">
      Tailwind fonctionne !
    </h1>
  </div>
    <HeaderView/>
    <HeroView/>
    <ContentView/>
    <FAQView/>
  </div>
</template>
