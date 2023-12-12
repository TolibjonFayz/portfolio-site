<template>
  <div id="mmm" class="mt-20 px-[210px] mb-5">
    <h1 class="text-[35px] mb-10">
      <b class="text-[#E7596A] font-normal mr-2">My</b>Portfolio
    </h1>
    <div id="main" class="flex gap-5">
      <!-- First -->
      <div class="aa flex w-[33%] transition-all">
        <img src="../assets/ikki.png" alt="Malumotlar.uz img" />
        <a
          class="first-one transition-all cursor-pointer"
          href="https://malumotlarr.uz/"
          target="_blank"
        >
          Ma'lumotlar uz
          <p style="font-size: 15px">
            A site with information from different categories
          </p>
        </a>
      </div>

      <!-- Second -->
      <div class="aa w-[33%] transition-all">
        <img src="../assets/uch.png" alt="Ashyo uz" />
        <a
          class="first-one transition-all cursor-pointer"
          href="https://ashyo.netlify.app/"
          target="_blank"
        >
          Ashyo uz
          <p style="font-size: 15px">A online store like Uzum Market</p>
        </a>
      </div>

      <!-- Third -->
      <div class="aa w-[33%] transition-all">
        <img src="../assets/bir.png" alt="Ob-havo img" />
        <a
          class="first-one transition-all cursor-pointer"
          href="https://obhavo-app.vercel.app/"
          target="_blank"
        >
          Ob-Havo app
          <p style="font-size: 15px">
            A site where you can see the weather in all cities of the world.
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.aa {
  position: relative;
}
.aa:hover .first-one {
  opacity: 0.9;
}
.first-one {
  position: absolute;
  display: flex;
  bottom: 0;
  top: 0;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #e7596a;
  color: #fff;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  font-size: 25px;
}

@media screen and (max-width: 1200px) {
  #mmm {
    padding-left: 100px;
    padding-right: 100px;
  }
}

@media screen and (max-width: 1000px) {
  #mmm {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media screen and (max-width: 1000px) {
  #main {
    flex-direction: column;
  }
  .aa {
    width: 100%;
    a {
      font-size: 20px;
      p {
        font-size: 12px !important;
      }
    }
  }
}
</style>
