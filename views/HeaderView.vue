<script setup>
import TheTopBar from '../components/The/TheTopBar.vue';
import TheNavBar from '../components/The/TheNavBar.vue';
import headerData from '../data/header-content.json';
import TheCountdown from '../components/The/TheCountdown.vue';
import TheHeroSection from '../components/The/TheHeroSection.vue';
import heroElements from '../data/hero-content.json'
</script>

<template>
  <div class="flex flex-col w-full relative z-50 gap-8">
    
    <TheTopBar
      :text="headerData.topBarText"
      :links="headerData.topBarLinks"
    />
    
    <TheNavBar 
      :logo="headerData.logoConfig"
      :navigation="headerData.navItems"
    />
    <div class="flex flex-col md:gap-5">
    <TheHeroSection
        :elements="heroElements"
    />
    <TheCountdown/>
  </div>
  </div>
</template>