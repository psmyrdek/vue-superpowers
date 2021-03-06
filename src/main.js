import { createApp } from 'vue'
import App from './App.vue'
import registerAds from './components/ads/helpers/register-ads'
import './custom-elements/ticker';

const app = createApp(App)

registerAds(app);

app.mount('#app')
