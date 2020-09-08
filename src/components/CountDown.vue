<template>
    <div>
      <div class="timeWatch">
        <div class="timeWatch__counter">
          {{ formattedTimeLeft }}
        </div>
      </div>

      <div class="timeControl">
        <div :class="hasStarted ? 'controlsStyle disabled' : 'controlsStyle'" @click="startTimer" > Start </div>
        <div :class="hasPaused ? 'controlsStyle pause' : 'controlsStyle'" @click="pauseTimer"> Pause </div>
        <div class="controlsStyle" @click="resetTimer" > Stop </div>
      </div>

      <!--<div class="hintArea">
        <textarea name="hint" id="hint" cols="30" rows="10" v-model="hintTextArea" placeholder="Rentrez un indice..."></textarea>
        <div class="controlsStyle hintArea__submit" @click="hintSubmit"> Envoyez </div>
      </div>-->
    </div>

    <!--<div class="separatorLine"></div>

    <div class="rightPart">
      <div class="hintDisplay">-->
        <!--<h1>Salle 1</h1>
        <div class="hintControls">
          <div class="hintControlsStyle" @click="resetTimer" > Enigme 1 </div>
          <div class="hintControlsStyle" @click="resetTimer" > Enigme 2 </div>
          <div class="hintControlsStyle" @click="resetTimer" > Enigme 3 </div>
          <div class="hintControlsStyle" @click="resetTimer" > Enigme 4 </div>
          <div class="hintControlsStyle" @click="resetTimer" > Enigme 5 </div>
          <div class="hintControlsStyle" @click="resetTimer" > Enigme 6 </div>
        </div>-->

        <!--<h1>Salle 2</h1>
        <div class="hintControls">
          <div class="hintControlsStyle" @click="resetTimer" > Enigme 1 </div>
          <div class="hintControlsStyle" @click="resetTimer" > Enigme 2 </div>
          <div class="hintControlsStyle" @click="resetTimer" > Enigme 3 </div>
          <div class="hintControlsStyle" @click="resetTimer" > Enigme 4 </div>
          <div class="hintControlsStyle" @click="resetTimer" > Enigme 5 </div>
          <div class="hintControlsStyle" @click="resetTimer" > Enigme 6 </div>
        </div>-->

    <!--  </div>
    </div>-->

</template>

<script>

export default {
  name: 'CountDown',
  data(){
    return {
      timeLimit: 3600,
      hasStarted: false,
      hasPaused: false,
      timerInterval: null,
      hintTextArea: "",
    }
  },
  computed:{
    formattedTimeLeft() {
      const minutes = Math.floor(this.timeLimit / 60);
      let seconds = this.timeLimit % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    },
  },
  methods:{
    startTimer(){
      if(!this.hasStarted){
        this.hasStarted = true;
        this.hasPaused = false;
        this.timerInterval = setInterval(() => this.timeLimit--, 1000)
      }
    },
    pauseTimer(){
      clearInterval(this.timerInterval);
      this.hasStarted = false;
      this.hasPaused = true;
    },
    resetTimer(){
      clearInterval(this.timerInterval);
      this.hasStarted = false;
      this.hasPaused = false;
      this.timeLimit = 3600;
    },
    hintSubmit(){
      console.log(this.hintTextArea);
      this.hintTextArea = "";
    }
  }
}

</script>

<style lang="scss">
.generalView{
  display: flex;
}

.controlsStyle{
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

  &:hover{
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

  &.disabled {
    background: none;
    border: 2px solid #e5e5e5;
    color: #e5e5e5;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
      background: none;
      cursor: inherit;
    }

    &:active {
      transform: none;
    }
  }

}

.timeWatch{
  display: flex;
  justify-content: center;
  width: 593px;
  height: 81px;
  margin: 66px 0 36px 0;

  border: 2px solid #FF4040;
  box-sizing: border-box;
  border-radius: 10px;

  &__counter {
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    display: flex;
    align-items: center;
  }
}

.timeControl{
  width: 410px;
  display: flex;
  justify-content: space-between;
  margin: 36px 0 36px 0;

  .pause {
    background: #FF4040;
    color: #e5e5e5;
    outline: none;
  }

}

.hintArea {
  display: flex;
  flex-direction: column;

  &__submit {
    width: 192px;
    height: 48px;
    margin: 19px 0 0 0;
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

.separatorLine {
  height: 852px;
  border: 2px solid #FF4040;
  margin: 0 55px 0 55px;
}

.rightPart {
  h1 {
    margin-bottom: 24px;
  }
.hintDisplay {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

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
}
</style>