let app = Vue.createApp({
  data() {
    return {
      readingText: "",
      listVisibility: true,
      outputArr: [],
    };
  },
  computed: {
    toggleTaskText() {
      return this.listVisibility ? "Hide Content" : "Show Content";
    },
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
