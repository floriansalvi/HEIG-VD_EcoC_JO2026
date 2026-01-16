<script setup>
import BaseImg from './BaseImg.vue';
import BaseButton from './BaseButton.vue';

const props = defineProps({
    title: {
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
        default: () => ({ text: '', url: '', inverted: true, icon: { title: 'arrow-right-circle', size: 30, color: 'inherit'} }),
        validator: (button) => {
            return (
                typeof button.text === 'string' &&
                typeof button.url === 'string'
            )
        }
    },
    presentedBy: {
        type: String,
        default: ''
    }
})

</script>

<template>
    <section class="w-full max-w-[1362px] mx-auto px-4 md:px-0 flex flex-col gap-6">
        <div class="relative rounded-[0.9375rem] overflow-hidden banner-background"
             :class="['h-[23rem] md:h-[16rem]', 'flex flex-col md:block']">
            
            <div class="absolute top-0 h-[12rem] md:h-full w-full md:w-[30.125rem] md:left-0 clip-diagonal-mobile clip-diagonal z-0">
                <BaseImg
                    :src="img.src"
                    :alt="img.alt"
                    wrapperClass="h-full w-full"
                    imgClass="h-full w-full object-cover"
                />
            </div>
            
            <div class="relative flex flex-col h-full z-10"
                 :class="[
                     'p-4 md:py-[0.75rem] md:pl-[1.0625rem] md:pr-[1.5625rem]',
                     'justify-end gap-6 md:gap-0 md:justify-between'
                 ]">
                
                <div v-if="presentedBy" 
                     class="flex items-center gap-[0.75rem] justify-start md:ml-[32rem]">
                    <p class="font-[Poppins] font-light text-[0.625rem] text-white m-0">
                        Presented by
                    </p>
                    <BaseImg
                        :src="presentedBy"
                        alt="sponsors"
                        wrapperClass="h-[1.3125rem] w-[7.125rem]"
                        imgClass="h-full w-full object-cover"
                    />
                </div>
                
                <div class="flex flex-col gap-4 md:gap-6 items-start md:flex-1 md:justify-center md:ml-[32rem]">
                    <h3 class="font-[Poppins] font-semibold leading-[1.2] text-white m-0"
                        :class="['text-[1.4rem] md:text-[2rem]', 'md:max-w-[42rem] md:whitespace-pre-wrap']">
                        {{ title }}
                    </h3>
                    <BaseButton
                        :text="button.text"
                        :url="button.url"
                        :inverted="true"
                        :icon="button.icon"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.banner-background {
    background: conic-gradient(from 90deg, rgba(1, 148, 130, 0.4) 0%, rgba(1, 100, 124, 0.4) 51%, rgba(1, 148, 130, 0.4) 100%),
                var(--color-blue);
}

.clip-diagonal-mobile {
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
}

@media (min-width: 768px) {
    .clip-diagonal-mobile {
        clip-path: none;
    }
    
    .clip-diagonal {
        clip-path: polygon(0 0, 100% 0, 65% 100%, 0 100%);
    }
}
</style>