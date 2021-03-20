<template>
  <div>
    <h1>Second Ad</h1>
    <p>Use this code <strong>{{ coupon }}</strong> to obtain a 10% discount!</p>
  </div>
</template>

<script>
export default {
  props: {
    coupon: String
  }
}
</script>

<style>

</style>