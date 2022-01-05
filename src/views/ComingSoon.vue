<template>
  <div
    class="
      flex
      h-[100vh]
      bg-leafBackground bg-cover
      justify-center
      items-center
    "
  >
    <kinesis-container
      class="
        flex
        h-full
        w-full
        bg-[rgb(0,0,0,0.2)]
        justify-center
        backdrop-blur-sm
        items-center
      "
    >
      <kinesis-element :strength="10">
        <img
          class="w-56 lg:w-96 pointer-events-none"
          src="../assets/comingsoon.svg"
          alt=""
        />
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  name: "comingsoon",
  components: {
    KinesisContainer,
    KinesisElement,
  },
};
</script>

<style></style>
