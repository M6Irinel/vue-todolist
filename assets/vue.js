// @ts-nocheck
new Vue( {
    el: '#app',

    data () {
        return {
            todos: [],
            textTodo: ''
        }
    },

    methods: {

        addTodo () {
            this.textTodo = this.textTodo.trim();

            if ( !this.textTodo ) return;

            this.todos.push( {
                text: this.textTodo,
                done: false
            } );

            this.textTodo = '';
        },

        done ( el_Todo ) {
            el_Todo.done = !el_Todo.done;
        },

        enter ( e ) {
            if ( e.key === 'Enter' )
                this.addTodo();
        }
    },
} );