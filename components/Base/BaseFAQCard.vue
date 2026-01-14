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
<<<<<<< HEAD
  <article 
    class="w-full bg-white rounded-[12px] p-[19px] flex flex-col gap-[10px] shadow-sm transition-all duration-300"
  >
    <div 
        class="flex justify-between items-start gap-[25px] cursor-pointer group select-none"
        @click="changeOpenState"
    >
        <h4 class="font-[Poppins] font-semibold text-[22px] text-[var(--color-dark-blue)] flex-1 leading-tight">
            {{ question }}
        </h4>
        
        <div 
            class="shrink-0 transition-transform duration-300 flex items-center justify-center w-[24px] h-[24px]"
            :class="{ 'rotate-180': opened }"
        >
            <BaseIcon
                title="mdi:chevron-down"
                :size="30"
                color="var(--color-blue)"
                :ariaLabel="opened ? 'cacher la réponse' : 'afficher la réponse'"
            />
        </div>
    </div>

    <div v-show="opened" class="flex flex-col gap-4 text-[var(--color-dark-blue)] text-base font-[Poppins] pt-2">
        <p v-html="answer.replace(/\n\n/g, '<br>')" class="opacity-90 leading-relaxed"></p>
        
        <a 
            v-if="link.href" 
            :href="link.href" 
            target="_blank" 
            class="text-[var(--color-blue)] font-medium hover:underline inline-flex items-center gap-1 w-fit"
        >
            {{ link.txt }}
            <BaseIcon title="ph:arrow-right" :size="16" color="currentColor" />
        </a>
    </div>
  </article>
</template>