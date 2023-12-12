<template>
  <div class="flex flex-col mb-5 font-['Rethink_Sans']">
    <div class="navbar flex justify-center">
      <ul class="flex flex-row gap-10 text-center items-center">
        <li class="cursor-pointer text-[#E7596A] text-[18px]">
          <a href="#main">Home</a>
        </li>
        <li
          class="cursor-pointer text-[18px] hover:text-[#505050] transition-all"
        >
          <a href="#about">About</a>
        </li>
        <li
          class="cursor-pointer text-[18px] hover:text-[#505050] transition-all"
        >
          <a href="#resume">Resume</a>
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
          <a href="#portfolio">Portfolio</a>
        </li>
        <li
          class="cursor-pointer text-[18px] hover:text-[#505050] transition-all"
        >
          <a href="#contact">Contact</a>
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

@media screen and (max-width: 1120px) {
  .navbar {
    ul {
      gap: 20px;
    }
  }
  #little_img {
    margin-left: 40px;
    margin-right: 40px;
  }
}

@media screen and (max-width: 800px) {
  .navbar {
    ul {
      gap: 15px;
    }
  }
  #little_img {
    margin-left: 20px;
    margin-right: 20px;
    width: 120px;
  }
}

@media screen and (max-width: 600px) {
  .navbar {
    ul {
      padding: 15px;
      li {
        font-size: 15px;
      }
    }
  }
  #little_img {
    margin-left: 0px;
    margin-right: 0px;
    width: 70px;
    border: 5px solid white;
  }
}

@media screen and (max-width: 480px) {
  .navbar {
    ul {
      gap: 10px;
      padding: 10px;
      li {
        font-size: 14px;
      }
    }
  }
  #little_img {
    display: none;
  }
}
</style>
