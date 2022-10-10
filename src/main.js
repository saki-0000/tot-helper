import { createApp } from 'vue'
import App from './App.vue'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import AmplifyVue from '@aws-amplify/ui-vue';
import router from './router'

Amplify.configure(awsExports);

const app = createApp(App);
app.use(AmplifyVue);
app.use(router);
app.mount('#app');
