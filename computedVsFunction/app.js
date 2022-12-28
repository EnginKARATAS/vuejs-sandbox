let app = Vue.createApp({
  data() {
    return {
      a: 0,
      b: 0,
    };
  },
  computed: {
    computedPrintText() {
      console.log("computed printTextComputed", this.a);
    },
    computedStringifySomething() {
      console.log("computed stringifySomething", this.b);
    },
  },
  methods: {
    printTextMethodA() {
      console.log(" from method A:", this.a);
    },
    printTextMethodB() {
      console.log(" from method B:", this.b);
    },
  },
});
app.mount("#assignment");
