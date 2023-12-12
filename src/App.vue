<template>
  <Header />
  <Navbar />
  <About />
  <Resume />
  <Hours />
  <Portfolio />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  />
</template>

<script setup>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import About from "./components/About.vue";
import Resume from "./components/Resume.vue";
import Hours from "./components/Hours.vue";
import Portfolio from "./components/Portfolio.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
