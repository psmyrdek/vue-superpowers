<template>
  <form @submit.prevent="onSubmit()">
      <label for="first-name">
          First name <input autocomplete="off" type="text" name="first-name" v-model="firstName"/>
      </label>
      <label for="last-name">
          Last name <input autocomplete="off" type="text" name="last-name" v-model="lastName"/>
      </label>
      <label for="privacy-policy">
        <input type="checkbox" name="privacy-policy" v-model="privacyPolicy"/>
        Accept our privacy policy
      </label>
      <button>Submit</button>
  </form>
  {{ $data }}
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            privacyPolicy: false
        }
    },
    methods: {
        onSubmit() {
            console.log(this.$data);
        }
    }
}
</script>

<style scoped>
    label {
        display: block;
        margin-top: 2px;
    }

    input[type="text"] {
        display: block;
        width: 150px;
    }
</style>