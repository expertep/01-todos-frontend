<template>
  <div>
    <p class="is-pulled-left">{{countItemActive}} items left</p>
    <visibility-input v-bind:countItemActive="countItemActive"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VisibilityInput from '@/components/VisibilityInput'

export default {
  components: {
    VisibilityInput
  },
  methods: {
  },
  computed: {
    ...mapGetters(['todos']),
    countItemActive () {
      let count = 0
      for (let i = 0; this.todos && i < this.todos.length; i++) {
        if (!this.todos[i].completed) {
          count++
        }
      }
      return count
    }
  }
}
</script>
