<template>
  <div class="GMPanel">
    <div class="leftPart">
      <h1>Soleil Levant</h1>
      <CountDown/>
      <hintArea></hintArea>
      <Screen></Screen>
    </div>

    <div class="separatorLine"></div>

    <div class="rightPart">
      <div class="hintDisplay">
        <Room1Mecanisms></Room1Mecanisms>
        <Room2Mecanisms></Room2Mecanisms>
      </div>
    </div>
  </div>


</template>

<script>
import CountDown from "@/components/CountDown";
import hintArea from "@/components/hintArea";
import Room1Mecanisms from "@/components/Room1Mecanisms";
import Room2Mecanisms from "@/components/Room2Mecanisms";
import Screen from  '@/views/Screen'

export default {
  name: "GMPanel",
  components: {
    Screen,
    CountDown,
    hintArea,
    Room1Mecanisms,
    Room2Mecanisms
  }
}
</script>

<style lang="scss">
.GMPanel{
  display: flex;
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
}

.leftPart {
  display: flex;
  flex-direction: column;
}

.hintDisplay {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>