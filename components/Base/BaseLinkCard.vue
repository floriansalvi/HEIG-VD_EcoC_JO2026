<script setup>
import BaseIcon from './BaseIcon.vue';
import { useNavigation } from '../../composables/useNavigation';

const props = defineProps({
  text: {
    type: String,
    default: "Text"
  },
  url: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    default: null
  },
  external: {
    type: Boolean,
    default: false
  }
})

const { navigateTo } = useNavigation()

const handleClick = () => {
  if (props.external && props.url) {
    window.open(props.url, '_blank', 'noopener,noreferrer')
  } else {
    navigateTo(props.url)
  }
}
</script>

<template>
  <button 
    @click="handleClick()" 
    :class="[
      'w-full h-[96px] flex items-center gap-3',
      'px-6 py-4 md:px-8 md:py-6',
      'rounded-[16px] border-none cursor-pointer',
      
      'transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]',
      'shadow-sm hover:shadow-md',
      
      'bg-card-conic text-white'
    ]"
  >
    <div class="shrink-0 flex items-center justify-center">
        <BaseIcon 
            v-if="icon" 
            :title="icon.title" 
            :size="icon.size || 35" 
            color="white" 
        />
    </div>

    <span class="font-[Poppins] font-semibold text-[18px] md:text-[20px] text-left leading-tight">
        {{ text }}
    </span>
  </button>
</template>

<style scoped>
.bg-card-conic {
  background: 
    conic-gradient(from 90deg, rgba(1, 148, 130, 0.4) 0%, rgba(1, 100, 124, 0.4) 51%, rgba(1, 148, 130, 0.4) 100%),
    var(--color-blue);
}

.bg-card-conic:hover {
  background: 
    conic-gradient(from 90deg, rgba(1, 148, 130, 0.6) 0%, rgba(1, 100, 124, 0.6) 51%, rgba(1, 148, 130, 0.6) 100%),
    var(--color-blue);
}
</style>