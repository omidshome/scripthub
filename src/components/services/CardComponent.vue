<template>
  <div class="card mt-5 mb-5">
    <h3 class="ml-5 pt-3">{{ cTitle }}</h3>
    <div class="lg:flex">
      <div class="embassy">
        <img :src="cSrc" alt="USA and Canada" />
      </div>
      <p class="ml-3">
        {{ cText }}
      </p>
    </div>
  </div>
</template>

<!-- Script  -->
<script>
export default {
  name: "CardComponent",
  props: ["cText", "cTitle", "cSrc"],
};
</script>

<style scoped>
.embassy {
  text-align: center;
}
p {
  line-height: 1.7;
}
img {
  margin: 10px;
  height: 100px;
}
</style>
