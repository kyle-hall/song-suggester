
import Vue from 'vue';
import TodoList from '@/components/TodoList';

describe('TodoList.vue', () => {
    it('should render a todo item', () => {
        const Constructor = Vue.extend(TodoList);
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('.todo h1').textContent)
            .to.equal('Todo A');
    });
});