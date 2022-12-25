let app = Vue.createApp({
  data() {
    return {
      readingText: "",
      listVisibility: true,
      outputArr: [],
    };
  },
  methods: {
    addToOutput() {
      this.outputArr.push(this.readingText);
    },
    toggleListVisibility() {
      this.listVisibility = !this.listVisibility;
    },
  },
});
app.mount("#assignment");
