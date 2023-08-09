<template>
  <h2>Services</h2>
  <card-component
    :cText="embassyText"
    :cTitle="embassyTitle"
    :cSrc="embassySrc"
  ></card-component>

  <card-component
    :cText="communicationText"
    :cTitle="communicationTitle"
    :cSrc="communicationSrc"
  ></card-component>

  <card-component
    :cText="motivationalText"
    :cTitle="motivationTitle"
    :cSrc="motivationalSrc"
  ></card-component>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import USCAImg from "@/assets/USCA.jpeg";
import CommunicationImg from "@/assets/communication.jpg";
import MotivationalImg from "@/assets/cover.jpg";

export default {
  name: "Services",
  components: {
    "card-component": CardComponent,
  },

  data() {
    return {
      embassyText: `If you require expert assistance in effectively conveying your
        intentions to the US and Canadian embassies through professionally
        crafted letters, you've arrived at the perfect destination. Our skilled
        team is dedicated to ensuring your message is efficiently and precisely
        delivered, tailored to your needs.`,
      embassyTitle: "Letter to embassies",
      embassySrc: USCAImg,

      communicationText:
        "Unlock the Art of Eloquent Expression: Elevate your formal communication to new heights with our distinguished letter-writing expertise. Our meticulous craftsmanship transforms your intentions into impactful messages, tailored to resonate with embassies, institutions, and professional scenarios. Seamlessly navigate the world of formal correspondence and make a lasting impression with our dedicated service.",
      communicationTitle: "Formal Communication",
      communicationSrc: CommunicationImg,

      motivationTitle: "Career and Motivational Letters",
      motivationalText:
        "Crafting Pathways to Success: Our writing prowess extends beyond words to artfully construct job-winning resumes, captivating cover letters, and compelling motivational statements. We blend eloquence and strategy to present your unique strengths, aspirations, and potential, empowering you to stand out in competitive landscapes and seize remarkable opportunities.",
      motivationalSrc: MotivationalImg,
    };
  },
};
</script>

<style scoped></style>
