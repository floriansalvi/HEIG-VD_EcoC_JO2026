<script setup>
import footerData from '../data/footer-content.json';
</script>

<template>
    <div class="w-full min-h-screen md:h-auto pt-7 pb-7 bg-[var(--color-blue)] flex flex-col justify-center items-center">
    <div class="w-full px-4 sm:px-6 md:px-8 lg:px-12 pb-5 flex flex-col justify-start items-start gap-20">
        <div class="w-full flex flex-col justify-start items-start gap-5">
            <div class="w-full inline-flex justify-start items-center gap-2.5">
                <div class="justify-start text-[var(--color-white)] text-2xl sm:text-3xl md:text-4xl font-semibold font-['Poppins']">Partenaires Olympiques et Paralympiques Mondiaux</div>
            </div>
            <div class="flex flex-col justify-start items-start gap-9 w-full">
                <div class="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 items-center">
                    <img class="w-full h-24 object-contain" src="/images/Airbnb_Logo_Belo.svg" alt="airbnb" />
                    <img class="w-full h-24 object-contain filter brightness-0 invert" src="/images/alibabalogo.svg" alt="alibaba" />
                    <img class="w-full h-24 object-contain" src="/images/Allianz.svg" alt="allianz" />
                    <img class="w-full h-24 object-contain filter brightness-0 invert" src="/images/Coca-Cola_logo.svg" alt="coca-cola" />
                    <img class="w-full h-24 object-contain" src="/images/coronalogo.svg" alt="corona" />
                </div>
                <div class="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6 items-center">
                    <img class="w-full h-24 object-contain" src="/images/Logo_of_Deloitte.svg" alt="deloitte" />
                    <img class="w-full h-24 object-contain filter brightness-0 invert" src="/images/omega.avif" alt="omega" />
                    <img class="w-full h-24 object-contain" src="/images/P&G_logo.svg" alt="p&g" />
                    <img class="w-full h-24 object-contain" src="/images/samsungLogo.svg" alt="samsung" />
                    <img class="w-full h-24 object-contain" src="/images/tclLogo.svg" alt="tcl" />
                    <img class="w-full h-24 object-contain" src="/images/Visa_Inc_logo.svg" alt="visa" />
                </div>
            </div>
        </div>
        <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 px-0 items-start">
            <div class="w-full p-0 inline-flex flex-col justify-center items-start gap-8">
                <div class="inline-flex justify-center items-center gap-2.5">
                    <div class="w-36 h-40 relative overflow-hidden">
                        <img src="/images/mico-logo.avif" alt="">
                    </div>
                </div>
                <div class="self-stretch flex flex-col justify-center items-start gap-5">
                    <a :href="footerData.content.paraGames.url" class="self-stretch justify-start text-[var(--color-white)] text-sm font-light font-['Poppins'] underline">{{ footerData.content.paraGames.alt }}</a>
                </div>
            </div>
            <div class="w-full p-0 inline-flex flex-col justify-center items-start gap-8">
                <div class="inline-flex justify-center items-center gap-2.5">
                    <div class="justify-start text-[var(--color-white)] text-xl md:text-2xl font-semibold font-['Poppins']">Les Jeux</div>
                </div>
                <div class="self-stretch flex flex-col justify-center items-start gap-5">
                    <a v-for="item in footerData.content.games" :key="item.url" :href="item.url" class="justify-start text-[var(--color-white)] text-sm font-light font-['Poppins']">{{ item.alt }}</a>
                </div>
            </div>
            <div class="w-full p-0 inline-flex flex-col justify-start items-start gap-8">
                <div class="inline-flex justify-center items-center gap-2.5">
                    <div class="justify-start text-[var(--color-white)] text-xl md:text-2xl font-semibold font-['Poppins']">Rejoindre les jeux</div>
                </div>
                <div class="self-stretch flex flex-col justify-center items-start gap-5">
                    <a v-for="item in footerData.content.joinGames" :key="item.url" :href="item.url" class="justify-start text-[var(--color-white)] text-base font-light font-['Poppins']">{{ item.alt }}</a>
                </div>
            </div>
            <div class="w-full p-0 inline-flex flex-col justify-start items-start gap-8">
                <div class="inline-flex justify-center items-center gap-2.5">
                    <div class="justify-start text-[var(--color-white)] text-xl md:text-2xl font-semibold font-['Poppins']">À propos de nous</div>
                </div>
                <div class="self-stretch flex flex-col justify-center items-start gap-5">
                    <a v-for="item in footerData.content.about" :key="item.url" :href="item.url" class="self-stretch justify-start text-[var(--color-white)] text-base font-light font-['Poppins']">{{ item.alt }}</a>
                </div>
            </div>
            <div class="w-full p-0 inline-flex flex-col justify-start items-start gap-8">
                <div class="inline-flex justify-center items-center gap-2.5">
                    <div class="justify-start text-[var(--color-white)] text-xl md:text-2xl font-semibold font-['Poppins']">Nos projets</div>
                </div>
                <div class="self-stretch flex flex-col justify-center items-start gap-5">
                    <a v-for="item in footerData.content.projects" :key="item.url" :href="item.url" class="self-stretch justify-start text-[var(--color-white)] text-base font-light font-['Poppins']">{{ item.alt }}</a>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center items-center pt-8 border-t border-white/20">
            <p class="text-[var(--color-white)] text-base md:text-lg font-semibold font-['Poppins']">Ce site a été éco-conçu pour minimiser son impact environnemental</p>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>
