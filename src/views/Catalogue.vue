<template>
  <div class="relative bg-whiteish min-h-screen w-full">
    <img
      class="
        absolute
        bottom-0
        left-0
        w-4/5
        md:w-1/2
        lg:w-2/5
        pointer-events-none
      "
      src="../assets/bgflower/bg2_bottomleft.png"
      alt=""
    />
    <img
      class="
        absolute
        bottom-0
        right-0
        hidden
        md:block md:w-1/2
        lg:w-2/5
        pointer-events-none
      "
      src="../assets/bgflower/bg2_bottomright.png"
      alt=""
    />
    <div class="flex flex-col justify-center items-center py-24 gap-4 relative">
      <div class="flex flex-col md:flex-row gap-16">
        <a href="/sponsor/blu">
          <card title="blu by BCA Digital" :src="images.blu"></card>
        </a>
        <a href="/sponsor/paragon">
          <card title="Paragon" :src="images.paragon"></card>
        </a>
      </div>
      <div class=""></div>
      <accordion
        :title="'2017-2018'"
        :background="'bunga1'"
        :background2="'bunga2'"
        :fileData="catalogueData['2017-2018']"
      ></accordion>
      <accordion
        :title="'2018-2019'"
        :background="'bunga3'"
        :background2="'bunga4'"
        :fileData="catalogueData['2018-2019']"
      ></accordion>
      <accordion
        :title="'2019-2020'"
        :background="'bunga3'"
        :background2="'bunga4'"
        :fileData="catalogueData['2019-2020']"
      ></accordion>
      <accordion
        :title="'2020-2021'"
        :background="'bunga3'"
        :background2="'bunga4'"
        :fileData="catalogueData['2020-2021']"
      ></accordion>
      <accordion
        :title="'2021-2022'"
        :background="'bunga3'"
        :background2="'bunga4'"
        :fileData="catalogueData['2021-2022']"
      ></accordion>
    </div>
  </div>
</template>

<script>
import accordion from "../components/Accordion.vue";
import card from "../components/card.vue";

