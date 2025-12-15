<script setup>
import faqQuestions from '../data/faq.json'
import BaseFAQCard from '../components/Base/BaseFAQCard.vue';
</script>

<template>
  <div>
    <BaseFAQCard
        v-for="(faqQuestion, index) in faqQuestions"
        :key="index"
        :question="faqQuestion.question"
        :answer="faqQuestion.answer"
        :link="faqQuestion.link"
        :opened="false"
    />
  </div>
</template>

<style scoped>

</style>