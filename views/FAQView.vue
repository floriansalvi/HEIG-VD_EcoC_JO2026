<script setup>
import { ref, computed } from 'vue';
import faqQuestionsRaw from '../data/faq.json';
import BaseFAQCard from '../components/Base/BaseFAQCard.vue';

const categories = [
    "All Categories", 
    "Milano Cortina 2026", 
    "Jeux Olympiques"
];

const activeCategory = ref("All Categories");

const filteredQuestions = computed(() => {
    if (activeCategory.value === "All Categories") {
        return faqQuestionsRaw;
    }
    return faqQuestionsRaw.filter(q => q.category === activeCategory.value);
});

const setCategory = (category) => {
    activeCategory.value = category;
}
</script>

<template>
  <section class="w-full max-w-[1362px] mx-auto px-5 py-12">
    
   <div class="flex flex-col md:flex-row items-start gap-10">
        
        <div class="w-full md:w-[50%] flex flex-col gap-6">
            
            <h2 class="font-[Poppins] font-bold text-[32px] text-[var(--color-dark-blue)] leading-tight">
                Frequently Asked Questions
            </h2>

            <div class="flex flex-wrap items-center gap-3">
                <button
                    v-for="category in categories"
                    :key="category"
                    @click="setCategory(category)"
                    class="h-[45px] px-[20px] rounded-full flex items-center justify-center transition-all duration-300 font-[Poppins] text-[14px] font-medium whitespace-nowrap"
                    :class="[
                        activeCategory === category
                            ? 'bg-[var(--color-blue)] text-[#F4F6F6]' 
                            : 'bg-white text-[var(--color-blue)] border border-[#01647C]/20 hover:bg-[var(--color-light-green)]'
                    ]"
                >
                    {{ category }}
                </button>
            </div>
            
        </div>

        <div class="w-full md:w-[50%] flex flex-col gap-6">
            <BaseFAQCard
                v-for="(faqQuestion, index) in filteredQuestions"
                :key="index"
                :question="faqQuestion.question"
                :answer="faqQuestion.answer"
                :link="faqQuestion.link"
            />
            
            <div v-if="filteredQuestions.length === 0" class="text-center py-10 opacity-60 font-[Poppins]">
                Aucune question trouvée.
            </div>
        </div>

    </div>
  </section>
</template>