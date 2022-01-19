<template>
  <div
    class="
      flex flex-col
      h-[100vh]
      w-full
      bg-whiteish
      justify-center
      items-center
    "
  >
    <img
      class="absolute bottom-0 right-0 md:w-1/2 lg:w-1/3"
      src="../assets/bgflower/bg3_bottomright.png"
      alt=""
    />
    <div class="relative">
      <h1 class="text-xl md:text-4xl font-lobster">
        See you at the main event and the next IBCE
      </h1>
      <!-- <h1 class="mt-2"> -->
      <a
        class="font-roboto text-2xl lg:text-5xl mt-2 hover:underline"
        href="https://bit.ly/KesanPesanExpoIBCE2022"
        >bit.ly/KesanPesanExpoIBCE2022</a
      >
    </div>
    <!-- </h1> -->
  </div>
</template>

<script>
export default {
  created() {
    // if (!this.$cookies.isKey("valid")) {
    // this.$router.push("/");
    // }
    console.log("sinta cantik");
  },
};
</script>

<style></style>
