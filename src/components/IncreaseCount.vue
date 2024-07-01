<template>
  <div>
    Present Count {{ getCount }}
    <v-btn @click="increment">Increment</v-btn>
  </div>
</template>

<script>
import counter from '../mixins/counter';

export default {
  mixins: [counter],
  data() {
    return {
      initialCount: 10,
    }
  },
  methods: {
    increment() {
     this.updateCount(this.initialCount);
    },
  }
}
</script>