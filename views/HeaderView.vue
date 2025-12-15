<script setup>
import TheTopBar from '../components/The/TheTopBar.vue';

const topBarText = [
  "Jeux Olympiques d'hiver™ · Du 6 au 22 février 2026",
  "Jeux Paralympiques d'hiver™ · Du 6 au 15 mars 2026"
];
const topBarLinks = [
  {
    txt: "Billetterie",
    src: "https://tickets.milanocortina2026.org/en/?utm_medium=ioc_website&utm_source=olympics.com&utm_campaign=mico_gtweb",
    icon: { title: "tabler:ticket", size: 24, color: "inherit" },
    external: true
  },
  {
    txt: "Hospitalités",
    src: "https://olympics.com/fr/milano-cortina-2026-ticketing-and-hospitality",
    icon: { title: "fa6-solid:bell-concierge", size: 24, color: "inherit" },
    external: true
  },
  {
    txt: "Boutique",
    src: "https://shop.olympics.com/en/milano-cortina-2026/t-35589049+z-9774796-1238555770?_s=bm-fi-ioc-prtsite-IOC-MiCo26-topbutton-am",
    icon: { title: "tabler:shopping-bag", size: 24, color: "inherit" },
    external: true
  }
]
</script>

<template>
  <div>
    <TheTopBar
      :text="topBarText"
      :links="topBarLinks"
    />
    <!-- add Header (nav bar) -->
  </div>
</template>

<style scoped>

</style>