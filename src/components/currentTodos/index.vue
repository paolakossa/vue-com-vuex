<template>
  <div id="current-todos" class="container">
    <h3 v-if="todos.length > 0">Current({{ todos.length }})</h3>
    <ul class="list-group">
        <li class="list-group-item" v-for="todo in todos">
            {{ todo.body }}
            <div class="btn-group">
                <button type="button" @click="edit(todo)" class="btn btn-secondary me-2">
                    Edit
                </button>
                <button type="button" @click="complete(todo)" class="btn btn-dark me-2">
                    Complete
                </button>
                <button type="button" @click="remove(todo)" class="btn btn-danger">
                    Remove
                </button>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    methods:{
        edit(todo){
            this.$store.dispatch('editTodo', todo)
        },
        remove(todo){
            this.$store.dispatch('removeTodo', todo)
        },
       complete(todo){
            this.$store.dispatch('completeTodo', todo)
        },

    },
    computed: {
        todos(){
            return this.$store.getters.todos
        }
    }
}
</script>

<style>

</style>