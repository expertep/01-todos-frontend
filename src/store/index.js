import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    visibility: 'all',
    countLeft: 0
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
    DELETE (state, index) {
      state.todos.splice(index, 1)
    },
    COMPLETED (state, index) {
      console.log(index)
      state.todos[index].completed = !state.todos[index].completed
    },
    COUNT (state) {
      state.countLeft++
    }
  },
  actions: {
    deleteTodos ({commit}, index) {
      commit('DELETE', index)
    },
    addTodo ({commit}, title) {
      commit('ADD_TODO', title)
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    },
    changeCompleted ({commit}, index) {
      commit('COMPLETED', index)
    },
    countItem (context) {
      for (let i = 0; i < context.state.todos.length; i++) {
        if (!context.state.todos[i].completed) {
          context.commit('COUNT')
        }
      }
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility,
    countLeft: state => state.countLeft
  }
})
