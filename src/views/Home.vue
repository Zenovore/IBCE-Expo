<template>
  <div class="w-[100vw] h-[100vh] bg-leafBackground bg-cover">
    <div class="mx-auto w-4/5 2xl:max-w-[1080px] pt-[10%]">
      <div
        class="
          bg-[rgb(252,250,235,0.7)]
          w-4/5
          h-3/5
          mx-auto
          flex flex-row
          backdrop-filter backdrop-blur-lg
          rounded-3xl
          px-12
          py-10
        "
      >
        <div class="flex">
          <img src="@/assets/logo.png" class="w-auto h-72 my-auto" alt="" />
        </div>
        <form @submit.prevent="onSubmit" class="flex flex-grow">
          <div class="flex flex-col w-[100%] mx-auto px-4 py-8">
            <input
              class="
                border-[1px]
                px-4
                py-2
                rounded-lg
                text-green_80
                placeholder-green_80
                bg-green_60
                my-3
              "
              type="text"
              v-model="guestData.nama"
              placeholder="Nama"
            />
            <input
              class="
                border-[1px]
                px-4
                py-2
                rounded-lg
                text-green_80
                placeholder-green_80
                bg-green_60
                my-3
              "
              type="text"
              v-model="guestData.asalDaerah"
              placeholder="Institusi / Asal Daerah"
            />
            <input
              class="
                border-[1px]
                px-4
                py-2
                rounded-lg
                text-green_80
                placeholder-green_80
                bg-green_60
                my-3
              "
              type="text"
              v-model="guestData.pekerjaan"
              placeholder="Pekerjaan"
            />
            <input
              class="
                border-[1px]
                px-4
                py-2
                rounded-lg
                text-green_80
                placeholder-green_80
                bg-green_60
                my-3
              "
              type="email"
              v-model="guestData.email"
              placeholder="Email"
            />

            <!-- <button class="m-5 bg-blue-200 text-2xl w-[10%] rounded-md">
              Submit
            </button> -->
            <mainButton></mainButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { createGuest } from "../firebase.js";
import mainButton from "../components/mainButton.vue";
export default {
  name: "Home",
  components: { mainButton },
  data() {
    return {
      guestData: {
        nama: "",
        email: "",
        asalDaerah: "",
        pekerjaan: "",
      },
    };
  },
  methods: {
    async changeRoute() {
      try {
        await createGuest({ ...this.guestData });
        this.guestData.nama = "";
        this.guestData.email = "";
        this.guestData.asalDaerah = "";
        this.guestData.pekerjaan = "";
        this.$router.push("/about");
      } catch (e) {
        // console.log("error");
      }
    },
  },
};
</script>
