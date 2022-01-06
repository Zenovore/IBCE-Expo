<template>
  <footer
    class="
      py-3
      px-5
      bg-navbarBGphone bg-cover bg-top
      font-roboto
      md:bg-navbarBG md:bg-center md:py-6 md:bg-cover
    "
  >
    <div class="container flex flex-wrap items-center mx-auto">
      <a href="#" class="flex">
        <img
          src="../assets/logo.png"
          class="pl-3 pr-4 h-20 md:pl-0 md:h-24"
          alt=""
        />
      </a>
      <div class="w-full md:block md:w-auto">
        <ul
          class="
            flex flex-col
            mt-4
            md:flex-row
            md:space-x-3
            md:mt-0
            md:text-lg
            md:font-medium
            md:items-start
          "
        >
          <li>
            <a
              href="#"
              class="
                block
                py-2
                pr-4
                pl-3
                text-white text-left
                md:hover:bg-transparent md:border-0 md:hover:underline md:p-0
              "
              style="text-decoration-color: #f0c55a"
              aria-current="page"
              >CATALOGUE</a
            >
          </li>
          <li
            class="
              py-2
              pr-4
              pl-3
              text-white
              hidden
              md:hover:bg-transparent
              md:border-0
              md:hover:underline
              md:p-0
              md:block
            "
          >
            |
          </li>
          <li>
            <a
              href="#"
              class="
                block
                py-2
                pr-4
                pl-3
                text-white text-left
                md:hover:bg-transparent md:border-0 md:hover:underline md:p-0
              "
              style="text-decoration-color: #f0c55a"
              >GAME</a
            >
          </li>
          <li
            class="
              py-2
              pr-4
              pl-3
              text-white
              hidden
              md:hover:bg-transparent
              md:border-0
              md:hover:underline
              md:p-0
              md:block
            "
          >
            |
          </li>
          <li>
            <a
              href="#"
              class="
                block
                py-2
                pr-4
                pl-3
                text-white text-left
                md:hover:bg-transparent md:border-0 md:hover:underline md:p-0
              "
              style="text-decoration-color: #f0c55a"
              >MAIN EVENT</a
            >
          </li>
        </ul>
      </div>
      <div class="w-full ml-auto lg:block lg:w-auto">
        <ul
          class="
            flex flex-row flex-wrap
            my-4
            md:space-x-4 md:my-0 md:text-lg md:font-medium md:items-start
          "
        >
          <!-- <li class="hidden md:block"></li> -->
          <!-- instagram -->
          <li>
            <a
              href="https://www.instagram.com/ibce.itb/"
              target="_blank"
              class="block text-left md:hover:bg-transparent md:border-0"
            >
              <svg
                class="socmed ig-logo unique"
                width="32"
                height="32"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="29"
                  height="29"
                  rx="9.5"
                  opacity="0"
                />
                <path
                  class="socmed-logo instagram"
                  d="M19.8503 3H10.1497C6.20735 3 3 6.20735 3 10.1497V19.8503C3 23.7926 6.20735 27 10.1497 27H19.8503C23.7926 27 27 23.7926 27 19.8503V10.1497C27 6.20735 23.7926 3 19.8503 3ZM24.5856 19.8503C24.5856 22.4655 22.4655 24.5856 19.8503 24.5856H10.1497C7.5345 24.5856 5.4144 22.4655 5.4144 19.8503V10.1497C5.4144 7.53446 7.5345 5.4144 10.1497 5.4144H19.8503C22.4655 5.4144 24.5856 7.53446 24.5856 10.1497V19.8503Z"
                  fill="#FDFDDF"
                />
                <path
                  class="socmed-logo instagram"
                  d="M15.0005 8.79272C11.5778 8.79272 8.79321 11.5773 8.79321 14.9999C8.79321 18.4226 11.5778 21.2072 15.0005 21.2072C18.4232 21.2072 21.2077 18.4226 21.2077 14.9999C21.2077 11.5772 18.4232 8.79272 15.0005 8.79272ZM15.0005 18.7928C12.9057 18.7928 11.2076 17.0947 11.2076 15C11.2076 12.9052 12.9058 11.2071 15.0005 11.2071C17.0952 11.2071 18.7933 12.9052 18.7933 15C18.7933 17.0947 17.0952 18.7928 15.0005 18.7928Z"
                  fill="#FDFDDF"
                />
                <path
                  class="socmed-logo instagram"
                  d="M21.2193 10.3268C22.0407 10.3268 22.7066 9.6609 22.7066 8.83944C22.7066 8.01798 22.0407 7.35205 21.2193 7.35205C20.3978 7.35205 19.7319 8.01798 19.7319 8.83944C19.7319 9.6609 20.3978 10.3268 21.2193 10.3268Z"
                  fill="#FDFDDF"
                />
              </svg>
            </a>
          </li>
          <!-- twitter -->
          <li>
            <a
              href="https://twitter.com/ibceitb2022"
              target="_blank"
              class="block text-left md:hover:bg-transparent md:border-0"
            >
              <svg
                class="socmed twitter-logo"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    class="socmed-logo twitter"
                    d="M24 4.7161C23.1174 5.09683 22.157 5.37083 21.1676 5.47755C22.1948 4.86734 22.9639 3.90332 23.3308 2.76634C22.367 3.3397 21.3111 3.74175 20.2101 3.95466C19.7499 3.46268 19.1933 3.07074 18.575 2.80328C17.9567 2.53581 17.2899 2.39855 16.6163 2.40004C13.8906 2.40004 11.6986 4.60939 11.6986 7.3206C11.6986 7.70132 11.7447 8.08205 11.8197 8.44835C7.73849 8.23491 4.09855 6.28515 1.67864 3.29993C1.23771 4.05306 1.00665 4.91058 1.00949 5.78328C1.00949 7.49077 1.87766 8.99636 3.20154 9.88183C2.42136 9.8511 1.65944 9.63666 0.977767 9.25594V9.31651C0.977767 11.7076 2.66795 13.6891 4.92056 14.1448C4.49761 14.2546 4.06251 14.3108 3.62553 14.3121C3.30537 14.3121 3.00252 14.2803 2.69679 14.2371C3.31979 16.1868 5.134 17.603 7.29432 17.6492C5.60413 18.973 3.48708 19.7518 1.18832 19.7518C0.775868 19.7518 0.395145 19.7374 0 19.6912C2.18051 21.0901 4.7677 21.8977 7.5539 21.8977C16.599 21.8977 21.5484 14.4044 21.5484 7.90034C21.5484 7.6869 21.5484 7.47346 21.534 7.26003C22.4915 6.55915 23.3308 5.69099 24 4.7161Z"
                    fill="#FDFDDF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <!-- tiktok -->
          <li>
            <a href="https://www.tiktok.com/@ibce.itb" target="_blank">
              <svg
                class="socmed tiktok-logo"
                id="Capa_1"
                enable-background="new 0 0 512 512"
                width="28"
                height="28"
                viewBox="0 0 512 512"
                fill="#FFF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    class="socmed-logo tiktok"
                    d="m480.32 128.39c-29.22 0-56.18-9.68-77.83-26.01-24.83-18.72-42.67-46.18-48.97-77.83-1.56-7.82-2.4-15.89-2.48-24.16h-83.47v228.08l-.1 124.93c0 33.4-21.75 61.72-51.9 71.68-8.75 2.89-18.2 4.26-28.04 3.72-12.56-.69-24.33-4.48-34.56-10.6-21.77-13.02-36.53-36.64-36.93-63.66-.63-42.23 33.51-76.66 75.71-76.66 8.33 0 16.33 1.36 23.82 3.83v-62.34-22.41c-7.9-1.17-15.94-1.78-24.07-1.78-46.19 0-89.39 19.2-120.27 53.79-23.34 26.14-37.34 59.49-39.5 94.46-2.83 45.94 13.98 89.61 46.58 121.83 4.79 4.73 9.82 9.12 15.08 13.17 27.95 21.51 62.12 33.17 98.11 33.17 8.13 0 16.17-.6 24.07-1.77 33.62-4.98 64.64-20.37 89.12-44.57 30.08-29.73 46.7-69.2 46.88-111.21l-.43-186.56c14.35 11.07 30.04 20.23 46.88 27.34 26.19 11.05 53.96 16.65 82.54 16.64v-60.61-22.49c.02.02-.22.02-.24.02z"
                  />
                </g>
              </svg>
            </a>
          </li>
          <!-- linkedin -->
          <li>
            <a href="https://www.linkedin.com/company/ibceitb" target="_blank">
              <svg
                class="socmed linkedin-logo"
                id="Bold"
                enable-background="new 0 0 24 24"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="#FFF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="socmed-logo linkedin"
                  d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"
                />
                <path
                  class="socmed-logo linkedin"
                  d="m.396 7.977h4.976v16.023h-4.976z"
                />
                <path
                  d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container flex flex-wrap items-center mx-auto">
      <div class="w-full lg:block lg:w-auto">
        <p
          class="
            block
            py-2
            pr-4
            pl-3
            text-white text-left
            md:border-0 md:pl-0 md:pt-8 md:pb-0
          "
        >
          SPONSOR
        </p>
        <ul
          class="
            flex flex-row flex-wrap
            md:space-x-8 md:mt-0 md:text-lg md:font-medium md:items-start
          "
        >
          <!-- <li class="hidden md:block"></li> -->
          <li>
            <a href="#" class="block text-left">
              <img
                src="../assets/logo.png"
                class="h-16 pl-3 md:h-20 md:pl-0"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="#" class="block text-left">
              <img
                src="../assets/logo.png"
                class="h-16 pl-3 md:h-20 md:pl-0"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style scoped>
.socmed {
  height: 2.6rem;
  width: auto;
  padding: 0.4rem;
  margin: 2px;
  border-radius: 10px;
  background: none;
}

.unique {
  padding: 0.2rem;
}
.ig-logo:hover {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  transition: 0.4s;
}
.ig-logo:hover path {
  fill: white;
}

.twitter-logo:hover {
  background: white;
  transition: 0.4s;
}
.twitter-logo:hover path {
  fill: #1da1f2;
}

.tiktok-logo:hover {
  background: black;
  transition: 0.4s;
}
.tiktok-logo:hover path {
  fill: white;
  filter: drop-shadow(30px 30px #ee1d52) drop-shadow(-30px -30px #69c9d0);
}
.linkedin-logo:hover {
  background: #1278b3;
  transition: 0.4s;
}
.linkedin-logo:hover path {
  fill: #fff;
}
</style>
