<template>
    <perfect-scrollbar>
      <div class="main">
        <router-view></router-view>
      </div>

    </perfect-scrollbar>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '~vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
@import '~reset.css/reset.css';

body {
  background: #242424;
}

html, body, * {
  box-sizing: border-box;
}

.main {
  display: flex;
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FF4040;
  padding: 50px;
}

.ps{
  height: 100vh;
}

.ps__thumb-x {
  background-color: #FF4040;
  border-radius: 0;
}

.ps__thumb-y {
  background-color: #FF4040;
  border-radius: 0;
  height: 2px;
}

.ps__rail-x.ps--clicking .ps__thumb-x {
  background-color: #FF4040;
  height: 8px;
}

.ps__rail-y.ps--clicking .ps__thumb-y {
  background-color: #FF4040;
  width: 8px;
}
.ps .ps__rail-y.ps--clicking {
  background-color: rgba(0,0,0,0);
  opacity: 0.9;
}
.ps .ps__rail-x:hover,
.ps .ps__rail-y:hover,
.ps .ps__rail-x:focus,
.ps .ps__rail-y:focus{
  background-color: rgba(0,0,0,0);
}



</style>
