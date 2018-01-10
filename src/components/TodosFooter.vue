<template>
  <div>
    <p class="is-pulled-left">{{countLeft}}</p>
    <visibility-input/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VisibilityInput from '@/components/VisibilityInput'

export default {
  components: {
    VisibilityInput
  },
  methods: {
    ...mapActions(['countItem'])
  },
  computed: {
    ...mapGetters(['countLeft'])
  },
  mounted () {
    this.countItem()
  }
}
</script>
