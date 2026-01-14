<script setup>
import BaseImg from './BaseImg.vue';
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    img: {
        type: Object,
        default: () => ({ src: '', alt: '' }),
        validator: (img) => {
            return typeof img.src === 'string' && typeof img.alt === 'string'
        }
    },
    category: {
        type: String
    }
})

</script>

<template>
    <article class="">
        <NuxtLink :to="link" class="" :aria-label="`Lire l'article ${title}`">
            <BaseImg
                :src="img.src"
                :alt="img.alt"
                wrapperClass=""
                imgClass=""
            />
            <span v-if="category" class="">{{ category }}</span>
            <h3 class="">{{ title }}</h3>
        </NuxtLink>
    </article>
</template>

<style scoped>

</style>