export default {
  components: { accordion, card },
  data() {
    return {
      catalogueData: {
        "2017-2018": {
          0: {
            id: 0,
            judul:
              "BIOSTUR (BIOCHAR SRI AGRICULTURE) PENERAPAN SRI (SYSTEM OF RICE INTENSIFICATION) DAN PENGGUNAAN MEDIA TUMBUH BIOCHAR PADA SISTEM PERTANIAN TERPADU MENUJU INDONESIA RENDAH EMISI GAS RUMAH KACA 2030",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2017-2018%2FBIOSTU~1.PDF?alt=media&token=5bec8853-61ef-4366-a7d7-14ac34b85edf",
            type: "pdf",
          },
          1: {
            id: 1,
            judul:
              "DESAIN AWAL SISTEM PRODUKSI PENGOLAHAN BUAH RAMBUTAN (NEPHELIUM LAPPACEUM L.) DENGAN PENERAPAN KONSEP BIOREFINERY SEBAGAI UPAYA DIVERSIFIKASI PRODUK DAN PENINGKATAN NILAI  EKONOMI BUAH RAMBUTAN",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2017-2018%2FDESAIN~1.PDF?alt=media&token=30642c93-9e5f-4f40-a546-568e01d8e881",
            type: "pdf",
          },
          2: {
            id: 2,
            judul:
              "Dewaruci - Removal of Microplastic Pollution in the Ocean Using Biofilm - based Polyethylen Terephthalate (PET) Degadration",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2017-2018%2FDewaruci%20-%20Removal%20of%20Microplastic%20Pollution%20in%20the%20Ocean%20Using%20Biofilm%20-%20based%20Polyethylen%20Terephthalate%20(PET)%20Degadration.pdf?alt=media&token=acfadd6a-a140-4485-9883-173e82324fc9",
            type: "pdf",
          },
          3: {
            id: 3,
            judul:
              "FITOREMEDIASI AIR ASAM TAMBANG (AAT)  MENGGUNAKAN ECENG GONDOK (EICHHORNIA CRASSIPES), RUMPUT PAYUNG (CYPERUS ALTERNIFOLIUS), DAN LEMBANG (TYPHA LATIFOLIA) DENGAN..",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2017-2018%2FFITOREMEDIASI%20AIR%20ASAM%20TAMBANG%20(AAT)%20%20MENGGUNAKAN%20ECENG%20GONDOK%20(EICHHORNIA%20CRASSIPES)%2C%20RUMPUT%20PAYUNG%20(CYPERUS%20ALTERNIFOLIUS)%2C%20DAN%20LEMBANG%20(TYPHA%20LATIFOLIA)%20DENGAN...pdf?alt=media&token=e9dc2f5d-2a79-4b77-9676-48871fdc8f9b",
            type: "pdf",
          },
          4: {
            id: 4,
            judul:
              "Integrated Cultivation of Coffee and T etra gon ul a Bees Using a Bio refinery Concept Towards Sustainable Bioindustry Development",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2017-2018%2FIntegrated%20Cultivation%20of%20Coffee%20and%20T%20etra%20gon%20ul%20a%20Bees%20Using%20a%20Bio%20refinery%20Concept%20Towards%20Sustainable%20Bioindustry%20Development.pdf?alt=media&token=2218aab8-066d-4f62-8674-f848eef5e81b",
            type: "pdf",
          },
          5: {
            id: 5,
            judul:
              "MANGOTHANOL PENERAPAN KONSEP BIOREFINERY DALAM PEMANFAATAN KULIT DAN BIJI MANGGA (Mangifera indica) SEBAGAI BAHAN BAKU BIOETANOL MENUJU INDONESIA ENERGY MIX 2025 DAN SUSTAINABLE DEVELOPMENT GOALS 2030",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2017-2018%2FMANGOT~1.PDF?alt=media&token=aa2b547e-9172-464c-be72-4c0a5335449b",
            type: "pdf",
          },
          6: {
            id: 6,
            judul:
              "Mathematical Modelling of Coffee Husk Drying in Applying Biorefinery  Concept Towards Sustainable Industrial Development",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2017-2018%2FMathematical%20Modelling%20of%20Coffee%20Husk%20Drying%20in%20Applying%20Biorefinery%20%20Concept%20Towards%20Sustainable%20Industrial%20Development.pdf?alt=media&token=c4acdc3d-6343-48bc-80d1-815729f61b34",
            type: "pdf",
          },
          7: {
            id: 7,
            judul:
              "POTENSI HASIL FERMENTASI LIMBAH PADAT DAUN KAYU PUTIH (Melaleuca cajuputi) MENGGUNAKAN BAKTERI PROBIOTIK  SEBAGAI PAKAN SAPI PERAH",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2017-2018%2FPOTENSI%20HASIL%20FERMENTASI%20LIMBAH%20PADAT%20DAUN%20KAYU%20PUTIH%20(Melaleuca%20cajuputi)%20MENGGUNAKAN%20BAKTERI%20PROBIOTIK%20%20SEBAGAI%20PAKAN%20SAPI%20PERAH.pdf?alt=media&token=72d0d5ed-4aa0-4379-a968-3fcfeceedde8",
            type: "pdf",
          },
          8: {
            id: 8,
            judul:
              "Preliminary Design of Mangosteen (Garcinia mangostana) Peel Valorization to Produce High Antioxidant Extract and Nutrient Rich Biomass from Black Soldier Fly (Hermetia illucens) Larvae by Applying a  Biorefinery Concept",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2017-2018%2FPRELIM~1.PDF?alt=media&token=1ef2c450-eed2-44cc-8c98-cba191d3470b",
            type: "pdf",
          },
          9: {
            id: 9,
            judul:
              "Production of Concentrated Natural Rubber Latex, Biosurfactant, L-Quebrachitol, and Crude Rubber Seed Oil from Hevea brasiliensis  through Biorefinery Concept",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2017-2018%2FProduction%20of%20Concentrated%20Natural%20Rubber%20Latex%2C%20Biosurfactant%2C%20L-Quebrachitol%2C%20and%20Crude%20Rubber%20Seed%20Oil%20from%20Hevea%20brasiliensis%20%20through%20Biorefinery%20Concept.pdf?alt=media&token=53ea299c-216c-44a7-b249-5065d113a9e4",
            type: "pdf",
          },
          10: {
            id: 10,
            judul:
              "PRODUKSI XANTHAN MENGGUNAKAN LIMBAH AGROINDUSTRI BERUPA KULIT PISANG OLEH XANTHOMONAS CAMPESTRIS UNTUK MENYOKONG TERWUJUDNYA SDG’S 2030",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2017-2018%2FPRODUKSI%20XANTHAN%20MENGGUNAKAN%20LIMBAH%20AGROINDUSTRI%20BERUPA%20KULIT%20PISANG%20OLEH%20XANTHOMONAS%20CAMPESTRIS%20UNTUK%20MENYOKONG%20TERWUJUDNYA%20SDG%E2%80%99S%202030.pdf?alt=media&token=5c0933d4-abb6-4e2b-a4b1-7b2c3d02e966",
            type: "pdf",
          },
          11: {
            id: 11,
            judul:
              "SISTEM PRODUKSI TERINTEGRASI KOPI DAN CASCARA SEBAGAI SOLUSI PEMANFAATAN LIMBAH KULIT KOPI DAN PENGEMBANGAN MASYARAKAT RURAL DALAM MENYONGSONG  SDGs 2030",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2017-2018%2FSISTEM%20PRODUKSI%20TERINTEGRASI%20KOPI%20DAN%20CASCARA%20SEBAGAI%20SOLUSI%20PEMANFAATAN%20LIMBAH%20KULIT%20KOPI%20DAN%20PENGEMBANGAN%20MASYARAKAT%20RURAL%20DALAM%20MENYONGSONG%20%20SDGs%202030.pdf?alt=media&token=ece2a736-cf9b-41cd-82ac-f3fd2998313a",
            type: "pdf",
          },
        },
        "2018-2019": {
          0: {
            id: 0,
            judul:
              "AN INNOVATION TOWARDS FUEL AND COST OPTIMIZATION FOR CORN DRYING PROCESS IN FEED INDUSTRY",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2018-2019%2FAN%20INNOVATION%20TOWARDS%20FUEL%20AND%20COST%20OPTIMIZATION%20FOR%20CORN%20DRYING%20PROCESS%20IN%20FEED%20INDUSTRY.pdf?alt=media&token=383246c9-0251-4f52-8f03-19af4b7f7be6",
            type: "pdf",
          },
          1: {
            id: 1,
            judul:
              "Application of Turmeric (Curcuma longa L.) Sterilization and Drying Time on Optimization of Turmeric Essential Oil with Applying Biorefinery Concept Toward Sustainable Industrial Development",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2018-2019%2FAPPLIC~1.PDF?alt=media&token=80547f7d-4c48-452e-840f-08b0fa111b25",
            type: "pdf",
          },
          2: {
            id: 2,
            judul:
              "BIONIGRUM BIOFUNGISIDA DARI EKSTRAK LEUNCA (Solanum nigrum L) UNTUK MENGATASI PENYAKIT BERCAK ALTERNARIA  AKIBAT JAMUR Alternaria brassicicola PADA TANAMAN KUBIS- KUBISAN (BRASSICACEAE)",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2018-2019%2FBIONIG~1.PDF?alt=media&token=037c023b-0e4e-4f44-8aee-1b3b2526aa50",
            type: "pdf",
          },
          3: {
            id: 3,
            judul:
              "CASCARA BOX Alat Pengeringan Kulit Ceri Kopi Menjadi Cascara dengan Sistem Pengendalian Suhu Terkontrol Sebagai Upaya Penerapan Konsep Industri 4.0 dan Biorefinery  pada Agroindustri Berbasis Kopi",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2018-2019%2FCASCAR~1.PDF?alt=media&token=b8cbb23c-9f23-4459-9390-47e9311888b7",
            type: "pdf",
          },
          4: {
            id: 4,
            judul:
              "OPTIMALISASI FITOREMEDIASI LOGAM KROMIUM PADA LIMBAH CAIR PENYAMAKAN KULIT DI KABUPATEN GARUT MENGGUNAKAN TANAMAN ECENG GONDOK (Eichhornia crassipes), LEMBANG (Typha angustifolia), DAN TAPAK DARA (Catharanthus roseus)",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2018-2019%2FOPTIMA~1.PDF?alt=media&token=8b17feca-8245-435e-8b58-8b32c8108490",
            type: "pdf",
          },
          5: {
            id: 5,
            judul:
              "OPTIMALISASI PRODUKSI BIODIESEL DARI MIKROALGA NEOCHLORIS OLEOABUNDANS DENGAN DEFISIENSI NITROGEN PADA LIMBAH INDUSTRI KERTAS SEBAGAI DAYA DUKUNG TERHADAP AFFORDABLE AND CLEAN ENERGY SDG’S 2030",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2018-2019%2FOPTIMA~2.PDF?alt=media&token=66afcdf4-cfb0-4f74-8d9a-95d29bbcd5cf",
            type: "pdf",
          },
          6: {
            id: 6,
            judul:
              "PENGOLAHAN SAMPAH ORGANIK PASAR TRADISIONAL MENJADI BIODIESEL MENGGUNAKAN AGEN HAYATI BLACK SOLDIER FLY (HERMETIA ILLUCENS) SEBAGAI UPAYA PENGURANGAN LIMBAH DAN PENINGKATAN KETERSEDIAAN BAHAN BAKAR RAMAH LINGKUNGAN",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2018-2019%2FPENGOL~1.PDF?alt=media&token=1d30d241-30e6-4d12-a599-9f603136b2fb",
            type: "pdf",
          },
          7: {
            id: 7,
            judul:
              "PHY-DUCK Sistem Fitoremediasi Fosfat dari Limbah Pupuk Cair dengan Menggunakan Duckweed (Spirodela sp.) Terintegrasi dengan Sistem Produksi Biofuel melalui Penerapan Konsep Biorefinery..",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2018-2019%2FPHY-DU~1.PDF?alt=media&token=79694eef-f6f5-41e8-998c-48f47bedc829",
            type: "pdf",
          },
          8: {
            id: 8,
            judul:
              "Preliminary Design of High Yield Patchouli (Pogostemon cablin Benth.) Oil Production System with Phosphate Fertilizer Treatment and Nutrient Rich Biomass Production from Black Soldier Flies (Hermetia illucens)  Larvae by Applying a Biorefinery Concept",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2018-2019%2FPRELIM~3.PDF?alt=media&token=08a38f73-f4ec-4ccd-a20c-0b9509e2fe7d",
            type: "pdf",
          },
          9: {
            id: 9,
            judul:
              "Preliminary Design of Phytoremediation of Phosphate From Liquid Fertilizer Waste by Duckweed (Spirodela sp.) and Yellow Iris (Iris pseudacorus L.) Integrated with Processing System to Produce Value  Added Bioproducts Using Biorefinery Concept",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2018-2019%2FPRELIM~2.PDF?alt=media&token=35568d6a-ee15-406f-9784-c0e571abc2e4",
            type: "pdf",
          },
          10: {
            id: 10,
            judul:
              "Preliminary Design of Production Antimicrobial Solutions from Lemon  Peels by Applying Biorefinery Concept with Modelling Studies on Pre- treatment Drying Process",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2018-2019%2FPreliminary%20Design%20of%20Production%20Antimicrobial%20Solutions%20from%20Lemon%20%20Peels%20by%20Applying%20Biorefinery%20Concept%20with%20Modelling%20Studies%20on%20Pre-%20treatment%20Drying%20Process.pdf?alt=media&token=38760b23-b09b-4765-bb69-f89c9dbb4667",
            type: "pdf",
          },
          11: {
            id: 11,
            judul:
              "Preliminary Design of Sugarcane (Saccharum of icinarum L.) Processing System to Produce Sugar and Various Value Added Byproducts Using  Biorefinery Concept",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2018-2019%2FPreliminary%20Design%20of%20Sugarcane%20(Saccharum%20of%20icinarum%20L.)%20Processing%20System%20to%20Produce%20Sugar%20and%20Various%20Value%20Added%20Byproducts%20Using%20%20Biorefinery%20Concept.pdf?alt=media&token=04261c5d-a893-4041-936a-599120be23b2",
            type: "pdf",
          },
        },
        "2019-2020": {
          0: {
            id: 0,
            judul:
              "Desain Awal Pengolahan Pisang (Musa sp.) Berkelanjutan Menggunakan Larva Black Soldier Fly (Hermetia illucens) dan Cacing Merah (Eisenia fetida) yang Kaya Nutrisi dengan Memanfaatkan Konsep Biorefinery",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2019-2020%2FDESAIN~1.PDF?alt=media&token=e4c03886-b421-4db9-838f-49c7b8b02291",
            type: "pdf",
          },
          1: {
            id: 1,
            judul:
              "Fikoremediasi Ammonia dari Limbah ADDMW Hasil dari Prose Pengolahan Kotoran Sapi Menjadi Biogas Menggunakan  Mikroalga (Chlorella vulgaris) Terintegrasi dengan Sistem Produksi Suplemen Bubuk Chlorella dalam..",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2019-2020%2FFIKORE~1.PDF?alt=media&token=cc266db8-16ba-4508-9872-e942bda7de9d",
            type: "pdf",
          },
          2: {
            id: 2,
            judul:
              "Fikoremediasi Nitrat dari Limbah ADDMW (Anaerobically Digesrid Dairy",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2019-2020%2FFikoremediasi%20Nitrat%20dari%20Limbah%20ADDMW%20(Anaerobically%20Digesrid%20Dairy.pdf?alt=media&token=03173e93-868e-4ca5-8965-e9c449095f62",
            type: "pdf",
          },
          3: {
            id: 3,
            judul:
              "Kajian Potensi Pengembangan Agroindustri Singkong (Manihot esculenta) Melalui Transformasi Kelambagaan di Desa Cibeusi",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2019-2020%2FKajian%20Potensi%20Pengembangan%20Agroindustri%20Singkong%20(Manihot%20esculenta)%20Melalui%20Transformasi%20Kelambagaan%20di%20Desa%20Cibeusi.pdf?alt=media&token=87881de0-03c1-429b-89d1-2c26f489b342",
            type: "pdf",
          },
          4: {
            id: 4,
            judul:
              "Penerapan Konsep Biorefinery dalam Produksi Minyak Ulat Hongkong (Tenebrio molitor) Hasil Konversi Bagasse Limbah  Padat Tebu (Saccharum officinarum) sebagai Bahan Baku Potensial Biodiesel dalam Upaya Mewujudkan Indonesia Emas 2045",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2019-2020%2FPENERA~1.PDF?alt=media&token=0211ffc0-8698-4358-b850-ea9f5aaa7c3a",
            type: "pdf",
          },
          5: {
            id: 5,
            judul:
              "Phycoremediaton of Anaerobic Digested Manure Dairy Wastewater",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2019-2020%2FPhycoremediaton%20of%20Anaerobic%20Digested%20Manure%20Dairy%20Wastewater.pdf?alt=media&token=6afe4311-40da-4aae-95cf-efbf60f89707",
            type: "pdf",
          },
          6: {
            id: 6,
            judul:
              "PHY-WEED Sistem Fitoremediasi Fosfat dari Limbah Pupuk Cair Menggunakan Spirodela sp. Terintegrasi dengan Sistem Valorisasi Bioproduk Samping melalui Penerapan Biorefinery",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2019-2020%2FPHY-WEED_%20Sistem%20Fitoremediasi%20Fosfat%20dari%20Limbah%20Pupuk%20Cair%20Menggunakan%20Spirodela%20sp.%20Terintegrasi%20dengan%20Sistem%20Valorisasi%20Bioproduk%20Samping%20melalui%20Penerapan%20Biorefinery.jpg?alt=media&token=e1692bbc-c19a-4e20-bc75-e3b36b58df34",
            type: "jpg",
          },
          7: {
            id: 7,
            judul:
              "Pra-Rancangan Sistem Produksi Tebu (Saccharum officinarum L.) Untuk Produksi Gula dan Bbioproduk Smaping Bernilai Tinggi dengan Penerapan Konsep Biorefinery",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2019-2020%2FPra-Rancangan%20Sistem%20Produksi%20Tebu%20(Saccharum%20officinarum%20L.)%20Untuk%20Produksi%20Gula%20dan%20Bbioproduk%20Smaping%20Bernilai%20Tinggi%20dengan%20Penerapan%20Konsep%20Biorefinery.jpg?alt=media&token=41768a76-7ea8-40e0-8512-8c1c1e795eaa",
            type: "jpg",
          },
          8: {
            id: 8,
            judul:
              "Production System Preliminary Design of Edible-Biodegradable Plastic",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2019-2020%2FProduction%20System%20Preliminary%20Design%20of%20Edible-Biodegradable%20Plastic.pdf?alt=media&token=7d4b263a-07f0-4e65-aa89-e4bcfb4c1676",
            type: "pdf",
          },
          9: {
            id: 9,
            judul:
              "Removal of Tartrazine Solution by Used Coffee Grounds as Activated Carbon Source",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2019-2020%2FRemoval%20of%20Tartrazine%20Solution%20by%20Used%20Coffee%20Grounds%20as%20Activated%20Carbon%20Source.pdf?alt=media&token=41e81d88-9173-4e42-a2d4-95016ce3414b",
            type: "pdf",
          },
          10: {
            id: 10,
            judul:
              "Utilization of Alternanthera brasiliana Potential as Industrial-scale",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2019-2020%2FUtilization%20of%20Alternanthera%20brasiliana%20Potential%20as%20Industrial-scale.pdf?alt=media&token=f0a1bf4e-2800-4048-9735-f6008961bb0a",
            type: "pdf",
          },
          11: {
            id: 11,
            judul:
              "Valorisasi Limbah Buah Nanas (Ananas comosus L.)  dengan Penerapan Konsep Biorefinery",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2019-2020%2FValorisasi%20Limbah%20Buah%20Nanas%20(Ananas%20comosus%20L.)%20%20dengan%20Penerapan%20Konsep%20Biorefinery.jpg?alt=media&token=505ad6c2-ae62-4366-87b5-108578a425d7",
            type: "jpg",
          },
        },
        "2020-2021": {
          0: {
            id: 0,
            judul: "CASSAPADS – BIODEGRADABLE PAD FROM CASSAVA STEM WASTE",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2020-2021%2FCASSAPADS%20%E2%80%93%20BIODEGRADABLE%20PAD%20FROM%20CASSAVA%20STEM%20WASTE.pdf?alt=media&token=09fc5841-c8f9-403f-b5cd-9f2db4d8f1ba",
            type: "pdf",
          },
          1: {
            id: 1,
            judul:
              "Optimalisasi Penyerapan Logam Arsenik pada Badan Air olehLimbah Ampas Tebu menggunakan 2-Merkaptoetanol untuk Meningkatkan Sanitasi di Era New Normal",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2020-2021%2FOptimalisasi%20Penyerapan%20Logam%20Arsenik%20pada%20Badan%20Air%20oleh_Limbah%20Ampas%20Tebu%20menggunakan%202-Merkaptoetanol%20untuk_Meningkatkan%20Sanitasi%20di%20Era%20New%20Normal.pdf?alt=media&token=0140e941-9158-4b26-9d50-01e71e5044c8",
            type: "pdf",
          },
          2: {
            id: 2,
            judul:
              "OPTIMASI BENIH JAGUNG GUNA MENINGKATKAN EFEKTIVITAS_PRODUKSI SEBAGAI ALTERNATIF SUMBER KARBOHIDRAT DI MASA PANDEMI",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2020-2021%2FOPTIMASI%20BENIH%20JAGUNG%20GUNA%20MENINGKATKAN%20EFEKTIVITAS_PRODUKSI%20SEBAGAI%20ALTERNATIF%20SUMBER%20KARBOHIDRAT%20DI_MASA%20PANDEMI.pdf?alt=media&token=92f12243-2462-4cf8-a10d-659fedf08009",
            type: "pdf",
          },
          3: {
            id: 3,
            judul:
              "Optimasi Produksi Astaxanthin dari Mikroalga Haematococcus Pluvialis sebagai Suplemen Peningkat Imun di Masa Pandemi COVID 19",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2020-2021%2FOptimasi%20Produksi%20Astaxanthin%20dari%20Mikroalga%20Haematococcus%20Pluvialis%20sebagai%20Suplemen%20Peningkat%20Imun%20di%20Masa%20Pandemi%20COVID%2019.pdf?alt=media&token=38c317ce-cb8b-4b77-a6c8-eba7ba8349cc",
            type: "pdf",
          },
          4: {
            id: 4,
            judul:
              "OPTIMISASI PROSES BIENZIMATIK PRODUKSI BIODIESEL MIKROALGA DENGAN PENDEKATAN ARTIFICIAL INTELLIGENCE - sekar dianwidi",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2020-2021%2FOPTIMISASI%20PROSES%20BIENZIMATIK%20PRODUKSI%20BIODIESEL%20MIKROALGA%20DENGAN%20PENDEKATAN%20ARTIFICIAL%20INTELLIGENCE%20-%20sekar%20dianwidi.pdf?alt=media&token=1cf25a9e-b915-4d46-bf05-19c530d0e31b",
            type: "pdf",
          },
        },
        "2021-2022": {
          0: {
            id: 0,
            judul:
              "Pra-Rancangan Sistem Kultivasi Duckweed Spirodela polyrhiza dengan Elisitor Kitosan Untuk Meningkatkan Produktivitas dan Perolehan Flavonoid Sebagai Senyawa Antioksidan yang..",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2021-2022%2FPRA-RA~2.PDF?alt=media&token=30ffdba1-1cee-4b44-8e79-79db3db6dce1",
            type: "pdf",
          },
          1: {
            id: 1,
            judul:
              "Pra-Rancangan Sistem Produksi Asam Klorogenat dari Limbah Industri Kopi Arabika (Coffea arabica) dengan Perolehan Tinggi Serta Produksi Bioproduk Lainnya dengan Menerapkan Konsep Biorefinery",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2021-2022%2FPRA-RA~2.PNG?alt=media&token=467705b2-37e6-4d95-bbed-3f5f491211e5",
            type: "png",
          },
          2: {
            id: 2,
            judul:
              "Pra-Rancangan Sistem Produksi Biofoam dari Bioslurry Hasil Anaerobic Digestion Campuran Pennisetum purpureum dan Typha latifolia Hasil Fitoremediasi Limbah Cair Tahu",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2021-2022%2FPra-Rancangan%20Sistem%20Produksi%20Biofoam%20dari%20Bioslurry%20Hasil%20Anaerobic%20Digestion%20Campuran%20Pennisetum%20purpureum%20dan%20Typha%20latifolia%20Hasil%20Fitoremediasi%20Limbah%20Cair%20Tahu.png?alt=media&token=e5328688-a9bd-4c4d-b8f2-c69b3944750f",
            type: "png",
          },
          3: {
            id: 3,
            judul:
              "Pra-Rancangan Sistem Produksi Minyak Atsiri Perolehan Tinggi dari Tanaman Cengkeh (Syzygium aromaticum) dengan Perlakuan Awal Fermentasi Substrat Padat Oleh Jamur Trichoderma harzianum Serta..",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2021-2022%2FPRA-RA~1.PDF?alt=media&token=00c212f1-8440-4d22-8e5e-87d7f2c49c3e",
            type: "pdf",
          },
          4: {
            id: 4,
            judul:
              "Pra-Rancangan Sistem Produksi Minyak Mikroalga Oleh Mikroalga Spirulina platensis dan Nannochloropsis oculata Secara Mixed Culture Pada Medium Anaerobically Dairy Digested Manure Wastewater (ADDMW), Protein Kasar, Bubuk Karbohidrat, dan Pupuk Kandang",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2021-2022%2FPRA-RA~3.PNG?alt=media&token=e758d4bc-5d44-4f63-9a9c-e884526b554d",
            type: "png",
          },
          5: {
            id: 5,
            judul:
              "Pra-Rancangan Sistem Produksi Minyak Sawit Mentah (CPO) Tinggi Antioksidan Menggunakan Metode Ekstraksi Aqueous dengan Bantuan Enzim yang Terintegrasi dengan Prod",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2021-2022%2FPra-Rancangan%20Sistem%20Produksi%20Minyak%20Sawit%20Mentah%20(CPO)%20Tinggi%20Antioksidan%20Menggunakan%20Metode%20Ekstraksi%20Aqueous%20dengan%20Bantuan%20Enzim%20yang%20Terintegrasi%20dengan%20Prod.png?alt=media&token=f4a85b3a-3401-4710-90e8-081f4c18209f",
            type: "png",
          },
          6: {
            id: 6,
            judul:
              "Pra-Rancangan Sistem Produksi Pembenah Tanah yang Terdiri dari Amelioran Organik dan PGPR (Azotobacter chroocoocum dan Pseudomonas aeruginosa) Terintegrasi Produksi Produk Samping Biogas",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2021-2022%2FPRA-RA~1.JPG?alt=media&token=9cff927f-26d8-478b-aa32-4136e02de853",
            type: "jpg",
          },
          7: {
            id: 7,
            judul:
              "The Versatility of the Moringa oleifera Plant in Sustainable Application",
            link: "https://firebasestorage.googleapis.com/v0/b/ibce-database.appspot.com/o/2021-2022%2FThe%20Versatility%20of%20the%20Moringa%20oleifera%20Plant%20in%20Sustainable%20Application.png?alt=media&token=be12fbbc-2cfa-4299-8867-9c33b1f602f8",
            type: "png",
          },
        },
      },
      images: {
        blu: require("../assets/sponsor/blu.png"),
        paragon: require("../assets/sponsor/paragon.png"),
      },
    };
  },
};
</script>

<style></style>
