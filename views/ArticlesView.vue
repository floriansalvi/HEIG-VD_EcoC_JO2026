<script setup>
import articles from '../data/articles.json'
import BaseArticleCard from '../components/Base/BaseArticleCard.vue';
</script>

<template>
  <section class="w-full max-w-[1362px] mx-auto px-4 md:px-0 flex flex-col gap-6">
     <h2 class="font-[Poppins] font-bold text-[28px] md:text-[32px] text-[var(--color-dark-blue)]">
      Dernières actualités
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
    <BaseArticleCard
        v-for="(article, index) in articles"
        :key="index"
        :title="article.title"
        :link="article.link"
        :category="article?.category"
        :img="article.img"
    /></div>
  </section>
</template>

<style scoped>

</style>