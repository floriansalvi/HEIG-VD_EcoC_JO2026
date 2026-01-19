<script setup>
import { ref } from 'vue';
import BaseIcon from '../Base/BaseIcon.vue';
import { useNavigation } from '../../composables/useNavigation';

const { navigateTo } = useNavigation();

const props = defineProps({
    navigation: {
        type: Array,
        default: () => []
    },
    socials: {
        type: Array,
        default: () => []
    }
});

const handleNavClick = (url) => {
    isMobileMenuOpen.value = false;
    navigateTo(url);
};
</script>

<template>
    <div class="w-full px-4 md:px-0 mx-auto max-w-[1362px] relative z-40">
        
        <nav class="bg-[var(--color-white)] text-white rounded-full shadow-md px-6 py-3 md:px-8 flex items-center justify-between relative min-h-[70px]">

            <div class="hidden xl:flex items-center gap-10">
                <ul class="flex items-center gap-8">
                    <li v-for="(item, index) in navigation" :key="index">
                        <a 
                            :href="item.url"
                            @click.prevent="handleNavClick(item.url)"
                            class="font-[Poppins] font-medium text-[16px] text-[var(--color-blue)] hover:text-[var(--color-blue)] transition-colors relative group py-2"
                        >
                            {{ item.label }}
                            <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--color-blue)] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="flex items-center gap-5 md:gap-8">
                <NuxtLink
                    v-for="(social, index) in socials"
                    :key="index"
                    :to="social.url"
                    class="text-[var(--color-blue)] hover:text-[var(--color-blue)]"
                >
                    <BaseIcon :title="social.icon" size="32" />
                </NuxtLink>
            </div>
        </nav>
    </div>
</template>