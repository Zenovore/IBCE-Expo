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
    <h1 class="text-4xl font-lobster">
      See you at the main event and the next IBCE
    </h1>
    <!-- <h1 class="mt-2"> -->
    <a
      class="font-roboto text-5xl mt-2 hover:underline"
      href="https://bit.ly/KesanPesanExpoIBCE2022"
      >bit.ly/KesanPesanExpoIBCE2022</a
    >
    <!-- </h1> -->
  </div>
</template>

<script>
export default {
  created() {
    if (!this.$cookies.isKey("valid")) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
