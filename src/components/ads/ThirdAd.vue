<template>
  <h1>Third Ad</h1>
  <p>Check out these new tutorials available for you:</p>
  <ul>
    <li v-for="lang of languages" :key="lang"><a href="#">{{ lang }}</a></li>
  </ul>
</template>

<script>
export default {
  props: {
    languages: Array
  }
}
</script>

<style>

</style>