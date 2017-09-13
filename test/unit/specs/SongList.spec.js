
import Vue from 'vue';
import SongList from '@/components/SongList';

describe('SongList.vue', () => {
    const songs = [
        'Legend of Zelda Theme',
        'Under the Bridge',
        'One Step Closer',
        'White Winter Hymnal'
    ]

    it('should render a song', () => {
        const Constructor = Vue.extend(SongList);
        const vm = new Constructor({
                propsData: {
                    songs: songs
                }  
            }).$mount();
        expect(vm.$el.querySelector('li:first-child').textContent)
            .to.equal('Legend of Zelda Theme');
    });

    it('should render a song for each element in the song list', () => {
        const Constructor = Vue.extend(SongList);
        const vm = new Constructor({
            propsData: {
                songs: songs
            }
        }).$mount();
        expect(vm.$el.querySelectorAll('.song').length)
            .to.equal(vm.songs.length);
    });


});