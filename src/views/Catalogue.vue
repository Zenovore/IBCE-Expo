<template>
  <div class="relative bg-whiteish min-h-screen w-full">
    <img
      class="absolute bottom-0 left-0 w-4/5 md:w-1/2 lg:w-2/5"
      src="../assets/bgflower/bg2_bottomleft.png"
      alt=""
    />
    <img
      class="absolute bottom-0 right-0 hidden md:block md:w-1/2 lg:w-2/5"
      src="../assets/bgflower/bg2_bottomright.png"
      alt=""
    />
    <card
      title="test"
      src="https://images.pexels.com/photos/2559931/pexels-photo-2559931.jpeg?cs=srgb&dl=pexels-kelly-l-2559931.jpg&fm=jpg"
      class=""
    ></card>
  </div>
</template>

<script>
import card from "../components/card.vue";
export default {
  components: { card },
};
</script>

<style></style>
