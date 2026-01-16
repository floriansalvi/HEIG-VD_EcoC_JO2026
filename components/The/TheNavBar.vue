<script setup>
import { ref } from 'vue';
import BaseIcon from '../Base/BaseIcon.vue';
import { useNavigation } from '../../composables/useNavigation';

const { navigateTo } = useNavigation();

const props = defineProps({
    logo: {
        type: Object,
        required: true
    },
    navigation: {
        type: Array,
        default: () => []
    },
    showSearch: {
        type: Boolean,
        default: true
    }
});

const isMobileMenuOpen = ref(false);

const toggleMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleNavClick = (url) => {
    isMobileMenuOpen.value = false;
    navigateTo(url);
};
</script>

<template>
    <div class="w-full px-4 md:px-0 mx-auto max-w-[1362px] relative z-40">
        
        <nav class="bg-[var(--color-blue)] text-white rounded-full shadow-md px-6 py-3 md:px-8 flex items-center justify-between relative min-h-[70px]">
            
            <a 
                :href="logo.url || '/'" 
                @click.prevent="handleNavClick(logo.url || '/')"
                class="shrink-0 flex items-center"
            >
                <img :src="logo.src" :alt="logo.alt" class="h-[40px] md:h-[50px] w-auto object-contain brightness-0 invert" /> 
                </a>

            <div class="hidden xl:flex items-center gap-10">
                <ul class="flex items-center gap-8">
                    <li v-for="(item, index) in navigation" :key="index">
                        <a 
                            :href="item.url"
                            @click.prevent="handleNavClick(item.url)"
                            class="font-[Poppins] font-medium text-[16px] text-white hover:text-[var(--color-light-green)] transition-colors relative group py-2"
                        >
                            {{ item.label }}
                            <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="flex items-center gap-5 md:gap-8">
                
                <button 
                    v-if="showSearch"
                    class="p-2 rounded-full hover:bg-white/10 text-white hover:text-[var(--color-light-green)] transition-colors"
                    aria-label="Rechercher"
                >
                    <BaseIcon title="lucide:search" :size="24" color="currentColor" />
                </button>

                <button class="hidden lg:flex items-center gap-1 font-[Poppins] font-medium text-[16px] text-white hover:text-[var(--color-light-green)] transition-colors">
                    <span>FR</span>
                    <BaseIcon title="lucide:chevron-down" :size="16" color="currentColor" />
                </button>

                <a 
                    href="#" 
                    class="hidden lg:block font-[Poppins] font-medium text-[16px] text-white hover:text-[var(--color-light-green)] transition-colors whitespace-nowrap"
                >
                    S'inscrire
                </a>

                <button 
                    @click="toggleMenu"
                    class="flex items-center gap-3 pl-2 transition-colors group"
                    aria-label="Menu"
                >
                    <div class="p-2 bg-white rounded-full text-[var(--color-blue)] group-hover:bg-[var(--color-light-green)] transition-all duration-300 flex items-center justify-center shadow-sm">
                        <BaseIcon :title="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'" :size="20" color="currentColor" />
                    </div>
                </button>
            </div>

            <div 
                v-if="isMobileMenuOpen" 
                class="absolute top-[calc(100%+12px)] left-0 w-full bg-[var(--color-blue)] rounded-[20px] shadow-xl border border-white/10 py-4 px-2 flex flex-col gap-1 z-50 xl:hidden overflow-hidden"
            >
                <a 
                    v-for="(item, index) in navigation" 
                    :key="index"
                    :href="item.url"
                    @click.prevent="handleNavClick(item.url)"
                    class="block px-6 py-3 font-[Poppins] font-medium text-[16px] text-white hover:bg-[var(--color-light-green)] hover:text-[var(--color-dark-blue)] rounded-lg transition-colors"
                >
                    {{ item.label }}
                </a>

                <div class="border-t border-white/20 my-2 mx-4"></div>

                <a href="#" class="block px-6 py-3 font-[Poppins] font-medium text-[16px] text-white hover:bg-[var(--color-light-green)] hover:text-[var(--color-dark-blue)] rounded-lg">
                    S'inscrire
                </a>
                <button class="w-full text-left px-6 py-3 font-[Poppins] font-medium text-[16px] text-white hover:bg-[var(--color-light-green)] hover:text-[var(--color-dark-blue)] rounded-lg flex items-center justify-between">
                    <span>Langue : FR</span>
                    <BaseIcon title="lucide:chevron-down" :size="16" color="currentColor" />
                </button>
            </div>
        </nav>
    </div>
</template>