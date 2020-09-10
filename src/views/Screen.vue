<template>
  <div class="screen">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Screen",
  data() {
    return {
      message: null,
    }
  },
  methods: {
    getHints() {
      axios.get('http://localhost:3000').then(response => this.message = response.data);
    }
  },
  mounted() {
    setInterval(() => this.getHints(), 1000);
  }
}
</script>

<style lang="scss" scoped>
  div{
    background: black;
    margin: -50px;

  }
  .screen{
    width: 1080px;
    height: 720px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    text-align: center;
  }
</style>