<template>
  <section class="lg:p-5 lg:m-5 flex">
    <div>
      <h2>Our Mission</h2>
      <p>
        Welcome to Script-Hub, your partner in impeccable correspondence. We
        specialize in meticulously crafting letters for formal situations,
        connecting your intentions with eloquence and precision. Our mission is
        to empower effective communication, ensuring your messages convey
        professionalism and make a lasting impact. With our dedicated expertise,
        your words become a powerful instrument in every formal exchange.
      </p>
    </div>
    <img src="~@/assets/mission.webp" />
  </section>
</template>

<style scoped>
p {
  font-size: 1.4rem;
  font-family: "Times New Roman", Times, serif;
}
p::first-letter {
  font-size: 2em;
  line-height: 0;
  initial-letter: 2;
}
section {
  border: 1px solid orange;
  border-radius: 7px;
  padding: 20px;
}

img {
  margin: auto 1px;
  border-radius: 7px;

  width: 100%;
  height: 250px;
  object-fit: cover;
}

@media (max-width: 768px) {
  img {
    height: 130px;
  }
  p {
    font-size: large;
    color: aliceblue;
  }
  section {
    display: flex;
    flex-direction: column;
  }
}
</style>
