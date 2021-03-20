<template>
  <div>
      <custom-ticker @tick="logTick($event.detail)"></custom-ticker>
  </div>
</template>

<script>
export default {
    methods: {
        logTick(formattedDate) {
            console.log(formattedDate);
        }
    }
}
</script>

<style>

</style>