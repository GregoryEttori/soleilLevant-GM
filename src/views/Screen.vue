<template>
  <div>
    <h1>Ceci est le screen</h1>
    <p>ceci est le state : {{ hint }}</p>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Screen.vue",
  computed:{
    ...mapGetters([
        'hintText'
    ]),
    hint(){
      console.log('hint');
      return this.$store.getters.hintText
    }
  }
}
</script>

<style scoped>
  body{
    background: black;
    text-align: center;
  }
</style>