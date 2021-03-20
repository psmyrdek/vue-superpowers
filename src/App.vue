<template>
  <ComponentProps />
  <ComponentForms />
  <ComponentInstances />
</template>

<script>
import ComponentProps from './components/ComponentProps.vue'
import ComponentForms from './components/ComponentForms.vue'
import ComponentInstances from './components/ComponentInstances.vue'

export default {
  name: 'App',
  components: {
    ComponentProps,
    ComponentForms,
    ComponentInstances
  }
}
</script>

<style>

</style>
