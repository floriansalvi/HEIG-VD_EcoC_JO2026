<script setup>
import articles from '../data/articles.json'
import BaseArticleCard from '../components/Base/BaseArticleCard.vue';
</script>

<template>
  <section>
    <h2>Dernières actualités</h2>
    <BaseArticleCard
        v-for="(article, index) in articles"
        :title="article.title"
        :link="article.link"
        :category="article?.category"
        :img="article.img"
    />
  </section>
</template>

<style scoped>

</style>