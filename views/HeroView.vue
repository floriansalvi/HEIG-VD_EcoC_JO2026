<script setup>
import TheHeroSection from '../components/The/TheHeroSection.vue';
import heroElements from '../data/hero-content.json'
</script>

<template>
  <div>
    <TheHeroSection
        :elements="heroElements"
    />
    <!-- add Timer -->
  </div>
</template>

<style scoped>

</style>