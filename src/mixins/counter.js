import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['updateCount'])
  },
  computed: {
    ...mapGetters(['getCount'])
  }
}