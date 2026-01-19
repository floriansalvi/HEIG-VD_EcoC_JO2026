<script setup>
import BaseImg from '../Base/BaseImg.vue';
import BaseButton from '../Base/BaseButton.vue';
</script>

<template>
    <div class="w-full max-w-[1362px] mx-auto px-4 md:px-0 mb-8 relative group">
        <div class="relative w-full max-w-[1362px] mx-auto h-[300px] md:h-auto rounded-[15px] overflow-hidden shadow-md group bg-gray-900">
            <BaseImg
                src="/images/map.jpeg"
                alt="map"
                wrapperClass="inset-0 w-full h-full z-0 overflow-hidden wrapper"
                imgClass="object-cover w-full h-full"
                preset=""
            />
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    background-color: #00313D;
}
</style>