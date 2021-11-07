<template>
  <div class="home">
    <form @submit.prevent="onSubmit">
      <div class="flex flex-col w-[80%] mx-auto">
        <label> Name </label>
        <input class="border-2" type="text" v-model="guestData.nama" />
        <label> asal Daerah </label>
        <input class="border-2" type="text" v-model="guestData.asalDaerah" />
        <label> email </label>
        <input class="border-2" type="email" v-model="guestData.email" />
        <label> pekerjaan </label>
        <input class="border-2" type="text" v-model="guestData.pekerjaan" />
        <!-- <router-link to="/about"> -->
        <button class="m-5 bg-blue-200 text-2xl w-[10%] rounded-md">
          Submit
        </button>
        <!-- </router-link> -->
      </div>
    </form>
    <button @click="changeRoute">apelapel</button>
  </div>
</template>

<script>
import { createGuest } from "../firebase.js";
export default {
  name: "Home",
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
        console.log("error");
      }
    },
  },
};
</script>
