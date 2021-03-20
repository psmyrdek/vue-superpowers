<template>
  <div>
    <h1>First Ad</h1>
    <p>We have something special for you, {{ firstName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    firstName: String
  }
}
</script>

<style>

</style>