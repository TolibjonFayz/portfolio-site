<template>
  <div class="flex flex-col mb-5">
    <div class="navbar flex justify-center">
      <ul class="flex flex-row gap-10 text-center items-center">
        <li class="cursor-pointer text-[#E7596A] text-[18px]">
          <a href="#main">Home</a>
        </li>
        <li
          class="cursor-pointer text-[18px] hover:text-[#505050] transition-all"
        >
          About
        </li>
        <li
          class="cursor-pointer text-[18px] hover:text-[#505050] transition-all"
        >
          Resume
        </li>
        <div>
          <img
            src="../assets/me.jpg"
            alt="my_img"
            id="little_img"
            class="w-40 rounded-full ml-44 mr-44"
          />
        </div>
        <li
          class="cursor-pointer text-[18px] hover:text-[#505050] transition-all"
        >
          Portfolio
        </li>
        <li
          class="cursor-pointer text-[18px] hover:text-[#505050] transition-all"
        >
          Blog
        </li>
        <li
          class="cursor-pointer text-[18px] hover:text-[#505050] transition-all"
        >
          Contact
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar {
  box-shadow: 0 1px 8px 0 #888888;
}
#little_img {
  position: relative;
  border: 10px solid white;
  margin-top: -30px;
  margin-bottom: -30px;
  box-shadow: 1px 4px #c8c8c8;
}
</style>
