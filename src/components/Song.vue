<template>
    <div>
        <div v-if="song.learned">
            <h3 class="song green-border mw7 center pa5">{{ song.title }}</h3>
        </div>
        <div v-else>
            <h3 class="song red-border mw7 center pa5">{{ song.title }}</h3>
        </div>
    </div>
    
</template>

<script>
    export default {
        props: ['song']
    };
</script>
