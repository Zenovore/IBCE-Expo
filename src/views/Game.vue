<template>
  <div class="relative bg-whiteish min-h-screen w-full">
    <img
      class="absolute bottom-0 left-0 w-4/5 md:w-1/2 lg:w-2/5"
      src="../assets/bgflower/bg3_bottomleft.png"
      alt=""
    />
    <img
      class="absolute bottom-0 right-0 hidden md:block md:w-1/2 lg:w-2/5"
      src="../assets/bgflower/bg3_bottomright.png"
      alt=""
    />
    <div class="relative">
      <!-- <Wheel
        ref="wheel"
        :gift="gift"
        :data="data"
        @done="done"
        :imgParams="logo"
        @click="spinTheWheel"
      ></Wheel> -->
      <!-- <VueWinWheel
        class="mx-auto w-[fit-content]"
        :segments="options"
      ></VueWinWheel> -->
      <VueWinWheel class="mx-auto w-[fit-content]" />
      <div id="explanation" class="flex flex-col pt-5">
        <img src="" alt="" />
        <h1 class="text-4xl font-lobster">Judul</h1>
        <p class="font-roboto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nam
          debitis aut at cum molestias incidunt nemo earum suscipit vero id
          nesciunt minus libero, ut consequuntur! Totam fugiat ut veritatis!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import VueWinWheel from "../components/wheel.vue";
// import "vue3-fortune-wheel/dist/library.css";
// import VueWinwheel from "vue-winwheel/vue-winwheel";
export default {
  components: { VueWinWheel },
  data() {
    return {
      options: [
        {
          textFillStyle: "#fff",
          fillStyle: "#000",
          text: "Prize 1",
        },
        {
          textFillStyle: "#000",
          fillStyle: "#fadede",
          text: "Prize 2",
        },
        {
          textFillStyle: "#fff",
          fillStyle: "#000",
          text: "Prize 3",
        },
        {
          textFillStyle: "#000",
          fillStyle: "#fadede",
          text: "Prize 4",
        },
        {
          textFillStyle: "#fff",
          fillStyle: "#000",
          text: "Prize 5",
        },
        {
          textFillStyle: "#000",
          fillStyle: "#fadede",
          text: "Prize 6",
        },
        {
          textFillStyle: "#fff",
          fillStyle: "#000",
          text: "Prize 7",
        },
        {
          textFillStyle: "#000",
          fillStyle: "#fadede",
          text: "Prize 8",
        },
      ],
    };
  },
};
</script>
<style></style>
