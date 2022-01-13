<template>
  <div class="min-h-[100vh] bg-leafBackground bg-cover">
    <div
      class="mx-auto h-[inherit] w-full md:w-4/5 2xl:max-w-[1080px] py-[10%]"
    >
      <div
        class="
          bg-[rgb(252,250,235,0.7)]
          w-4/5
          h-3/5
          mx-auto
          flex flex-col
          xl:flex-row
          backdrop-filter backdrop-blur-lg
          rounded-3xl
          px-4
          md:px-12
          py-4
          md:py-8
        "
      >
        <div class="flex justify-center">
          <img src="@/assets/logo.png" class="w-96 h-auto my-auto" alt="" />
        </div>
        <div class="flex flex-grow">
          <div class="flex flex-col w-[100%] mx-auto px-2 py-4 md:px-4 md:py-8">
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
            <p class="font-roboto text-red_100 mt-2">{{ this.errorMessage }}</p>
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
      errorMessage: "",
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
        this.$router.push("/catalogue");
      } catch (e) {
        console.log("error");
      }
    },
    test() {
      console.log(this.guestData);
      if (this.validateInput() && this.validateEmail()) {
        this.$router.push("/catalogue");
      }
    },
    validateEmail() {
      if (
        !String(this.guestData.email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        this.errorMessage = "Invalid email!";
        return false;
      }
      return true;
    },
    validateInput() {
      if (
        this.guestData.name == "" ||
        this.guestData.email == "" ||
        this.guestData.asalDaerah == "" ||
        this.guestData.pekerjaan == ""
      ) {
        this.errorMessage = "Fill the required information!";
        return false;
      }
      return true;
    },
  },
};
</script>
