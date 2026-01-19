<script setup>
const props = defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    wrapperClass: {
        type: String,
        default: ""
    },
    imgClass: {
        type: String,
        default: ""
    },
    copyright: {
        type: String,
        default: ""
    }
});
</script>

<template>
  <div class="" :class="wrapperClass">
    <NuxtImg
        v-if="typeof src === 'string' && src.length > 0"
        :src="src"
        :alt="alt"
        :class="imgClass"/>
        format="webp"
        lazy
        placeholder="blur"
    <div v-if="copyright" class="">{{ copyright }}</div>
  </div>
</template>

<style scoped>
.truncated-border {
    width: 50%;
    height: 100%;
    overflow: hidden;
    clip-path: polygon(
        0 0,
        85% 0,
        100% 100%,
        0 100%
    );

}

.truncated-border img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

    