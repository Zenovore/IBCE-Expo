<template>
  <div class="relative bg-whiteish min-h-screen w-full">
    <img
      class="absolute bottom-0 left-0 w-4/5 md:w-1/2 lg:w-2/5"
      src="../assets/bgflower/bg3_bottomleft.png"
      alt=""
    />
    <img
      class="absolute bottom-0 right-0 hidden md:block md:w-1/2 lg:w-2/5"
      src="../assets/bgflower/bg3_bottomright.png"
      alt=""
    />
    <div class="relative">
      <!-- <Wheel
        ref="wheel"
        :gift="gift"
        :data="data"
        @done="done"
        :imgParams="logo"
        @click="spinTheWheel"
      ></Wheel> -->
      <!-- <VueWinWheel
        class="mx-auto w-[fit-content]"
        :segments="options"
      ></VueWinWheel> -->
      <VueWinWheel
        class="mx-auto w-[fit-content]"
        @spinDone="(id) => showPrize(id)"
        :segments="options"
      />
      <div
        v-if="prize.name != ''"
        id="explanation"
        class="flex flex-col pt-5 h-[50vh] py-[5vh]"
      >
        <img
          class="w-96 rounded-md mx-auto h-auto"
          :src="require('../assets/games/' + prize.pict)"
          alt=""
        />
        <h1 class="text-4xl font-lobster my-2">{{ prize.name }}</h1>
        <p class="font-roboto">
          {{ prize.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import VueWinWheel from "../components/wheel.vue";
// import "vue3-fortune-wheel/dist/library.css";
// import VueWinwheel from "vue-winwheel/vue-winwheel";
export default {
  components: { VueWinWheel },
  data() {
    return {
      options: [
        {
          textFillStyle: "#fff",
          fillStyle: "#000",
          text: "Bioengineering",
          id: 0,
        },
        {
          textFillStyle: "#000",
          fillStyle: "#fadede",
          text: "IBCE",
          id: 1,
        },
        {
          textFillStyle: "#fff",
          fillStyle: "#000",
          text: "HMRH",
          id: 2,
        },
        {
          textFillStyle: "#000",
          fillStyle: "#fadede",
          text: "Functional Food",
          id: 3,
        },
        {
          textFillStyle: "#fff",
          fillStyle: "#000",
          text: "Fiber ",
          id: 4,
        },
        {
          textFillStyle: "#000",
          fillStyle: "#fadede",
          text: "Fine Chemical",
          id: 5,
        },
        {
          textFillStyle: "#fff",
          fillStyle: "#000",
          text: "Food",
          id: 6,
        },
        {
          textFillStyle: "#000",
          fillStyle: "#fadede",
          text: "Fuel",
          id: 7,
        },
        {
          textFillStyle: "#fff",
          fillStyle: "#fadede",
          text: "Fertilizer",
          id: 8,
        },
        {
          textFillStyle: "#000",
          fillStyle: "#fadede",
          text: "Feed  ",
          id: 9,
        },
      ],
      prize: {
        name: "",
        pict: "",
        id: "",
        desc: "",
      },
      prizeList: {
        0: {
          name: "BIOENGINEERING ",
          pict: "IBCE.png",
          desc: "Rekayasa Hayati (Bioengineering) adalah interdisiplin ilmu kehayatan dan teknik yang diaplikasikan dalam perekayasaan berbasis biosistem untuk meningkatkan efisiensi fungsi dan manfaat untuk bioindustri. Rekayasa Hayati mempelajari perancangan suatu sistem produksi berbasis hayati dan scale up rancangan hingga skala industri.",
        },
        1: {
          name: "IBCE",
          pict: "IBCE.png",
          desc: "IBCE (Integrated Bioengineering Competition and Events) merupakan serangkaian acara dengan konten keilmuan dan keprofesian Program Studi Rekayasa Hayati atau Bioengineering Institut Teknologi Bandung yang bertujuan mengenalkan ruang lingkup dan peran rekayasa hayati kepada khalayak luas.",
        },
        2: {
          name: "HMRH ",
          pict: "HMRH.png",
          desc: "Himpunan Mahasiswa Rekayasa Hayati (HMRH) merupakan sebuah himpunan dari program studi Rekayasa Hayati yang berada di ITB Kampus Jatinangor, dan berdiri pada tanggal 27 Maret 2013. HMRH memiliki kegiatan utama yaitu pengembangan anggota dalam keilmuan dan keprofesian Rekayasa Hayati dan pengabdian masyarakat di daerah Jatinangor. Berkarya bersama untuk meraih kejayaan HMRH",
        },
        3: {
          name: "Functional Food",
          pict: "FUNCTIONAL-FOOD.jpg",
          desc: "makanan yang dapat memberikan manfaat kesehatan melebihi nilai gizi yang dikandungnya, dapat meningkatkan respon fisiologis tertentu dan/atau mengurangi risiko penyakit, contohnya yogurt, minyak omega-3, dan susu.",
        },
        4: {
          name: "Fiber",
          pict: "FIBER.jpg",
          desc: "karbohidrat yang ditemukan secara alami pada tumbuhan dan tidak dapat dicerna manusia, contohnya adalah bioplastik dari singkong.",
        },
        5: {
          name: "Fine Chemical",
          pict: "FINE-CHEMICAL.jpg",
          desc: "senyawa kimia tunggal, murni, dan kompleks yang hanya diproduksi dalam jumlah kecil oleh tanaman tertentu, contohnya adalah fenol, keton, dan aldehid.",
        },
        6: {
          name: "Food",
          pict: "FOOD.jpg",
          desc: "zat yang mengandung protein, karbohidrat, lemak, dan nutrien lainnya yang memberikan energi untuk mempertahankan pertumbuhan dan proses vital pada organisme.",
        },
        7: {
          name: "Fuel ",
          pict: "FUEL.png",
          desc: "materi yang dapat bereaksi dengan senyawa lain sehingga dapat diubah menjadi energi, contohnya biodiesel dari mikroalga",
        },
        8: {
          name: "Fertilizer ",
          pict: "FERTILIZER.jpg",
          desc: "senyawa kimia yang diaplikasikan pada tanaman untuk meningkatkan produktivitasnya",
        },
        9: {
          name: "Feed ",
          pict: "FEED.jpg",
          desc: "makanan yang diberikan kepada hewan, utamanya hewan ternak",
        },
      },
    };
  },
  methods: {
    showPrize(id) {
      console.log("this id is");
      console.log(id);
      if (this.prize.id != id) {
        this.prize.id = id;
        this.prize.name = this.prizeList[id].name;
        this.prize.pict = this.prizeList[id].pict;
        this.prize.desc = this.prizeList[id].desc;
        document.getElementById("explanation").scrollIntoView({
          behavior: "smooth",
        });
      }
    },
  },
};
</script>
<style></style>
