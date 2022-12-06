let app = Vue.createApp({
  data() {
    return {
      toggleClass: "",
      paragraphIsVisible: false,
      colorName: "",
    };
  },
  watch: {
    toggleClass(tt) {
      console.log("tt", tt);
    },
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.toggleClass === "user1",
        user2: this.toggleClass === "user2",
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
      };
    },
  },
  methods: {
    showHide() {
      console.log("d");
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
});
app.mount("#assignment");
