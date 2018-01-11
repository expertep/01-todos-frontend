import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    visibility: 'all'
  },
  mutations: {
    ADD_TODO (state, title) {
      state.todos.push({
        title,
        completed: false
      })
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    },
    DELETEONE (state, index) {
      state.todos.splice(index, 1)
    },
    COMPLETED (state, index) {
      state.todos[index].completed = !state.todos[index].completed
    },
    DELETECOMPLETE (state) {
      for (let i = state.todos.length - 1; i >= 0; i--) {
        if (state.todos[i].completed) {
          state.todos.splice(i, 1)
        }
      }
    }
  },
  actions: {
    deleteTodo ({commit}, index) {
      commit('DELETEONE', index)
    },
    deleteTodosComplete ({commit}) {
      commit('DELETECOMPLETE')
    },
    addTodo ({commit}, title) {
      commit('ADD_TODO', title)
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    },
    changeCompleted ({commit}, index) {
      commit('COMPLETED', index)
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
