<script setup>
import BaseImg from './BaseImg.vue';
import BaseButton from './BaseButton.vue';
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    button: {
        type: Object,
        default: () => ({ text: '', url: '', inverted: false, icon: { title: 'arrow-right-circle', size: 30, color: 'inherit'} }),
        validator: (button) => {
            return (
                typeof button.text === 'string' &&
                typeof button.url === 'string' &&
                typeof button.inverted === 'boolean' &&
                typeof button.icon.title === 'string' &&
                typeof button.icon.size === 'number' &&
                typeof button.icon.color === 'string'
            )
        }
    },
    img: {
        type: Object,
        default: () => ({ src: '', alt: '' }),
        validator: (img) => {
            return typeof img.src === 'string' && typeof img.alt === 'string'
        }
    },
    imgClass: {
        type: String,
        default: 'w-full h-full object-contain'
    },
    preset: {
        type: String,
        default: undefined
    }
})

</script>

<template>
    <article class="flex flex-col items-start w-full max-w-sm h-full">
        <BaseImg
            :src="img.src"
            :alt="img.alt"
            wrapperClass="aspect-video w-full rounded-t-2xl overflow-hidden bg-gradient-card"
            :imgClass="imgClass"
            :preset="preset"
        />
        <div class="bg-white flex flex-col items-end p-5 rounded-b-2xl w-full flex-1">
            <h3 class="text-2xl font-semibold text-black break-words w-full line-clamp-2 min-h-[3.5rem]">
                {{ title }}
            </h3>
            <BaseButton
                :text="button.text"
                :url="button.url"
                :inverted="button.inverted"
                :icon="button.icon"
            />
        </div>  
    </article>
</template>

<style scoped>
:deep(.bg-gradient-card) {
    background: linear-gradient(135deg, #01647C 0%, #019482 75%, #009EB0 85%, #01647C 100%);
}
</style>