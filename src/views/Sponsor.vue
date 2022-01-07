<template>
  <div class="relative bg-whiteish min-h-screen w-full mx-auto 2xl:px-[10vw]">
    <img
      class="absolute bottom-0 right-0 w-2/5 md:w-1/3 lg:w-1/3"
      src="../assets/bgflower/bg1_bottomright.png"
      alt=""
    />
    <div class="flex flex-col justify-center py-20 relative">
      <img
        v-if="name == 'blu'"
        class="w-72 sm:w-96 self-center"
        src="../assets/sponsor/blu2.png"
        alt="test"
      />
      <h1 class="text-4xl font-lobster mt-6 mb-6">
        {{ selectedSponsor.nama }}
      </h1>
      <pre
        class="
          text-lg
          lg:text-xl
          font-roboto
          px-12
          md:px-24
          xl:pr-[34rem]
          2xl:pr-[42rem]
          text-left
          whitespace-pre-line
        "
      >
        {{ selectedSponsor.content }}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
  data() {
    return {
      sponsorData: {
        blu: {
          nama: "blu by BCA Digital",
          content:
            "Hi! Ini blu, aplikasi mobile banking dari BCA Digital, salah satu perusahaan anak dari BCA Group. blu senang bisa berkenalan dengan kamu!\n blu hadir dengan tujuan memudahkan kamu dengan segala fiturnya. Yuk, cobain beragam fitur dari blu! \n Ngatur banyak tabungan dalam satu rekening? Bisa pake bluSaving. Patungan online buat liburan ramean? Pake bluGether pasti bisa jalan. \n Pengen buka Deposito tapi cuma punya 1juta? bluDeposit aja. Transaksi ini itu, semua bisa dalam genggaman kamu! \n\n Pengen kenal lebih dekat sama blu? Cuss, download aplikasi blu by BCA Digital di Play Store atau App Store sekarang juga! #MulaiLangkahmu bareng blu! #YangPentingLakuin",
        },
      },
      selectedSponsor: "",
    };
  },
  created() {
    if (!this.sponsorData[this.name]) {
      this.$router.push("/404");
    }
    this.selectedSponsor = this.sponsorData[this.name];
  },
};
</script>
<style></style>
