<template>
  <div id="app">
    <h1>Execute</h1>
    <input type="text" v-model="month" placeholder="The Month you want to schedule">
    <input type="text" v-model="id" placeholder="Your TOT ID">
    <input type="password" v-model="password" placeholder="Your TOT password">
    <button v-on:click="ExecuteCrawler">Execute TOT Scheduler</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      month: '',
      id: '',
      password: '',
      schedulePatterns: []
    }
  },
  methods: {
    async ExecuteCrawler() {
      await axios({
        method: 'POST',
        url: 'https://9nxriem3p8.execute-api.us-west-1.amazonaws.com/default/hello-world',
        data: {
          month: this.month,
          id: this.id,
          password: this.password,
        },
        headers: 'Access-Control-Allow-Origin: *'
        
      });
    }
  }
}
</script>