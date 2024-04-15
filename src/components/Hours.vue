<template>
  <div
    id="main"
    class="flex flex-row px-[210px] w-full pt-20 pb-20 bg-[#343A40] text-white font-['Rethink_Sans']"
  >
    <!-- First -->
    <div id="first" class="flex w-[25%] justify-center items-center gap-5">
      <i class="fa-solid fa-clock fa-4x p-5 mt-1"></i>
      <div class="flex flex-col">
        <h1 class="text-[#E7596A] text-[40px] font-bold">300</h1>
        <h2 class="text-[12px] font-medium text-[#CACCCF]">Hours Worked</h2>
      </div>
    </div>

    <!-- Second -->
    <div id="second" class="flex w-[25%] justify-center items-center gap-5">
      <i class="fa-solid fa-layer-group fa-4x p-5 mt-1"></i>
      <div class="flex flex-col">
        <h1 class="text-[#E7596A] text-[40px] font-bold">3</h1>
        <h2 class="text-[12px] font-medium text-[#CACCCF]">Project Finished</h2>
      </div>
    </div>

    <!-- Third -->
    <div id="third" class="flex w-[25%] justify-center items-center gap-5">
      <i class="fa-solid fa-face-smile fa-4x p-5 mt-1"></i>
      <div class="flex flex-col">
        <h1 class="text-[#E7596A] text-[40px] font-bold">2</h1>
        <h2 class="text-[12px] font-medium text-[#CACCCF]">Happy Clients</h2>
      </div>
    </div>

    <!-- Fourth -->
    <div id="fourth" class="flex w-[25%] justify-center items-center gap-5">
      <i class="fa-solid fa-mug-hot fa-4x p-5 mt-1"></i>
      <div class="flex flex-col">
        <h1 class="text-[#E7596A] text-[40px] font-bold">100</h1>
        <h2 class="text-[12px] font-medium text-[#CACCCF]">Coffee Drinked</h2>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.fa-4x {
  border-right: 1px solid white;
}

@media screen and (max-width: 1200px) {
  #main {
    padding-left: 130px;
    padding-right: 130px;
  }
}

@media screen and (max-width: 1000px) {
  #main {
    padding-left: 50px;
    padding-right: 50px;
  }
}

@media screen and (max-width: 800px) {
  #main {
    padding-left: 50px;
    padding-right: 50px;
    flex-direction: column;
    align-items: center;
  }
  #second {
    margin-right: 33px;
    margin-top: -4px;
  }
  #third {
    margin-right: 32px;
    margin-top: -4px;
    margin-bottom: -4px;
  }
}
</style>
