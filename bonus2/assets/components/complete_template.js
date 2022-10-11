// @ts-nocheck
import { add_newTodo } from './add_newTodo.js';
import { listTodo } from './listTodo.js';
import { listDone } from './listDone.js';

export const all_template = Vue.component( 'complete', {
    props: [ 'v' ],

    template: `
    <div id="app" class='container'>
        <h1 class='text-center my-3 text-shadow fw-bold'>Todolist</h1>
        <div is='add_newTodo' :v='v'></div>
        <div is='listTodo' :v='v'></div>
        <div is='listDone' :v='v'></div>
    </div>`
} );