<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        default: 24
    },
    color: {
        type: String,
        default: "currentColor"
    },
    ariaLabel: {
        type: String,
        default: ""
    },
    border: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <Icon
        :name="title"
        :size="size"
        :style="{ color }"
        :aria-label="ariaLabel || title"
        role="img"
        :class="border ? 'border' : ''"
    />
</template>

<style scoped>

.border {
    border-radius: 9999px;
    transition: color 0.3s;
    border: 1px solid white;
    padding: 4px;
}
</style>