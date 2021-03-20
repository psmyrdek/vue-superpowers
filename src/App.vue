<template>
  <ComponentProps />
  <ComponentForms />
  <ComponentInstances />
  <ComponentEvents />
</template>

<script>
import ComponentProps from './components/ComponentProps.vue'
import ComponentForms from './components/ComponentForms.vue'
import ComponentInstances from './components/ComponentInstances.vue'
import ComponentEvents from './components/ComponentEvents.vue'

export default {
  name: 'App',
  components: {
    ComponentProps,
    ComponentForms,
    ComponentInstances,
    ComponentEvents
  }
}
</script>

<style>

</style>
