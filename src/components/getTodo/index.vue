<template>
    <div id="get-todo" class="container">
      <input class="form-control"
      :value="newTodo"
      @change="getTodo"
      placeholder="Eu preciso fazer..."/>
      <button class="btn btn-primary" @click="addTodo">Adicionar tarefas</button>
    </div>
  </template>
  
  <script>
  export default {
      methods: {
          getTodo(e){
              this.$store.dispatch('getTodo', e.target.value)
          },
          addTodo() {
              this.$store.dispatch('addTodo')
              
          }
      },
      computed: {
          newTodo() {
              return this.$store.getters.newTodo
          }
      }
  }
  </script>
  
  <style>
  
  </style>