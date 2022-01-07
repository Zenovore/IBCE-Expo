<template>
  <nav
    v-if="showData"
    class="
      py-2.5
      px-4
      font-roboto
      bg-headerPhone bg-top bg-cover
      md:bg-headerTablet md:bg-center md:bg-cover md:py-4
      xl:bg-headerDesktop
    "
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="#" class="flex">
        <img src="../assets/c_icon_128.png" alt="" class="w-10" />
      </a>
      <button
        type="button"
        class="
          inline-flex
          items-center
          p-2
          ml-3
          text-sm text-gray-500
          rounded-lg
          md:hidden
          hover:bg-gray-100focus:outline-none
          focus:ring-2 focus:ring-gray-200
          dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
        "
        @click="showMenu = !showMenu"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          class="hidden w-6 h-6"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="w-full hidden md:block md:w-auto">
        <ul
          class="
            flex flex-col
            mt-4
            md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium
          "
        >
          <li>
            <a
              href="/catalogue"
              class="
                block
                py-2
                pr-4
                pl-3
                text-white
                md:hover:bg-transparent md:border-0 md:hover:underline md:p-0
              "
              style="text-decoration-color: #f0c55a"
              aria-current="page"
              >CATALOGUE</a
            >
          </li>
          <li>
            <a
              href="/game"
              class="
                block
                py-2
                pr-4
                pl-3
                text-white
                md:hover:bg-transparent md:border-0 md:hover:underline md:p-0
              "
              style="text-decoration-color: #f0c55a"
              >GAME</a
            >
          </li>
          <li>
            <a
              href="/mainevent"
              class="
                block
                py-2
                pr-4
                pl-3
                text-white
                md:hover:bg-transparent md:border-0 md:hover:underline md:p-0
              "
              style="text-decoration-color: #f0c55a"
              >MAIN EVENT</a
            >
          </li>
        </ul>
      </div>
      <div class="w-full md:hidden md:w-auto" v-if="showMenu">
        <ul
          class="
            flex flex-col
            mt-4
            md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium
          "
        >
          <li>
            <a
              href="/catalogue"
              class="
                block
                py-2
                pr-4
                pl-3
                text-white text-left
                md:text-center
                md:hover:bg-transparent
                md:border-0
                md:hover:underline
                md:p-0
              "
              aria-current="page"
              style="text-decoration-color: #f0c55a"
              >CATALOGUE</a
            >
          </li>
          <li>
            <a
              href="/game"
              class="
                block
                py-2
                pr-4
                pl-3
                text-white text-left
                md:text-center
                md:hover:bg-transparent
                md:border-0
                md:hover:underline
                md:p-0
              "
              style="text-decoration-color: #f0c55a"
              >GAME</a
            >
          </li>
          <li>
            <a
              href="/mainevent"
              class="
                block
                py-2
                pr-4
                pl-3
                text-white text-left
                md:text-center
                md:hover:bg-transparent
                md:border-0
                md:hover:underline
                md:p-0
              "
              style="text-decoration-color: #f0c55a"
              >MAIN EVENT</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    showData: function () {
      return this.$route.path !== "/";
    },
  },
};
</script>

<style></style>
