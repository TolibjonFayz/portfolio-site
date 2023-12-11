<template>
  <div
    id="main"
    class="px-[210px] pt-5 w-full h-[600px] flex flex-col bg-repeat-round bg-gradient-to-br from-[#343a40] to-[#262626]"
  >
    <!-- Socials -->
    <div id="socials" class="main-socials flex flex-column gap-6">
      <a href="https://t.me/tolibjon_fayz" target="_blank">
        <i
          class="fa-brands fa-telegram cursor-pointer"
          style="color: #ffffff; font-size: 20px"
        ></i>
      </a>

      <a href="https://twitter.com/tolibjonfayz" target="_blank">
        <i
          class="fa-brands fa-twitter cursor-pointer"
          style="color: #ffffff; font-size: 20px"
        ></i>
      </a>

      <a href="https://github.com/TolibjonFayz" target="_blank">
        <i
          class="fa-brands fa-github cursor-pointer"
          style="color: #ffffff; font-size: 20px"
        ></i>
      </a>

      <a href="https://www.instagram.com/tolibjon_fayz/" target="_blank">
        <i
          class="fa-brands fa-instagram cursor-pointer"
          style="color: #ffffff; font-size: 20px"
        ></i>
      </a>

      <a
        href="https://www.linkedin.com/in/tolibjon-fayzullayev-98064523b/"
        target="_blank"
      >
        <i
          class="fa-brands fa-linkedin cursor-pointer"
          style="color: #ffffff; font-size: 20px"
        ></i>
      </a>
      <font-awesome-icon :icon="['fab', 'facebook-f']" />
    </div>

    <!-- Helo i am -->
    <div class="mt-40 text-white flex flex-col">
      <h1 class="text-[40px]" id="hello">Hello, I am</h1>
      <h1 class="text-[80px]" id="name">Tolibjon Fayzullayev</h1>
      <h1 class="text-[20px]" id="kimman">
        Full Stack (NodeJS + VueJS) developer
      </h1>
    </div>

    <!-- Resume -->
    <el-row class="mt-5">
      <a href="https://t.me/tolibjon_portfolio/26" target="_blank">
        <el-button
          id="resume"
          type="danger"
          class="bg-[#E7596A] px-4 py-2 hover:bg-[#F63750] border-none"
          round
          ><i class="fa-regular fa-file mr-2"></i>Download Resume</el-button
        >
      </a>
    </el-row>
    <p class="text-white text-[12px] ml-2">from telegram</p>
  </div>
</template>

<script lang="ts"></script>

<style scoped lang="scss">
@media screen and (max-width: 1150px) {
  #hello {
    font-size: 30px;
  }
  #name {
    font-size: 50px;
  }
  #kimman {
    font-size: 20px;
  }
}
@media screen and (max-width: 860px) {
  #main {
    padding: 50px;
  }
  #socials {
    justify-content: center;
  }
  #hello {
    font-size: 20px;
  }
  #name {
    font-size: 35px;
  }
  #kimman {
    font-size: 12px;
  }
}
@media screen and (max-width: 410px) {
  #main {
    padding: 50px;
    height: 500px;
  }
  #socials {
    justify-content: center;
  }
  #hello {
    font-size: 18px;
  }
  #name {
    font-size: 30px;
  }
  #kimman {
    font-size: 10px;
  }
  #resume {
    font-size: 12px;
    padding: 10px;
  }
}
</style>
