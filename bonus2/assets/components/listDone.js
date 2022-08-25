export const listDone = Vue.component( 'listDone', {
    props: [ 'v' ],
    
    template: `
    <div id="listTodo" class="mt-4">
        <h2 class="text-center text-shadow fw-bold">Done</h2>
        <ul class="list-group shadow">
            <template v-for="(elTodo, i) in v.todos">
                <li v-if="elTodo.done" :key="i" 
                    @click="v.done(elTodo)"
                    class="hover c_pointer disabled list-group-item d-flex justify-content-between align-items-center">
                        {{elTodo.text}}
                        <span @click="v.done(elTodo)"
                            class="hover c_pointer user-select-none badge bg-secondary badge-pill">
                                <i class="fa-solid fa-xmark"></i>
                        </span>
                </li>
            </template>
        </ul>
    </div>`
} );