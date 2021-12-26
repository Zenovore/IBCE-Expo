<template>
  <div class="h-[100vh] bg-leafBackground bg-cover">
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
        <div class="flex flex-grow">
          <div class="flex flex-col w-[100%] mx-auto px-4 py-8">
            <textbox v-model="guestData.nama" placeholder="Nama"></textbox>
            <textbox
              v-model="guestData.asalDaerah"
              placeholder="Asal Daerah"
            ></textbox>
            <textbox
              v-model="guestData.pekerjaan"
              placeholder="Pekerjaan"
            ></textbox>
            <textbox v-model="guestData.email" placeholder="Email"></textbox>

            <!-- <button class="m-5 bg-blue-200 text-2xl w-[10%] rounded-md">
              Submit
            </button> -->
            <mainButton @click="test"></mainButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createGuest } from "../firebase.js";
import mainButton from "../components/mainButton.vue";
import textbox from "../components/textbox.vue";
export default {
  name: "Home",
  components: { mainButton, textbox },
  data() {
    return {
      guestData: {
        nama: "",
        asalDaerah: "",
        pekerjaan: "",
        email: "",
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
        console.log("error");
      }
    },
    test() {
      console.log(this.guestData);
    },
  },
};
</script>
