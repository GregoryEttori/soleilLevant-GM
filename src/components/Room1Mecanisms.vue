<template>
<div>
  <h1>Salle 1</h1>
  <div class="Room1MecanismControls">
    <div class="Room1MecanismControls__openAndClosed">
      <div class="Room1MecanismStyle open" @click="openMecanism" > Enigme 1 : open </div>
      <div class="Room1MecanismStyle closed" @click="openMecanism" > Enigme 1 : closed </div>
    </div>

    <div class="Room1MecanismControls__openAndClosed">
      <div class="Room1MecanismStyle open" @click="openMecanism" > Enigme 2 : open </div>
      <div class="Room1MecanismStyle closed" @click="openMecanism" > Enigme 2 : closed </div>
    </div>

    <div class="Room1MecanismControls__openAndClosed">
      <div class="Room1MecanismStyle open" @click="openMecanism" > Enigme 4 : open </div>
      <div class="Room1MecanismStyle closed" @click="openMecanism" > Enigme 4 : closed </div>
    </div>

    <div class="Room1MecanismControls__openAndClosed">
      <div class="Room1MecanismStyle open" @click="openMecanism" > Enigme 3 : open </div>
      <div class="Room1MecanismStyle closed" @click="openMecanism" > Enigme 3 : closed </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
name: "Room1Mecanisms.vue",
  methods: {
    openMecanism(){
      console.log("Mecanism is open !");
    }
  }
}
</script>

<style lang="scss">
.Room1MecanismControls {
  display: flex;
  flex-wrap: wrap;


  &__openAndClosed{
    display: flex;
    margin: 12px 27px 12px 27px;
  }
}

.Room1MecanismStyle {
  display: flex;
  width: 96px;
  height: 96px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin: 0 5px 0 5px;


  &.open {
    color: #03a600;
    border: 2px solid #03a600;
    text-align: center;

    &:hover{
      background: #03a600;
      color: #e5e5e5;
      outline: none;
    }

  }

  &.closed {
    color: #FF4040;
    border: 2px solid #FF4040;
    text-align: center;
  }

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