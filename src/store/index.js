import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: ''
  },
  getters: {
    newTodo: state => state.newTodo,
    todos: state => state.todos.filter((todo) => {return !todo.completed}),
    completedTodos: state => state.todos.filter((todo) => {return todo.completed})
  },
  mutations: {
    GET_TODO (state, todo) {
      state.newTodo = todo
    },
    ADD_TODO (state){
      state.todos.push({
        body: state.newTodo,
        completed: false
      })
    },
    EDIT_TODO (state, todo){
      let todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      state.todos = todos
      state.newTodo = todo.body
    },
    REMOVE_TODO (state, todo) {
      let todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
    },
    COMPLETE_TODO(todo){
      todo.completed = !todo.completed
    }
  },
  actions: {
    getTodo({commit}, todo) {
      commit('GET_TODO', todo)
    },
    addTodo({commit}){
      commit('ADD_TODO')
    },
    editTodo({commit}, todo) {
      commit('EDIT_TODO', todo)
    },
    removeTodo({commit}, todo) {
      commit('REMOVE_TODO', todo)
    },
    completeTodo({commit}, todo){
      commit('COMPLETE_TODO', todo)
    },
    //completeTodo(context, todo){
      //context.commit('COMPLETE_TODO', todo)
  },
  modules: {
  }
})
