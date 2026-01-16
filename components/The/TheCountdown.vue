<script setup>
import BaseImg from '../Base/BaseImg.vue';

const startDate = new Date("2026-02-06T23:30:00");
const currentTime = new Date();
const deltaTime = startDate - currentTime;

const days = Math.ceil(deltaTime / (24 * 3600 * 1000)); 
</script>

<template>
  <section class="w-full max-w-[1362px] mx-auto px-5">
    
    <div class="w-full bg-white rounded-[12px] shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#01647C]/10">
        
        <div class="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <h4 class="font-[Poppins] font-bold text-[20px] md:text-[24px] text-[var(--color-dark-blue)] leading-tight">
                Jeux Olympiques d’hiver de Milan Cortina 2026
            </h4>
            <span class="font-[Poppins] font-medium text-[16px] text-[var(--color-blue)] bg-[var(--color-light-green)] px-3 py-1 rounded-full w-fit mt-1">
                6 au 22 février 2026
            </span>
        </div>

        <div class="flex items-center gap-6 md:gap-8">
            
            <div class="flex flex-col items-center md:items-end">
                <p v-if="days > 0" class="font-[Poppins] text-[var(--color-dark-blue)] text-[16px] md:text-[18px] font-medium">
                    Débute dans 
                    <span class="font-bold text-[32px] text-[var(--color-blue)] mx-1">{{ days }}</span> 
                    jour{{ days > 1 ? "s" : "" }}
                </p>
                <p v-else class="font-[Poppins] font-bold text-[var(--color-blue)] text-[20px]">
                    Ça commence bientôt !
                </p>
            </div>

            <div class="hidden md:block w-[1px] h-[50px] bg-[var(--color-blue)] opacity-20"></div>

            <div class="shrink-0">
                <BaseImg 
                    src="/images/omega.png" 
                    alt="Logo Omega - Chronométreur Officiel" 
                    imgClass="h-auto w-[80px] md:w-[100px] object-contain"
                />
            </div>

        </div>

    </div>
  </section>
</template>