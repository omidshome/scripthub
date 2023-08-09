<template>
  <section class="lg:p-5 lg:m-5 flex ">
    <p>
        <h3>Our Mission</h3>
      Welcome to Script-Hub, your partner in impeccable correspondence. We
      specialize in meticulously crafting letters for formal situations,
      connecting your intentions with eloquence and precision. Our mission is to
      empower effective communication, ensuring your messages convey
      professionalism and make a lasting impact. With our dedicated expertise,
      your words become a powerful instrument in every formal exchange.
    </p>
    <img src="~@/assets/mission.webp" />
  </section>
</template>

<style scoped>
p {
  font-size: 1.4rem;
  font-family: 'Times New Roman', Times, serif;

}
section {
  border: 1px solid orange;
  border-radius: 7px;
  padding: 20px;
}

img {
  margin: auto 3px;
  border-radius: 7px;

  width: 100%;
  height: 300px;
  object-fit: cover;
}

@media (max-width: 768px) {
    img{
        height: 130px;
    }
  p {
    font-size: large;
    color: aliceblue;
  }
  section{
    display: flex ;
    flex-direction: column;

  }
  
}
</style>
