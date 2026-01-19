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
    }
})

</script>

<template>
    <article class="flex flex-col items-start w-full">
        <BaseImg
            :src="img.src"
            :alt="img.alt"
            wrapperClass="h-[200px] md:h-[250px] w-full rounded-[15px] overflow-hidden"
            imgClass="w-full h-full object-cover"
        />
        <div>
            <h3 class="text-[18px] md:text-[20px] font-semibold text-black break-words w-full">
                {{ title }}
            </h3>
            <BaseButton
                :text="button.text"
                :url="button.url"
                :inverted="button.inverted"
                :icon="button.icon"
                class="mt-4"
            />
        </div>  
    </article>
</template>

<style scoped>

</style>