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
        //INSERIRE TO DO NELLA LISTA
        addTodo(){
            //console.log('ADD new click');
            if(this.new.Todo !== ''){
                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                });

                this.newTodo = '',
                this.$refs.todoInput.focus();
            }
        },
        //RIMUOVERE TO DO
        removeTodo(index){
            this.todos.splice(index, 1);
        },
        updateStatus(index){
            this.todos[index].completed = ! this.todos[index].completed;
        }
    },
});