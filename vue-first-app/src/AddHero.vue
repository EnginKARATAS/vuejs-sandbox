<template>
  <fieldset>
    <legend>Add Hero Section</legend>
    <button @click="setActiveComponent('the-kickoff-document')">
      Change Active Component to Hero List
    </button>
    <button @click="setActiveComponent('the-about-document')">
      Change Active Component to Add Hero
    </button>
  </fieldset>
</template>
<script>
export default {
  emits: ["setActiveComponent"],
  data() {
    return {};
  },
  methods: {
    setActiveComponent(cmpName) {
      console.log(
        "🚀 ~ file: AddHero.vue:20 ~ setActiveComponent ~ cmpName",
        cmpName
      );
      this.$emit("setActiveComponent", cmpName);
    },
  },
};
</script>
