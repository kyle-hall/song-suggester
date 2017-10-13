<template>
    <div>
        <div v-if="song.learned">
            <h3 class="ba bg-light-green bw2 mw5 center pa5">{{ song.title }}</h3>
        </div>
        <div v-else>
            <h3 class="ba bg-light-red bw2 mw5 center pa5">{{ song.title }}</h3>
        </div>
    </div>
    
</template>

<script>
    export default {
        props: ['song']
    };
</script>
