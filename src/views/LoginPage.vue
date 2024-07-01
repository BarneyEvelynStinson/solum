<template>
  <div class="login-wrapper">
    <template>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-btn :disabled="!valid" color="submit-btn" class="mr-4" @click="validate">
          Submit
        </v-btn>
      </v-form>
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginPage',
  data() {
    return {
      valid: false,
      email: '',
      emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
    }
  },
  methods: {
    ...mapActions(['setEmail', 'setEmailValid']),
    async validate() {
      const isValid = await this.$refs.form.validate();
      if(!isValid ) {
        this.setEmailValid(false);
        return;
      } else {
        this.setEmailValid(true);
        this.setEmail(this.email);
        this.$router.push('/dashboard');
      }
    },
  }
}
</script>

<style scoped>
.login-wrapper {
  padding: 60px;
  margin: 50px auto;
  border: 1px solid;
  width: fit-content;
}
.submit-btn {
  color: #4CAF50;
}
</style>