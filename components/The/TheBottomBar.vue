<script setup>
import BaseIcon from '../Base/BaseIcon.vue';

const props = defineProps({
    text: {
        type: Array,
        required: true,
        validator: (value) =>
            Array.isArray(value) && value.every(v => typeof v === 'string')
    },
    links: {
        type: Array,
        required: false,
        validator: (value) =>
            Array.isArray(value) && value.every(link =>
                link.txt && link.src && link.external
            )
    },
    wrapperClass: {
        type: String,
        default: ""
    },
    contentClass: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <div :class="wrapperClass">
        <div class="hidden md:flex flex-row items-center justify-between bg-[var(--color-dark-blue)] text-[var(--color-white)] text-sm font-[Poppins]d">
            <div class="flex items-center m-4 gap-4">
                <a v-for="(link, index) in links" :key="index" :href="link.src"
                    :target="link.external ? '_blank' : '_self'" :rel="link.external ? 'noopener noreferrer' : null"
                    class="flex items-center gap-2 hover:underline text-white">
                    <span>{{ link.txt }}</span>
                </a>
            </div>
            <div class="flex items-center">
                <span v-for="(txt, index) in text" :key="index" :class="['top-bar-txt', contentClass]">
                    {{ txt }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.top-bar-txt {
    padding: 0 10px;
    border-right: 2px solid currentColor;
}

.top-bar-txt:last-child {
    border-right: none;
}
</style>