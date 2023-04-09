<template>
  <div class="app">
    <div v-if="state.account.mid">
      HI! {{ state.account.memberName }} WELCOME
    </div>
    <div v-else>
      <label for="loginId">
        <span>Id</span>
        <input type="text" id="loginId" />
      </label>
      <label for="loginPw">
        <span>password</span>
        <input type="password" id="loginPw" />
      </label>
      <hr />
      <button>login</button>
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
    });

    axios.get('/api/account').then((res) => {
      console.log(res);
      state.account = res.data;
    });

    return { state };
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
