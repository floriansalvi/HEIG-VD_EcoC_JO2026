<script setup>
import boutiqueLinks from '../data/boutiqueCards.json'
import BaseCard from '../components/Base/BaseCard.vue';
import BasePagination from '../components/Base/BasePagination.vue';
import { ref, computed, onMounted, onUnmounted } from 'vue';

const windowWidth = ref(1024)
const currentIndex = ref(0)

const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  windowWidth.value = window.innerWidth
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})

const ITEMS_PER_PAGE = computed(() => {
  if (windowWidth.value < 640) return 1
  if (windowWidth.value < 1024) return 2
  return 4
})

const currentElements = computed(() => {
  const start = currentIndex.value * ITEMS_PER_PAGE.value
  return boutiqueLinks.slice(start, start + ITEMS_PER_PAGE.value)
})

const maxIndex = computed(() =>
  Math.ceil(boutiqueLinks.length / ITEMS_PER_PAGE.value) - 1
)

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1
  }
}

const next = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value += 1
  }
}

const isPrevDisabled = computed(() => currentIndex.value === 0)
const isNextDisabled = computed(() => currentIndex.value === maxIndex.value)
</script>

<template>
  <section class="w-full max-w-[1362px] mx-auto px-4 md:px-0 flex flex-col gap-4">
     <h2 class="font-[Poppins] font-bold text-[28px] md:text-[32px] text-[var(--color-dark-blue)] pr-[10px]">
      La Boutique Olympique 
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full auto-rows-fr">
        <BaseCard
            v-for="(link, index) in currentElements"
            :key="index"
            :title="link.title"
            :button="link.button"
            :img="link.img"
            imgClass="w-full h-full object-cover object-top"
            preset="card"
        />
    </div>
    <BasePagination 
      v-if="maxIndex > 0"
      :currentIndex="currentIndex"
      :maxIndex="maxIndex"
      :isPrevDisabled="isPrevDisabled"
      :isNextDisabled="isNextDisabled"
      @prev="prev"
      @next="next"
    />
  </section>
</template>

<style scoped>

</style>