<template>
  <div>
    <div class="RoomTitle">Salle 2</div>
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

</style>