<script setup>
import TheBottomBar from '../components/The/TheBottomBar.vue';
import TheBottomNavBar from '../components/The/TheBottomNavBar.vue';
import footerData from '../data/footer-content.json';
import TheFooter from '../components/The/TheFooter.vue';
</script>

<template>
  <div class="flex flex-col w-full relative z-50 gap-8">
    <TheBottomNavBar 
      :navigation="footerData.navItems"
      :socials="footerData.socials"
    />
    <TheFooter/>
    <div class="flex flex-col md:gap-5">
    <TheBottomBar
      :text="footerData.bottomBar"
      :links="footerData.bottomBarLinks"
    />
    </div>
  </div>
</template>