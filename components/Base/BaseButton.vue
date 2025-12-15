<script setup>
import BaseIcon from '../Base/BaseIcon.vue';
import { useNavigation } from '../../composables/useNavigation';

const props = defineProps({
    text: {
        type: String,
        default: ""
    },
    url: {
        type: String,
        default: ""
    },
    inverted: {
        type: Boolean,
        default: false
    },
    icon: {
        type: Object,
        default: null
    }
})

const { navigateTo } = useNavigation()

const handleClick = () => {
    navigateTo(props.url)
}
</script>

<template>
  <div>
    <button @click="handleClick()" :class="['btn', { inverted }]">
        <span>{{ text }}</span>
        <BaseIcon v-if="icon" v-bind="icon"/>
    </button>
  </div>
</template>

<style scoped>
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 13px 10px 13px 20px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  
  /* Dégradé de base */
  background: linear-gradient(270deg, var(--color-green-50) 0%, var(--color-blue-50) 25%), var(--color-blue);
  
  /* Texte */
  color: var(--color-white);
  font-family: var(--font-primary);
  font-size: 18px;
  font-weight: 400;
  
  transition: all 0.2s ease;
}

.btn:hover {
  background: linear-gradient(270deg, var(--color-green-70) 0%, var(--color-blue-70) 25%), var(--color-blue);
}

/* Version inversée (light) */
.btn.inverted {
  background: var(--color-white);
  color: var(--color-blue);
}

.btn.inverted:hover {
  background: var(--color-light-green);
}
</style>