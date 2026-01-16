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
    <article class="flex flex-col items-start w-[397px]">
        <NuxtLink :to="link" class="w-full" :aria-label="`Lire l'article ${title}`">
            <BaseImg
                :src="img.src"
                :alt="img.alt"
                wrapperClass="h-[250px] w-full rounded-[15px] overflow-hidden"
                imgClass="w-full h-full object-cover"
            />
            <div class="flex flex-col gap-[4px] items-start justify-center pt-[10px] pb-[10px] pr-[10px] w-full">
                <span v-if="category" class="inline-flex items-center justify-center px-[5px] bg-[var(--color-light-green)] rounded-[50px] text-[var(--color-blue)] text-[14px] font-semibold">
                    {{ category }}
                </span>
                <h3 class="text-[20px] font-semibold text-black break-words w-full">
                    {{ title }}
                </h3>
            </div>
        </NuxtLink>
    </article>
</template>

<style scoped>

</style>