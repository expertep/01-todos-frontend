<template>
  <div>
    <b-field class="is-pulled-right">
      <b-radio-button v-model="visibility"
        native-value="all">
        <span>All ({{countItemAll}})</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="active">
        <span>Active ({{countItemActive}})</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="completed">
        <span>Completed ({{countItemComplete}})</span>
      </b-radio-button>
    </b-field>
  </div>
</template>

<script>
import { store } from '@/store'
import { mapGetters } from 'vuex'

export default {
  props: ['countItemActive'],
  computed: {
    ...mapGetters(['todos']),
    countItemAll () {
      if (this.todos) {
        return this.todos.length
      } else return 0
    },
    countItemComplete () {
      let count = 0
      for (let i = 0; this.todos && i < this.todos.length; i++) {
        if (this.todos[i].completed) {
          count++
        }
      }
      return count
    },
    visibility: {
      get: function () {
        return store.state.visibility
      },
      set: function (newValue) {
        store.dispatch('changeVisibility', newValue)
      }
    }
  }
}
</script>
