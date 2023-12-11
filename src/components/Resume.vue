<template>
  <div id="exe" class="px-[210px] mt-20 mb-2">
    <h1 class="text-[35px] mb-10">
      <b class="text-[#E7596A] font-normal mr-2">My</b>Resume
    </h1>
    <div id="main" class="flex flex-row w-full justify-between">
      <!-- First -->
      <div id="first" class="w-[30%] border-[1px] border-[#e2e6e9] p-5 h-auto">
        <h1 class="experience text-[25px] mb-10">Experience</h1>
        <h1 class="text-[18px] text-[#888]">
          I have no real experience yet. But I have some projects i hame made:
        </h1>

        <h1 class="mt-5 inline-block">
          <a
            href="https://obhavo-app.vercel.app/"
            target="_blank"
            class="text-[#E7596A] hover:text-[crimson] text-[18px] transition-all"
          >
            Weather app</a
          >
          <p class="text-[#888]">
            A site where you can see the weather in all cities of the world.
            Powered by accuweather.
          </p>
        </h1>

        <h1 class="mt-5 inline-block">
          <a
            href="https://malumotlarr.uz/"
            target="_blank"
            class="text-[#E7596A] hover:text-[crimson] text-[18px] transition-all"
          >
            Malumotlar.uz</a
          >
          <p class="text-[#888]">
            A site with information from various categories (animals, biography,
            history, science, fiction and etc). Similar to a blog
          </p>
        </h1>

        <h1 class="mt-5 text-[#E7596A] text-[18px]">
          Full Stack programming internship -
          <a
            href="https://github.com/ImperiaDevelopers"
            class="hover:text-[crimson] underline"
            >project code link</a
          >
        </h1>
      </div>

      <!-- Second -->
      <div id="second" class="w-[30%] border-[1px] border-[#e2e6e9] p-5">
        <h1 class="experience text-[25px] mb-3">Education</h1>
        <h1 class="inline-block">
          <h2
            class="text-[#E7596A] hover:text-[crimson] text-[18px] transition-all mb-2"
          >
            Apr 2023 - Dec 2023
          </h2>
          <p class="text-[#888]">Najot Ta’lim</p>
          <p
            class="text-[#888] mt-1"
            style="border-bottom: 2px solid #e2e6e9; padding-bottom: 12px"
          >
            Bootcamp Full Stack (NodeJS + VueJS)
          </p>
        </h1>

        <h1 class="inline-block">
          <h2
            class="text-[#E7596A] hover:text-[crimson] text-[18px] transition-all mb-2"
          >
            Sep 2022 - Feb 2023
          </h2>
          <p class="text-[#888]">Najot Ta’lim</p>
          <p
            class="text-[#888] mt-1"
            style="border-bottom: 2px solid #e2e6e9; padding-bottom: 12px"
          >
            Foundation of programming
          </p>
        </h1>

        <h1 class="inline-block">
          <h2
            class="text-[#E7596A] hover:text-[crimson] text-[18px] transition-all mb-2"
          >
            Sep 2022 - Present
          </h2>
          <p class="text-[#888]">Tashkent institute of Finance</p>
          <p class="text-[#888] mt-1">Finance and financial technologies</p>
        </h1>
      </div>

      <!-- Three and four -->
      <div id="nima" class="flex flex-col w-[30%] gap-5">
        <!-- Third -->
        <div id="third" class="border-[1px] border-[#e2e6e9] p-4">
          <h1 class="text-[25px] mb-3">Skills</h1>
          <h2 class="text-[20px] text-[#E7596A] mt-8">Backend</h2>
          <p class="text-[#888] mt-2">
            Node.js, Nest.js, Express.js, TypeScript, JavaScript, Git, Python,
            REST API, PostgreSql, Mongo, MySql, Redis
          </p>

          <h2 class="text-[20px] text-[#E7596A] mt-4">Frontend</h2>
          <p class="text-[#888] mt-2">HTML, CSS, Bootstrap, Tailwind, Vue.js</p>
        </div>

        <!-- Fourth -->
        <div id="fourth" class="border-[1px] border-[#e2e6e9] p-4">
          <h1 class="text-[25px] mb-3">Languages</h1>
          <div class="flex mt-7 justify-between">
            <h2 class="text-[18px] text-[#E7596A]">Uzbek</h2>
            <p class="text-[#888] mt-1 text-[15px] mr-10">Native</p>
          </div>
          <div class="flex mt-3 justify-between">
            <h2 class="text-[18px] text-[#E7596A]">English</h2>
            <p class="text-[#888] mt-1 text-[15px] mr-10">Intermediate</p>
          </div>
          <div class="flex mt-3 justify-between">
            <h2 class="text-[18px] text-[#E7596A]">Russian</h2>
            <p class="text-[#888] mt-1 text-[15px] mr-10">Elementary</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.inline-block {
  border-bottom: 2px solid #e2e6e9;
  padding-bottom: 12px;
}

@media screen and (max-width: 1000px) {
  #main {
    flex-direction: column;
    gap: 30px;
    width: 100%;
  }
  #first {
    width: 100%;
  }
  #second {
    width: 100%;
  }
  #nima {
    width: 100%;
  }
  #exe {
    padding-left: 150px;
    padding-right: 150px;
  }
}

@media screen and (max-width: 800px) {
  #exe {
    padding-left: 100px;
    padding-right: 100px;
  }
}

@media screen and (max-width: 500px) {
  #exe {
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>
