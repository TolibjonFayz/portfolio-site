<template>
  <div
    id="contact"
    class="flex flex-row px-[210px] mt-5 pt-20 pb-10 gap-5 font-['Rethink_Sans']"
  >
    <div id="sendmessage" class="w-[70%] p-5 flex flex-col items-center">
      <h1 class="text-[25px] mb-10">Send a message</h1>
      <!-- Name input -->
      <el-input v-model="name" placeholder="Name" class="mb-5" />
      <el-input v-model="email" placeholder="Email" class="mb-5" />
      <el-input
        v-model="textarea"
        :rows="8"
        type="textarea"
        placeholder="Any comment..."
        class="mb-5"
      />
      <el-button
        id="resumea"
        type="danger"
        class="bg-[#E7596A] px-32 py-5 hover:bg-[#F63750]"
        >Send Message</el-button
      >
    </div>

    <!-- Get in touch -->
    <div id="contactt" class="w-[30%] bg-white p-5">
      <h1 class="text-[25px] mb-10">Get in touch</h1>
      <!-- Phone -->
      <div class="flex gap-5 pl-2">
        <i class="fa-solid fa-mobile-screen mt-3 text-[28px]" />
        <div>
          <h1 class="text-[20px] ml-3">Phone</h1>
          <p id="pi" class="text-[14px] ml-3">+998 (90) 815 04 12</p>
        </div>
      </div>

      <!-- Address -->
      <div class="flex gap-5 pl-2 mt-3">
        <i class="fa-solid fa-map-location-dot mt-3 text-[28px]"></i>
        <div>
          <h1 class="text-[20px] ml-3">Address</h1>
          <p id="pi" class="text-[14px] ml-3">
            Uzbekistan, Tashkent, Chilanzar
          </p>
        </div>
      </div>

      <!-- Email -->
      <div class="flex gap-5 pl-2 mt-3">
        <i class="fa-solid fa-envelope mt-3 text-[28px]"></i>
        <div>
          <h1 class="text-[20px] ml-3">Email</h1>
          <p id="pi" class="text-[14px] ml-3">tolibjonfayz@gmail.com</p>
        </div>
      </div>

      <!-- Socials -->
      <div id="socials" class="flex flex-column gap-6 ml-2 mt-10">
        <a href="https://t.me/tolibjon_fayz" target="_blank">
          <i class="fa-brands fa-telegram cursor-pointer text-[20px]"></i>
        </a>

        <a href="https://twitter.com/tolibjonfayz" target="_blank">
          <i class="fa-brands fa-twitter cursor-pointer text-[20px]"></i>
        </a>

        <a href="https://github.com/TolibjonFayz" target="_blank">
          <i class="fa-brands fa-github cursor-pointer text-[20px]"></i>
        </a>

        <a href="https://www.instagram.com/tolibjon_fayz/" target="_blank">
          <i class="fa-brands fa-instagram cursor-pointer text-[20px]"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/tolibjon-fayzullayev-98064523b/"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin cursor-pointer text-[20px]"></i>
        </a>
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div
    class="bg-[#17263c] h-16 flex justify-center items-center text-center text-white font-['Rethink_Sans']"
  >
    © Fayzullayev Tolibjon, 2023 - Barcha huquqlar himoyalangan.
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref("");
const email = ref("");
const textarea = ref("");
</script>

<style lang="scss" scoped>
#sendmessage {
  border: 1px solid #888;
}

#contactt {
  border: 1px solid #888;
}

@media screen and (max-width: 1250px) {
  #main {
    padding-left: 50px;
    padding-right: 50px;
  }
}

@media screen and (max-width: 950px) {
  #contact {
    flex-direction: column;
  }
  #sendmessage {
    width: 100%;
  }
  #contactt {
    width: 100%;
  }
}

@media screen and (max-width: 500px) {
  .el-button {
    padding: 18px 25px;
  }
}
</style>
