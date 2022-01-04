<template>
  <div class="relative bg-whiteish min-h-screen w-full">
    <img
      class="
        absolute
        bottom-0
        left-0
        w-4/5
        md:w-1/2
        lg:w-2/5
        pointer-events-none
      "
      src="../assets/bgflower/bg2_bottomleft.png"
      alt=""
    />
    <img
      class="
        absolute
        bottom-0
        right-0
        hidden
        md:block md:w-1/2
        lg:w-2/5
        pointer-events-none
      "
      src="../assets/bgflower/bg2_bottomright.png"
      alt=""
    />
    <div class="flex justify-center py-20 z-[100] relative">
      <accordion></accordion>
    </div>
  </div>
</template>

<script>
import accordion from "../components/Accordion.vue";
export default {
  components: { accordion },
};
</script>

<style></style>
