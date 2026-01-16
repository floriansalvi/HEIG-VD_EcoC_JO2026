<script setup>
import BaseIcon from '../Base/BaseIcon.vue';
import { useNavigation } from '../../composables/useNavigation';

const props = defineProps({
    text: { type: String, default: "" },
    url: { type: String, default: "" },
    inverted: { type: Boolean, default: false },
    icon: { type: Object, default: null }
})

const { navigateTo } = useNavigation()

const handleClick = () => {
    navigateTo(props.url)
}
</script>

<template>
  <div>
    <button 
        @click="handleClick()" 
        :class="[
            'inline-flex justify-center items-center gap-3',
            'py-[6px] md:py-[12px] pl-5',
            icon ? 'pr-2.5' : 'pr-5',
            'rounded-full border-none cursor-pointer',
            
            'font-[Poppins] font-normal',
            'text-[1rem] md:text-[1.125rem]',
            'transition-all duration-200 ease-out',

            inverted 
                ? 'bg-white text-[var(--color-blue)] hover:bg-[var(--color-light-green)]' 
                : 'text-white bg-custom-gradient'
        ]"
    >
        <span>{{ text }}</span>
        <BaseIcon v-if="icon" v-bind="icon"/>
    </button>
  </div>
</template>

<style scoped>
.bg-custom-gradient {
  background: linear-gradient(270deg, var(--color-green-50) 0%, var(--color-blue-50) 25%), var(--color-blue);
}

.bg-custom-gradient:hover {
  background: linear-gradient(270deg, var(--color-green-70) 0%, var(--color-blue-70) 25%), var(--color-blue);
}
</style>