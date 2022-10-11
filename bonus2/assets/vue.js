// @ts-nocheck
import { all_template } from './components/complete_template.js';

const app = new Vue( {
    el: '#app',

    template: `<div is='complete' :v='v'></div>`,

    data () {
        return {
            v: {
                todos: [],
                textTodo: '',
                addTodo: () => app.addTodo(),
                done: ( e ) => app.done( e ),
                enter: ( e ) => app.enter( e )
            }
        }
    },

    methods: {
        addTodo () {
            this.v.textTodo = this.v.textTodo.trim();
            if ( !this.v.textTodo ) return;
            this.v.todos.push( {
                text: this.v.textTodo.charAt().toUpperCase() + this.v.textTodo.slice( 1 ),
                done: false
            } );
            this.v.textTodo = '';
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