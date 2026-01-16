<script setup>
import { ref, computed } from 'vue';
import BaseImg from '../Base/BaseImg.vue';
import BaseButton from '../Base/BaseButton.vue';
import BaseIcon from '../Base/BaseIcon.vue';

const props = defineProps({
    elements: {
        type: Array,
        required: true,
        validator: (value) =>
            Array.isArray(value) && value.every(el => 
                el.txt && el.img && el.button && typeof el.img === 'object' && typeof el.button === 'object'
            )
    }
})

const currentIndex = ref(0);
const currentElement = computed(() => props.elements[currentIndex.value]);

const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + props.elements.length) % props.elements.length;
}

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % props.elements.length;
}
</script>

<template>
    <div class="w-full max-w-[1362px] mx-auto px-4 md:px-0 mb-8 relative group">
    <div class="relative w-full max-w-[1362px] mx-auto h-[300px] md:h-auto md:aspect-[2/1] rounded-[15px] overflow-hidden shadow-md group bg-gray-900">
        
        <transition
            enter-active-class="transition duration-700 ease-in-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-700 ease-in-out"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div :key="currentIndex" class="absolute inset-0 w-full h-full">
                 <BaseImg
                    :src="currentElement.img.src"
                    :alt="currentElement.img.alt"
                    wrapperClass="absolute inset-0 w-full h-full z-0"
                    imgClass="object-cover w-full h-full"
                />
            </div>
        </transition>

        <div class="absolute inset-0 z-10 bg-gradient-to-t from-[var(--color-dark-blue)] via-transparent to-transparent opacity-80 pointer-events-none" />

        <div class="absolute inset-0 z-20 flex flex-col justify-end items-start p-4 md:p-8 lg:p-12 pb-[40px] md:pb-[40px] lg:pb-[50px]">
            
            <div class="w-full max-w-full md:max-w-[85%] mb-3 md:mb-5 ">
                <p class="font-[Poppins] font-semibold text-white whitespace-pre-wrap drop-shadow-lg
                          text-[18px] leading-[24px]
                          md:text-[30px] md:leading-[38px]
                          lg:text-[42px] lg:leading-[52px]">
                    {{ currentElement.txt }}
                </p>
            </div>

            <div>
                <BaseButton
                    :text="currentElement.button.text"
                    :url="currentElement.button.url"
                    :inverted="true" 
                    :icon="currentElement.button.icon"
                    class="transform scale-90 md:scale-100 origin-left" 
                />
            </div>
        </div>

        <template v-if="elements.length > 1">
            <button
                @click="prev"
                class="absolute left-2 md:left-5 top-[40%] md:top-1/2 z-30 -translate-y-1/2 bg-white/80 md:bg-white/90 backdrop-blur-sm rounded-full p-1.5 md:p-2 shadow-sm hover:bg-[var(--color-light-green)] transition-all duration-300 hover:scale-110 group-hover:opacity-100 md:opacity-0 opacity-100"
                aria-label="Précédent"
            >
                <BaseIcon title="ph:arrow-left" :size="18" class="md:hidden" color="var(--color-blue)" />
                <BaseIcon title="ph:arrow-left" :size="24" class="hidden md:block" color="var(--color-blue)" />
            </button>
            
            <button
                @click="next"
                class="absolute right-2 md:right-5 top-[40%] md:top-1/2 z-30 -translate-y-1/2 bg-white/80 md:bg-white/90 backdrop-blur-sm rounded-full p-1.5 md:p-2 shadow-sm hover:bg-[var(--color-light-green)] transition-all duration-300 hover:scale-110 group-hover:opacity-100 md:opacity-0 opacity-100"
                aria-label="Suivant"
            >
                <BaseIcon title="ph:arrow-right" :size="18" class="md:hidden" color="var(--color-blue)" />
                <BaseIcon title="ph:arrow-right" :size="24" class="hidden md:block" color="var(--color-blue)" />
            </button>
        </template>
    </div>
    </div>
</template>

<style scoped>
.group:hover button {
    opacity: 1;
}
</style>