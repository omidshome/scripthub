<template>
  <div>
    <header-component></header-component>
    <mission-component></mission-component>

    <services-component></services-component>
    <footer-component></footer-component>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Mission from "./components/Mission.vue";
import Services from "./components/services/Services.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    "header-component": Header,
    "mission-component": Mission,
    "services-component": Services,
    "footer-component": Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Serif:opsz,wght@8..144,300&family=Ubuntu+Mono&display=swap");
p {
  font-size: 18px;
  font-family: "Roboto Serif", serif;
  word-spacing: 5px;
  text-justify: distribute-all-lines;
}
h1,
h2,
h3,
h4,
h5 {
  font-family: "Roboto Serif";
}
a {
  font-family: "Roboto Serif";
}

.card {
  border-left: 5px solid orangered;
  margin-left: 10px;
  background: linear-gradient(
    -45deg,
    rgba(195, 194, 194, 1) 0%,
    rgba(96, 96, 96, 1) 100%
  );
}
</style>
