<template>
  <div
    class="
      rounded-5xl
      bg-green_105
      text-white
      rounded-3xl
      mt-2
      relative
      py-6
      cursor-pointer
    "
  >
    <div
      class="
        rounded-5xl
        bg-green_80
        text-white
        py-3
        rounded-3xl
        absolute
        inset-0
        bottom-[6px]
        border-2
        border-green_105
        hover:bottom-[4px]
      "
    >
      <span
        class="
          absolute
          inset-0
          z-50
          my-auto
          h-[fit-content]
          font-roboto font-bold
        "
        >VISIT</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "mainButton",
};
</script>

<style></style>
