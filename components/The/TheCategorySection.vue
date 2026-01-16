<script setup>
import BaseLinkCard from '../Base/BaseLinkCard.vue';
import items from '../data/categories.json';

const props = defineProps({
  title: {
    type: String,
    default: "Profitez des Jeux"
  }
})
</script>

<template>
  <section class="w-full max-w-[1362px] mx-auto px-1 md:px-0 flex flex-col gap-6">
    
    <h2 class="font-[Poppins] font-bold text-[28px] md:text-[32px] text-[var(--color-dark-blue)]">
      {{ title }}
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[23px] w-full">
      <BaseLinkCard
        v-for="(item, index) in items"
        :key="index"
        :text="item.text"
        :url="item.url"
        :icon="item.icon"
        :external="item.external"
      />
    </div>
  </section>
</template>