<template>
  <div class="bg-green_105 relative rounded-xl p-5 w-60 md:rounded-2xl md:w-80">
    <div
      class="
        w-[12.5rem]
        h-[12.5rem]
        md:w-[17.5rem] md:h-[17.5rem]
        bg-white
        rounded-lg
        md:rounded-xl
        flex
        justify-center
      "
    >
      <img
        :src="this.src"
        :alt="this.alt"
        class="object-contain rounded-lg md:rounded-xl"
      />
    </div>
    <p class="text-white font-lobster pt-3 text-2xl md:text-3xl md:pt-5">
      {{ this.title }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    src: String,
    alt: String,
  },
};
</script>

<style></style>
