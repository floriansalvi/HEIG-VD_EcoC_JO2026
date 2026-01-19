<script setup>
import footerData from '../data/footer-content.json';
</script>

<template>
  <div>
    <div></div>
        <div>
            <div>
                <a :href="footerData.content.paraGames.url">{{ footerData.content.paraGames.alt }}</a>
            </div>
            <div>
                <h3>Les Jeux</h3>
                <a
                    v-for="e in footerData.content.games"
                    :href="e.url">{{ e.alt }}
                </a>
            </div>
            <div>
                <h3>Rejoindre les Jeux</h3>
                <a
                    v-for="e in footerData.content.joinGames"
                    :href="e.url">{{ e.alt }}
                </a>
            </div>
            <div>
                <h3>À propos de nous</h3>
                <a
                    v-for="e in footerData.content.about"
                    :href="e.url">{{ e.alt }}
                </a>
            </div>
            <div>
                <h3>Nos projets</h3>
                <a
                    v-for="e in footerData.content.projects"
                    :href="e.url">{{ e.alt }}
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>