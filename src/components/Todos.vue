<template>
  <div>
    <a @click="deleteTodosComplete()">Clear completed</a>
    <div v-for="(todo, index) in todos" :key="todo.title" v-if="showTodo(todo)">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large" @input="changeCompleted(index)">
          <strike v-if="todo.completed">{{ todo.title }}</strike>
          <span v-else>{{ todo.title }}</span>
        </b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click="deleteTodo(index)"></a>
      <div class="is-clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['deleteTodo',
      'changeCompleted',
      'deleteTodosComplete'
    ]),
    showTodo (todo) {
      if (this.visibility !== 'all') {
        if (todo.completed === true && this.visibility === 'completed') {
          return true
        } else if (todo.completed === false && this.visibility === 'active') {
          return true
        } else return false
      } else return true
    }
  },
  computed: {
    ...mapGetters(['todos',
      'visibility'
    ])
  }
}
</script>
