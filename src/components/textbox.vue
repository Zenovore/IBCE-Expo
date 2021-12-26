<template>
  <input
    class="
      border-[2px]
      font-roboto
      px-4
      py-2
      rounded-lg
      text-green_80
      placeholder-green_80
      bg-green_60
      my-3
      focus:bg-white focus:outline-none focus:border-black
    "
    @input="emitText($event.target.value)"
    type="text"
    :placeholder="this.placeholder"
    :value="this.modelValue"
  />
</template>

<script>
export default {
  props: {
    modelValue: String,
    placeholder: String,
  },
  methods: {
    emitText(text) {
      this.$emit("update:modelValue", text);
    },
  },
};
</script>

<style></style>
