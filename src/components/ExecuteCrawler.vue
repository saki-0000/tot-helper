<template>
  <div id="app">
    <h1>Execute</h1>
    <input type="text" v-model="month" placeholder="The Month you want to schedule">
    <select v-model="pattern">
      <option v-for="schedulePattern in schedulePatterns" :value="schedulePattern.name" :key="schedulePattern.name">
        {{ schedulePattern.name }}
      </option>
    </select>
    <input type="text" v-model="id" placeholder="Your TOT ID">
    <input type="password" v-model="password" placeholder="Your TOT password">
    <button v-on:click="ExecuteCrawler">Execute TOT Scheduler</button>
  </div>
</template>

<script>
import axios from 'axios';
import { API } from 'aws-amplify';
import { listSchedulePatterns } from '../graphql/queries';

export default {
  async created() {
    this.getSchedulePatterns();
  },
  data() {
    return {
      month: '',
      pattern: '',
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
          pattern: this.pattern,
          id: this.id,
          password: this.password,
        },
        headers: {'x-api-key': 'MGgxNW73jj3k3DqIH06Kr3VSWsLKBxXdaUpIqI9l'}
      });
    },
    async getSchedulePatterns() {
      const schedulePatterns = await API.graphql({
        query: listSchedulePatterns
      });
      this.schedulePatterns = schedulePatterns.data.listSchedulePatterns.items;
    }
  }
}
</script>