<script setup>
  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
</script>
<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <router-view />
      <button @click="signOut">Sign Out</button><br>
      <router-link to="/">go to Execute</router-link><br>
      <router-link to="/pattern/create">go to create pettern</router-link>
    </template>
  </authenticator>
</template>