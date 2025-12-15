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
                el.txt && el.img && el.button && typeof el.img ==='object' && typeof el.icon === 'object'
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
  <div class="carousel">
    <button v-if="elements.length > 1" @click="prev">
        <BaseIcon
            title="ph:arrow-left"
            size=24
            color="inherit"
        />
    </button>
    <div class="carousel-item">
        <h2>{{ currentElement.txt }}</h2>
        <BaseButton :text="currentElement.button.text" :url="currentElement.button.url" :inverted="currentElement.button.inverted" :icon="currentElement.button.icon"/>
        <BaseImg :src="currentElement.img.src" :alt="currentElement.img.alt" />

    </div>
    <button v-if="elements.length > 1" @click="next">
        <BaseIcon
            title="ph:arrow-right"
            size=24
            color="inherit"
        />
    </button>
  </div>
</template>