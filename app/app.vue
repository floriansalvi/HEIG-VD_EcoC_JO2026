<script setup>
import HeaderView from '../views/HeaderView.vue';
import ContentView from '../views/ContentView.vue';
import ArticlesView from '../views/ArticlesView.vue';
import FAQView from '../views/FAQView.vue';
import cta from '../data/cta.json';
import BaseCTACard from '../components/Base/BaseCTACard.vue';
import banners from '../data/banners.json'
import BaseBanner from '../components/Base/BaseBanner.vue';
import BoutiqueView from '../views/BoutiqueView.vue';
import SportsView from '../views/SportsView.vue';
import FooterView from '../views/FooterView.vue';

</script>

<template>

  <div class="flex flex-col gap-12 md:gap-14 lg:gap-20">
    <HeaderView/>
    <ContentView/>
    <BaseCTACard
      :title="cta[0].title"
      :text="cta[0].text"
      :img="cta[0].img"
      :button="cta[0].button"
      :flipped="cta[0].flipped"
    />
    <BoutiqueView/>
    <SportsView/>
    <BaseBanner
      :title="banners[0].title"
      :img="banners[0].img"
      :button="banners[0].button"
    />
    <ArticlesView/>
    <BaseCTACard
      :title="cta[1].title"
      :text="cta[1].text"
      :img="cta[1].img"
      :button="cta[1].button"
      :flipped="cta[1].flipped"
    />
    <BaseBanner
      :title="banners[1].title"
      :img="banners[1].img"
      :button="banners[1].button"
      presented-by="/images/presented_by.png"
    />
    <BaseCTACard
      :title="cta[2].title"
      :text="cta[2].text"
      :img="cta[2].img"
      :button="cta[2].button"
      :flipped="cta[2].flipped"
    />
    <FAQView/>
    <FooterView/>
  </div>
</template>
