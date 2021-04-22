//VUE TODO LIST
const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Aspettare la closed beta',
                completed: false,
            },
            {
                text: 'Nerdare fino allo sfinimento',
                completed: false,
            },
            {
                text: 'Divertirsi',
                completed: false,
            }
        ],
        newTodo: '',
    },
    methods: {
        addTodo(){
            console.log('ADD new click');
        }
    },
});