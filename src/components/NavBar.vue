<template>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-toolbar-title>Welcome {{ getUserEmail }}</v-toolbar-title>
    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getUserEmail']),
  },
}
</script>