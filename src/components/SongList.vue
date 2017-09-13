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
        props: ['songs']
    };
</script>
