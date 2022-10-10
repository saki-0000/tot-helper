<template>
  <div id="app">
    <h1>SchedulePattern App</h1>
    <input type="text" v-model="name" placeholder="SchedulePattern name">
    <input type="text" v-model="description" placeholder="SchedulePattern description">
    <button v-on:click="createSchedulePattern">Create SchedulePattern</button>
    <div v-for="item in schedulePatterns" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
import { API } from 'aws-amplify';
import { createSchedulePattern } from '../graphql/mutations';
import { listSchedulePatterns } from '../graphql/queries';

export default {
  async created() {
    this.getSchedulePatterns();
    // this.subscribe();
  },
  data() {
    return {
      name: '',
      description: '',
      schedulePatterns: []
    }
  },
  methods: {
    async createSchedulePattern() {
      const { name, description } = this;
      if (!name || !description) return;
      const schedulePattern = { name, description };
      this.schedulePatterns = [...this.schedulePatterns, schedulePattern];
      await API.graphql({
        query: createSchedulePattern,
        variables: {input: schedulePattern},
      });
      this.name = '';
      this.description = '';
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