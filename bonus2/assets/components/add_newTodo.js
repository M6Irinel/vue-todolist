export const add_newTodo = Vue.component( 'add_newTodo', {
    props: [ 'v' ],
    
    template: `
    <div id="add_newTodo" class="d-flex justify-content-between">
        <input class="shadow flex-grow-1 border rounded-2 p-1 ps-5"
                v-model="v.textTodo" 
                @keypress="v.enter" 
                placeholder="add new todo">
        <button class="shadow ms-2 btn btn-success px-4 py-1" 
                @click="v.addTodo">Add todo</button>
    </div>`
} );