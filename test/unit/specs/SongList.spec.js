
import Vue from 'vue';
import SongList from '@/components/SongList';

describe('SongList.vue', () => {
    it('should render a todo item', () => {
        const Constructor = Vue.extend(SongList);
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('.todo h1').textContent)
            .to.equal('Song A');
    });
});