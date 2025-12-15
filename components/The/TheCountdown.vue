<script setup>
import BaseImg from '../Base/BaseImg.vue';
const startDate = new Date("2026-02-06T23:30:00");
const currentTime = new Date();
const deltaTime = startDate - currentTime;
const days = Math.floor(deltaTime/(24*3600*1000))

</script>

<template>
  <div>
    <div>
        <h4>Jeux Olympiques d’hiver de Milan Cortina 2026</h4>
        <span>6 au 22 février</span>
    </div>
    <div>
        <p v-if="days > 0">Débute dans <span>{{ days }}</span> jour{{ days > 1 ? "s" : "" }}</p>
        <p v-else>Ça commence bientôt !</p>
        <BaseImg src="/images/omega.png" alt="Logo Omega" />
    </div>
  </div>
</template>

<style scoped>

</style>