let app = Vue.createApp({
  data() {
    return {
      incomingStyle: "",
      toggleClass: "",
      paragraphIsVisibility: true,
      colorName: "",
    };
  },
  watch: {
    toggleClass(tt) {
      console.log("tt", tt);
    },
  },
  computed: {
    toggleVisibilityParagraph() {
      console.log(
        "🚀 ~ file: app.js:17 ~ toggleVisibilityParagraph ~ toggleVisibilityParagraph",
        "toggleVisibilityParagraph"
      );
      this.paragraphIsVisibility = !this.paragraphIsVisibility;
    },
    changeStyle() {
      return {
        user1: this.incomingStyle === "user1",
        user2: this.incomingStyle === "user2",
        visible: this.paragraphIsVisibility,
        hidden: !this.paragraphIsVisibility,
      };
    },
  },
  methods: {
    toggleParagraphVisibility() {
      this.paragraphIsVisibility = !this.paragraphIsVisibility;
      console.log(
        "🚀 ~ file: app.js:35 ~ toggleParagraphVisibility ~ paragraphIsVisible",
        this.paragraphIsVisibility
      );
    },
  },
});
app.mount("#assignment");
