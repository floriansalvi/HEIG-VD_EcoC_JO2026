<script setup>
import BaseImg from './BaseImg.vue';
import BaseButton from './BaseButton.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    img: {
        type: Object,
        default: () => ({ src: '', alt: '' }),
        validator: (img) => {
            return typeof img.src === 'string' && typeof img.alt === 'string'
        }
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
    flipped: {
        type: Boolean,
    }
})

</script>

<template>
    <section class="w-full max-w-[1362px] mx-auto px-4 md:px-0 flex flex-col md:flex-row gap-6 md:gap-[5rem] items-start" 
             :class="{ 'md:flex-row-reverse': flipped }">
        <div class="flex-shrink-0 w-full md:w-[35.6875rem] h-[15rem] md:h-[20.5346rem]">
            <BaseImg
                :src="img.src"
                :alt="img.alt"
                wrapperClass="w-full h-full rounded-[0.9375rem] overflow-hidden"
                imgClass="w-full h-full object-cover rounded-[0.9375rem]"
            />
        </div>
        <div class="flex flex-col gap-6 md:gap-[2.1875rem] items-start flex-shrink-0 w-full md:w-[36.25rem]">
            <div class="flex flex-col items-start w-full">
                <h2 class="font-[Poppins] font-semibold text-[1.75rem] md:text-[2.2rem] leading-normal text-[var(--color-dark-blue)] m-0 md:py-[0.625rem] md:pr-[0.625rem]">
                    {{ title }}
                </h2>
                <p class="font-[Poppins] font-normal text-[1.125rem] md:text-[1.5rem] leading-normal text-black m-0 whitespace-pre-wrap">
                    {{ text }}
                </p>
            </div>
            <BaseButton
                :text="button.text"
                :url="button.url"
                :inverted="button.inverted"
                :icon="button.icon"
            />
        </div>
    </section>
</template>