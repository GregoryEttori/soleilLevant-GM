<template>
  <div class="screen">
    <div class="screen__title">{{ message }}</div>
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
    width: 100vw;
    height: 100vh;
    display: flex;
    padding: 50px;
    justify-content: center;
    align-items: center;

    &__title{
      font-style: normal;
      font-weight: 900;
      font-size: 80px;
      line-height: 90px;
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      color: #FF4040;
    }

  }
</style>