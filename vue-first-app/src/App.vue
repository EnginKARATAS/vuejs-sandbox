<template>
  <add-hero @setActiveComponent="setActiveComponent"></add-hero>

  <!-- <TheAboutDocument v-if="activeComponent == 'the-about-document'" />
  <TheKickoffDocument v-if="activeComponent == 'the-kickoff-document'" /> -->
  <!--OR-->
  <component :is="activeComponent"></component>
</template>
<script>
import HeroList from "./HeroList.vue";
import AddHero from "./AddHero.vue";
import TheAboutDocument from "./TheAboutDocument.vue";
import TheKickoffDocument from "./TheKickoffDocument.vue";
export default {
  components: { HeroList, AddHero, TheAboutDocument, TheKickoffDocument },
  data() {
    return {
      activeComponent: "the-about-document",
    };
  },
  methods: {
    setActiveComponent(componentName) {
      this.activeComponent = componentName;
    },
  },
};
</script>
