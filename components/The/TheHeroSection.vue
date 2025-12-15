<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
    elements: {
        type: Array,
        required: true,
        validator: (value) =>
            Array.isArray(value) && value.every(el => 
                el.txt && el.img && el.button && typeof el.img && typeof el.icon === 'object'
            )
    }
})

const currentIndex = ref(0);
const currentElement = computed(() => props.elements[currentIndex.value]);

const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + props.elements.length) % props.elements.length;
}

const next = () => {
    currentIndex.value P 
}

</script>

<template>
  <div>
    
  </div>
</template>