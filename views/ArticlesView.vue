<script setup>
import articles from '../data/articles.json'
import BaseArticleCard from '../components/Base/BaseArticleCard.vue';
</script>

<template>
  <section class="w-full max-w-[1362px] mx-auto px-5 pb-10">
     <h2 class="font-[Poppins] font-bold text-[28px] md:text-[32px] text-[var(--color-dark-blue)]">
      Dernières actualités
    </h2>
    <div class="flex flex-row gap-6 py-4">
    <BaseArticleCard
        v-for="(article, index) in articles"
        :title="article.title"
        :link="article.link"
        :category="article?.category"
        :img="article.img"
    /></div>
  </section>
</template>

<style scoped>

</style>