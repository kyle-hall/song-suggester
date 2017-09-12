<template>
    <div class="songs">
        <ul>
            <li class="song" :key="song" v-for="song in songs">
                <h3>{{ song }}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                songs: [
                    'Legend of Zelda Theme',
                    'Under the Bridge',
                    'One Step Closer',
                    'White Winter Hymnal'
                ]
            }
        }
    };
</script>

<style scoped>

</style>
