<template>
  <div
    class="
      bg-green_105
      relative
      rounded-xl
      p-5
      w-80
      md:rounded-2xl md:p-7 md:w-96
      xl:rounded-3xl xl:p-8 xl:w-[32rem]
    "
  >
    <div
      class="
        w-[17.5rem]
        h-[17.5rem]
        md:w-[20.5rem] md:h-[20.5rem]
        xl:w-[28rem] xl:h-[28rem]
      "
    >
      <img
        :src="this.src"
        :alt="this.alt"
        class="
          object-cover
          rounded-lg
          w-[17.5rem]
          h-[17.5rem]
          md:rounded-xl md:w-[20.5rem] md:h-[20.5rem]
          xl:rounded-2xl xl:w-[28rem] xl:h-[28rem]
        "
      />
    </div>
    <p
      class="
        text-white
        font-lobster
        pt-3
        text-2xl
        md:text-3xl md:pt-[1.05rem]
        xl:pt-[1.2rem]
      "
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
