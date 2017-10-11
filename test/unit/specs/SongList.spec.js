
import Vue from 'vue';
import SongList from '@/components/SongList';

describe('SongList.vue', () => {
    const songs = [
        { title: 'Legend of Zelda Theme' },
        { title: 'Under the Bridge' },
        { title: 'One Step Closer' },
        { title: 'White Winter Hymnal'}
      ];

    it('should render a song', () => {
        const Constructor = Vue.extend(SongList);
        const vm = new Constructor({
            propsData: {
                songs: songs
            }  
        }).$mount();
        const expected = vm.songs[0].title;

        const actual = vm.$el.querySelector('li:first-child').textContent;

        expect(actual).to.equal(expected);
    });

    it('should render a song for each element in the song list', () => {
        const Constructor = Vue.extend(SongList);
        const vm = new Constructor({
            propsData: {
                songs: songs
            }
        }).$mount();
        const expected = vm.songs.length;

        const actual = vm.$el.querySelectorAll('.song').length;

        expect(actual).to.equal(expected);
    });

    it('should render a song with a title', () => {
        const Constructor = Vue.extend(SongList);
        const vm = new Constructor({
            propsData: {
                songs: songs
            }
        }).$mount();
        const expected = vm.songs[0].title;

        const actual = vm.$el.querySelectorAll('.song')[0].textContent;

        expect(actual).to.equal(expected);
    });
    
});
