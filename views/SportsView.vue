<script setup>
import sportsCards from '../data/sportsCards.json'
import BaseCard from '../components/Base/BaseCard.vue';
import BaseIcon from '../components/Base/BaseIcon.vue';
import { ref, computed } from 'vue';

const ITEMS_PER_PAGE = 4
const currentIndex = ref(0)

const currentElements = computed(() => {
  const start = currentIndex.value * ITEMS_PER_PAGE
  return sportsCards.slice(start, start + ITEMS_PER_PAGE)
})

const maxIndex = computed(() =>
  Math.ceil(sportsCards.length / ITEMS_PER_PAGE) - 1
)

const prev = () => {
  currentIndex.value =
    currentIndex.value > 0 ? currentIndex.value - 1 : maxIndex.value
}

const next = () => {
  currentIndex.value =
    currentIndex.value < maxIndex.value ? currentIndex.value + 1 : 0
}
</script>

<template>
  <section class="w-full max-w-[1362px] mx-auto px-4 md:px-0 flex flex-col gap-6">
     <h2 class="font-[Poppins] font-bold text-[28px] md:text-[32px] text-[var(--color-dark-blue)]">
      Sports  
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
        <BaseCard
            v-for="(card, index) in currentElements"
            :key="index"
            :title="card.title"
            :button="card.button"
            :img="card.img"
        />
    </div>
    <div>
          <button
                @click="prev"
                class=""
                aria-label="Précédent"
            >
                <BaseIcon title="ph:arrow-left" :size="18" class="md:hidden" color="var(--color-blue)" />
                <BaseIcon title="ph:arrow-left" :size="24" class="hidden md:block" color="var(--color-blue)" />
            </button>
            <span>{{ currentIndex + 1 }} / {{ maxIndex + 1 }}</span>
            <button
                @click="next"
                class=""
                aria-label="Suivant"
            >
                <BaseIcon title="ph:arrow-right" :size="18" class="md:hidden" color="var(--color-blue)" />
                <BaseIcon title="ph:arrow-right" :size="24" class="hidden md:block" color="var(--color-blue)" />
            </button>
        </div>
  </section>
</template>

<style scoped>

</style>