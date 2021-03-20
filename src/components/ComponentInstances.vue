<template>
    <article class="ad-template" v-if="currentAd">
        <component :is="currentAd" v-bind="currentAdProps"></component>
    </article>
</template>

<script>
import fetchAd from './ads/helpers/ads-service';

export default {
    data() {
      return {
          currentAd: '',
          currentAdProps: {}
      }
    },
    mounted() {
        setInterval(() => {
            fetchAd()
                .then(({component, data}) => {
                    this.currentAd = component;
                    this.currentAdProps = data;
                });
        }, 2000);
    }
}
</script>

<style scoped>
    .ad-template {
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        background: white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
</style>