<template>
  <div
    class="
      bg-green_105
      relative
      rounded-xl
      p-5
      w-60
      md:rounded-2xl md:p-7 md:w-80
    "
  >
    <div class="w-[12.5rem] h-[12.5rem] md:w-[16.5rem] md:h-[16.5rem]">
      <img
        :src="this.src"
        :alt="this.alt"
        class="
          object-cover
          rounded-lg
          w-[12.5rem]
          h-[12.5rem]
          md:rounded-xl md:w-[16.5rem] md:h-[16.5rem]
        "
      />
    </div>
    <p
      class="text-white font-lobster pt-3 text-2xl md:text-3xl md:pt-[1.05rem]"
    >
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
