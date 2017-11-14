<template>
    <div class="songs">
        <ul class="list pl0">
            <li :key="song.title" v-for="song in songs">
                <song :song="song"></song>
            </li>
        </ul>
    </div>
</template>

<script>
    import Song from '@/components/Song'

    export default {
        components: {
            Song
        },
        props: ['songs']
    };
</script>
