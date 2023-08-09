<template>
  <div>
    <header-component></header-component>
    <hr />
    <mission-component></mission-component>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Mission from "./components/Mission.vue";

export default {
  name: "App",
  components: {
    "header-component": Header,
    "mission-component": Mission,
  },
};
</script>
