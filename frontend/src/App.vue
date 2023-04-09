<template>
  <div class="app">
    <div v-if="state.account.mid">
      HI! {{ state.account.memberName }} WELCOME
    </div>
    <div v-else>
      <label for="loginId">
        <span>Id</span>
        <input type="text" id="loginId" v-model="state.form.loginId" />
      </label>
      <label for="loginPw">
        <span>password</span>
        <input type="password" id="loginPw" v-model="state.form.loginPw" />
      </label>
      <hr />
      <button @click="submit()">login</button>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const state = reactive({
      account: {
        mid: null,
        memberName: '',
      },
      form: {
        loginId: '',
        loginPw: '',
      },
    });

    const submit = () => {
      const args = {
        loginId: state.form.loginId,
        loginPw: state.form.loginPw,
      };
      axios.post('/api/account', args).then((res) => {
        alert('login success');
        state.account = res.data;
        console.log(res.data);
      });
    };

    axios.get('/api/account').then((res) => {
      console.log(res);
      state.account = res.data;
    });

    return { state, submit };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
