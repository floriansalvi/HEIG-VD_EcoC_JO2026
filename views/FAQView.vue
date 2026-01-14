<script setup>
import faqQuestions from '../data/faq.json'
import BaseFAQCard from '../components/Base/BaseFAQCard.vue';
import BaseButton from '../components/Base/BaseButton.vue';
import { ref, computed } from 'vue';

const selectedCategory = ref(null)

const categories = computed(() => {
  return [
    ...new Set(
      faqQuestions
        .map(q => q.category)
        .filter(Boolean)
    )
  ]
})

const filteredFaqQuestions = computed(() => {
  if (!selectedCategory.value) {
    return faqQuestions
  }

  return faqQuestions.filter(
    q => q.category === selectedCategory.value
  )
})

</script>

<template>
  <section>
    <div>
      <h2>Questions réccurentes</h2>
      <div class="">
        <BaseButton
          text="Toutes les catégories"
          :inverted="selectedCategory === null ? false : true"
          :aria-pressed="selectedCategory === null"
          @click="selectedCategory = null"
        />

        <BaseButton
          v-for="category in categories"
          :text="category"
          :inverted="selectedCategory === category ? false : true"
          :aria-pressed="selectedCategory === category"
          @click="selectedCategory = category"
        />
      </div>
    </div>
    <div>
      <BaseFAQCard
        v-for="(faqQuestion, index) in filteredFaqQuestions"
        :key="index"
        :question="faqQuestion.question"
        :answer="faqQuestion.answer"
        :link="faqQuestion.link"
        :opened="false"
      />
    </div>
  </section>
</template>

<style scoped>

</style>