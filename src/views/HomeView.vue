<template>
  <div>
    <completed-todos></completed-todos>
    <get-todo></get-todo>
    <current-todos></current-todos>
  </div>
</template>

<script>
// @ is an alias to /src
import GetTodo from '@/components/getTodo'
import CurrentTodos from '@/components/currentTodos'
import CompletedTodos from '@/components/completedTodo'


export default {
  name: 'HomeView',
  components: {
   GetTodo,
   CurrentTodos,
  CompletedTodos
  }
}
</script>
