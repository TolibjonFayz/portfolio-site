<template>
  <div id="main" class="flex flex-row justify-between mt-10">
    <!-- First -->
    <div id="first" class="flex flex-col w-[33%] pl-12 pr-10">
      <h1 class="text-[30px] mb-10">Who am I?</h1>
      <h2 class="text-[20px] font-normal">
        A Full Stack (NodeJs + VueJS) developer
      </h2>
      <p class="text-[#888] mt-5">
        I am a fullstack developer with about three months of experience in
        building websites. I like building apps that can help others. I maintain
        an unwavering dedication to continuous self-improvement. I continually
        expand my skill set by exploring diverse frameworks and programming
        languages. My other hobbies include: reading book, gaming and ...!
      </p>
      <el-row class="mt-5">
        <a href="https://t.me/tolibjon_portfolio/26" target="_blank">
          <el-button
            id="resume"
            type="danger"
            class="bg-[#E7596A] px-4 py-2 hover:bg-[#F63750] border-none"
            round
            ><i class="fa-regular fa-file mr-2"></i>Download My CV</el-button
          >
        </a>
      </el-row>
    </div>

    <!-- Second -->
    <div class="flex flex-col w-[33%] pl-10">
      <h1 class="text-[30px]">Personal Info</h1>
      <h5 class="flex gap-1">
        <b>Birthdate</b>:
        <p>04.09.2004</p>
      </h5>
      <h5 class="flex gap-1">
        <b>Email</b>:
        <p>tolibjonfayz@gmail.com</p>
      </h5>
      <h5 class="flex gap-1">
        <b>Phone</b>:
        <p>+998 90 815 04 12</p>
      </h5>
      <h5 class="flex gap-1">
        <b>Address</b>:
        <p>Toshkent shahar Chilonzor 16-daha</p>
      </h5>

      <!-- Social -->
      <div id="socials" class="main-socials flex flex-column gap-6">
        <a href="https://t.me/tolibjon_fayz" target="_blank">
          <i
            class="fa-brands fa-telegram cursor-pointer"
            style="color: #e7596a; font-size: 20px"
          ></i>
        </a>

        <a href="https://twitter.com/tolibjonfayz" target="_blank">
          <i
            class="fa-brands fa-twitter cursor-pointer"
            style="color: #e7596a; font-size: 20px"
          ></i>
        </a>

        <a href="https://github.com/TolibjonFayz" target="_blank">
          <i
            class="fa-brands fa-github cursor-pointer"
            style="color: #e7596a; font-size: 20px"
          ></i>
        </a>

        <a href="https://www.instagram.com/tolibjon_fayz/" target="_blank">
          <i
            class="fa-brands fa-instagram cursor-pointer"
            style="color: #e7596a; font-size: 20px"
          ></i>
        </a>

        <a
          href="https://www.linkedin.com/in/tolibjon-fayzullayev-98064523b/"
          target="_blank"
        >
          <i
            class="fa-brands fa-linkedin cursor-pointer"
            style="color: #e7596a; font-size: 20px"
          ></i>
        </a>
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
      </div>
    </div>

    <!-- Third -->
    <div class="flex flex-col w-[33%] pl-10">
      <h1 class="text-[30px]">My Expertise</h1>
      <div class="flex gap-5">
        <i class="fa-brands fa-vuejs mt-3 text-[#E7596A] text-[28px]" />
        <div>
          <h1 class="text-[30px]">Frontend Development</h1>
          <p id="pi">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div class="flex gap-5">
        <i class="fa-brands fa-node mt-3 text-[#E7596A] text-[28px]" />
        <div>
          <h1 class="text-[30px]">Backend Development</h1>
          <p id="pi">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#main {
  border-bottom: 1px solid #e2e6e9;
}
#pi {
  border-bottom: 1px solid #e2e6e9;
}
#first {
  border-right: 1px solid #e2e6e9;
}
</style>
