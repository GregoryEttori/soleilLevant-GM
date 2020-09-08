<template>
<div>
  <h1>Salle 2</h1>
  <div class="hintControls">
    <div class="hintControlsStyle" @click="openMecanism" > Enigme 1 </div>
    <div class="hintControlsStyle" @click="openMecanism" > Enigme 2 </div>
    <div class="hintControlsStyle" @click="openMecanism" > Enigme 3 </div>
    <div class="hintControlsStyle" @click="openMecanism" > Enigme 4 </div>
    <div class="hintControlsStyle" @click="openMecanism" > Enigme 5 </div>
    <div class="hintControlsStyle" @click="openMecanism" > Enigme 6 </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Room2Mecanisms.vue",
  methods: {
    openMecanism(){
      console.log("Mecanism is open !");
    }
  }
}
</script>

<style lang="scss">
.hintControls {
  display: flex;
  flex-wrap: wrap;
}

.hintControlsStyle {
  display: flex;
  color: #FF4040;
  width: 96px;
  height: 96px;
  border: 2px solid #FF4040;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin: 12px 37px 12px 37px;

  &:hover {
    background: #FF4040;
    color: #e5e5e5;
    outline: none;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>