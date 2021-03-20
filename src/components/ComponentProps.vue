<template>
  <div>
      Hello, {{ firstName }}!
  </div>
</template>

<script>
export default {
    props: {
        firstName: {
            type: String,
            required: true,
            default: '<MISSING>',
            validator(value) {
                return value.length > 0 ? 'success' : 'warning';
            }
        }
    }
}
</script>

<style>

</style>