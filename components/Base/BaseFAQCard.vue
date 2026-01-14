<script setup>
import BaseIcon from './BaseIcon.vue';
import { ref } from 'vue';
const props = defineProps({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    link: {
        type: Object,
        default: () => ({ href: '', txt: '' }),
        validator: (link) => {
            return typeof link.href === 'string' && typeof link.txt === 'string'
        }
    },
})

const opened = ref(false)

const changeOpenState = () => {
    opened.value = !opened.value;
}
</script>

<template>
  <article>
        <h4>{{ question }}</h4>
        <div>
            <BaseIcon
                v-if="!opened"
                @click="changeOpenState"
                title="mdi:chevron-down"
                ariaLabel="afficher la réponse"
            />
            <BaseIcon
                v-else
                @click="changeOpenState"
                title="mdi:chevron-up"
                ariaLabel="cacher la réponse"
            />
        </div>
        <p v-show="opened" v-html="answer.replace(/\n\n/g, '<br>')"></p>
        <a v-if="link.href" v-show="opened" :href="link.href" target="_blank">{{ link.txt }}</a>
  </article>
</template>

<style scoped>

</style>