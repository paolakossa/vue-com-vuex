<template>
  <div id="completed-todo">
    <h3 v-if="completed.length > 0">Completed({{ completed.length }})</h3>
    <ul class="list-group">
        <li class="list-group-item" v-for="(todo, index) in completed" :key="index">
            {{ todo.body }}
            <button type="button" @click="remove(todo)" class="btn btn-danger">
                Remove
            </button>  
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    methods: {
        remove(todo) {
            this.$store.dispatch('removeTodo', todo)
    }
},
computed: {
    completed(){
        return this.$store.getters.completedTodos
    }
}
}
</script>

<style>

</style>