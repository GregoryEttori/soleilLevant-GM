<template>
  <div class="hintArea">
    <textarea name="hint" id="hint" cols="30" rows="10" v-model="hintTextArea" placeholder="Rentrez un indice..."></textarea>
    <div class="hintArea__controls">
      <div class="controlsStyle hintArea__submit" @click="sendHint(hintTextArea)"> Envoyez </div>
      <div class="controlsStyle hintArea__clear" @click="sendHint('')"> Clear </div>
    </div>

  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
name: "hintArea.vue",
  data(){
    return {
      hintTextArea: "",
    }
  },
  methods: {
    ...mapActions([
      'sendHint'
    ]),
  }
}

</script>

<style lang="scss">
.hintArea {
  display: flex;
  flex-direction: column;

  &__controls{
    display: flex;
    flex-direction: row;
  }

&__submit {
   width: 192px;
   height: 48px;
   margin: 19px 25px 0 0;
 }

  &__clear {
    width: 192px;
    height: 48px;
    margin: 19px 25px 0 0;
    border: 2px solid #00AB30;
    color: #00AB30;

    &:hover{
      background: #00AB30;
      color: #e5e5e5;
      outline: none;
    }

  }
}

textarea {
  background: inherit;
  border: 2px solid #FF4040;
  box-sizing: border-box;
  border-radius: 10px;
  width: 593px;
  height: 141px;
  padding: 10px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #FF4040;
  resize: none;
  outline: none;
}

textarea::placeholder {
  color: #FF4040;
  font-size: 16px;
  opacity: 50%;
}

textarea:focus {
  background: #FF4040;
  color: #e5e5e5;
}
</style>