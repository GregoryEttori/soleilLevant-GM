<template>
<div>
  <div class="RoomMecanismControls__entranceAndExit">
    <div class="RoomMecanismControls__entranceControls">
      <div class="RoomMecanismControls__entranceControls--title">ENTRÉE</div>
      <switches v-model="entrance" type-bold="true"></switches>
    </div>
    <div class="RoomMecanismControls__exitControls">
      <div class="RoomMecanismControls__exitControls--title">SORTIE</div>
      <switches v-model="exit" type-bold="true"></switches>
    </div>
  </div>
  <h1>Salle 1</h1>
  <div class="RoomMecanismControls">
    <div class="RoomMecanismControls__openAndClosed">
      <div class="RoomMecanismControls__title">ENIGME 1</div>
      <switches v-model="enable1" type-bold="true"></switches>
    </div>

    <div class="RoomMecanismControls__openAndClosed">
      <div class="RoomMecanismControls__title">ENIGME 2</div>
      <switches v-model="enable2" type-bold="true"></switches>
    </div>

    <div class="RoomMecanismControls__openAndClosed">
      <div class="RoomMecanismControls__title">ENIGME 3</div>
      <switches v-model="enable3" type-bold="true"></switches>
    </div>

    <div class="RoomMecanismControls__openAndClosed">
      <div class="RoomMecanismControls__title">ENIGME 4</div>
      <switches v-model="enable4" type-bold="true"></switches>
    </div>

    <div class="RoomMecanismControls__openAndClosed">
      <div class="RoomMecanismControls__title">ENIGME 5</div>
      <switches v-model="enable5" type-bold="true"></switches>
    </div>

    <div class="RoomMecanismControls__openAndClosed">
      <div class="RoomMecanismControls__title">ENIGME 6</div>
      <switches v-model="enable6" type-bold="true"></switches>
    </div>

    <div class="RoomMecanismControls__openAndClosed">
      <div class="RoomMecanismControls__title">ENIGME 7</div>
      <switches v-model="enable7" type-bold="true"></switches>
    </div>

    <div class="RoomMecanismControls__openAndClosed">
      <div class="RoomMecanismControls__title">ENIGME 8</div>
      <switches v-model="enable8" type-bold="true"></switches>
    </div>

  </div>
</div>
</template>

<script>
import Switches from 'vue-switches';

export default {
name: "Room1Mecanisms.vue",
  data(){
    return{
      entrance: false,
      exit: false,
      enable1: false,
      enable2: false,
      enable3: false,
      enable4: false,
      enable5: true,
      enable6: true,
      enable7: true,
      enable8: true,
    }
  },
  components: {
    Switches,
  },
  computed: {
    firstValue(){
      return this.enable1;
    },
    secondValue(){
      return this.enable2;
    }
  },
  methods: {
    openMecanism(){
      console.log("Mecanism is open !");
    },

  }
}
</script>

<style lang="scss">
.RoomMecanismControls {
  display: flex;
  flex-wrap: wrap;


  &__openAndClosed{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 12px 0 12px 14px;
    width: 140px;
    height: 91px;
    background: #2E2E2E;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
  }

  &__entranceAndExit{
    display: flex;
    justify-content: flex-end;
  }

  &__entranceControls{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 12px 0px 12px 15px;
    width: 140px;
    height: 91px;
    border: 2px solid #00AB30;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 19px;

    &--title{
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 19px;
      margin-top: 7px;
      color: #00AB30;
    }
  }

  &__exitControls{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 12px 0 12px 15px;
    width: 140px;
    height: 91px;
    border: 2px solid #FF4040;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 19px;

    &--title{
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 19px;
      margin-top: 7px;
      color: #FF4040;
    }
  }

  &__title{
    font-size: 20px;
    line-height: 24px;
    font-weight: 900;
    color: #E1E1E1;
    display: flex;
    text-align: center;
    margin-top: 6px;
  }
}

.RoomMecanismStyle {
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

.vue-switcher--bold div {
  top: -8px;
  height: 33px;
  width: 87px; }
.vue-switcher--bold div:after {
  //content: 'OPEN';
  margin-left: -24px;
  top: 4px;
}
.vue-switcher--bold--unchecked div:after {
  //content: 'CLOSED';
  left: 28px;
}

.vue-switcher-theme--default.vue-switcher-color--default div {
  border: 2px solid #00AB30;
  box-sizing: border-box;
  box-shadow: inset -2px 1px 4px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 29px;
  margin-top: 10px;
}
.vue-switcher-theme--default.vue-switcher-color--default div:after {
  border: 2px solid #00AB30;
  background: #00AB30;
  box-sizing: border-box;
  border-radius: 29px;}
.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div {
  border: 2px solid #FF4040;
  box-sizing: border-box;
  border-radius: 29px;
  margin-top: 10px;
}
.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div:after {
  border: 2px solid #FF4040;
  box-sizing: border-box;
  background: #FF4040;
  border-radius: 29px; }


</style>