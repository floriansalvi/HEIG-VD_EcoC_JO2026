<script setup>
import BaseLinkCard from '../Base/BaseLinkCard.vue';

const props = defineProps({
  title: {
    type: String,
    default: "Profitez des Jeux"
  }
})

const items = [
  { text: "Get tickets", url: "#", icon: { title: "lucide:ticket", size: 35 }, external: false },
  { text: "Book your stay", url: "#", icon: { title: "simple-icons:airbnb", size: 35 }, external: false },
  { text: "Hospitality", url: "#", icon: { title: "lucide:concierge-bell", size: 35 }, external: false },
  { text: "Olympic shop", url: "#", icon: { title: "lucide:shopping-bag", size: 35 }, external: false },
  { text: "Fan26", url: "#", icon: { title: "lucide:gamepad-2", size: 35 }, external: false },
  { text: "Membership", url: "#", icon: { title: "lucide:user", size: 35 }, external: false },
  { text: "Schedule", url: "#", icon: { title: "lucide:calendar", size: 35 }, external: false },
  { text: "Spectator info", url: "#", icon: { title: "lucide:info", size: 35 }, external: false }
]
</script>

<template>
  <section class="w-full max-w-[1362px] mx-auto px-4 md:px-0 flex flex-col gap-6">
    
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