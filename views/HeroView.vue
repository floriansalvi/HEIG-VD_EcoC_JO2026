<script setup>
import TheCountdown from '../components/The/TheCountdown.vue';
import TheHeroSection from '../components/The/TheHeroSection.vue';
import heroElements from '../data/hero-content.json'
</script>

<template>
  <div>
    <TheHeroSection
        :elements="heroElements"
    />
    <TheCountdown/>
  </div>
</template>

<style scoped>

</style>