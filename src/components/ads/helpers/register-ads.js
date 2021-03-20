import { defineAsyncComponent } from 'vue'
import BrokenAd from '../common/BrokenAd';

export default function registerAds(app) {
    app.component('FirstAd', defineAsyncComponent(() => import('../FirstAd.vue')))
    app.component('SecondAd', defineAsyncComponent(() => import('../SecondAd.vue')))
    app.component('ThirdAd', defineAsyncComponent({
        loader: () => import('../ThirdAd.vue'),
        errorComponent: BrokenAd
    }))
}