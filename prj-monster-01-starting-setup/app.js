function getRandomInteger(a, b) {
  //a, b is interval
  return Math.floor(Math.random() * (b - a)) + a;
}

let app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      roundHolderNum: 0,
      // lastMonsterHealth: null,
      // lastPlayerHealth: null,
      winner: null,
      logs: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0) {
        this.winner = "monster";
        this.playerHealth = 0;
      } else if (value < 0 && this.monsterHealth < 0) {
        this.winner = "draw";
      }
      if (value > 100) {
        this.playerHealth = 100;
      }
    },
    monsterHealth(value) {
      if (value <= 0) {
        this.winner = "player";
        this.monsterHealth = 0;
      } else if (value < 0 && this.playerHealth < 0) {
        this.winner = "draw";
      }
    },
  },
  computed: {
    mayUseSpecialAttack() {
      return this.roundHolderNum % 3 !== 0;
    },
  },
  methods: {
    addLogMessage(who, what, value) {
      this.logs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
    attackToMonster() {
      let randomNumber = getRandomInteger(5, 12);
      this.lastMonsterHealth = this.monsterHealth;
      this.monsterHealth = this.monsterHealth - randomNumber;
      this.attackToPlayer();
      this.roundHolderNum++;
      this.addLogMessage("player", "attack", randomNumber);
    },
    attackToPlayer() {
      let randomNumber = getRandomInteger(8, 18);
      this.lastPlayerHealth = this.playerHealth;
      this.playerHealth = this.playerHealth - randomNumber;
      this.roundHolderNum++;
      this.addLogMessage("monster", "attack", randomNumber);
    },
    attackSpecialToMonster() {
      let randomNumber = getRandomInteger(15, 24);
      this.monsterHealth = this.monsterHealth - randomNumber;
      this.attackToPlayer();
      this.roundHolderNum++;
      this.addLogMessage("player", "attack", randomNumber);
    },
    healPlayer() {
      if (this.playerHealth <= 100 || this.playerHealth >= 0) {
        let randomNumber = getRandomInteger(20, 30);
        this.playerHealth += randomNumber;
        this.attackToPlayer();
        this.roundHolderNum++;
        this.addLogMessage("player", "heal", randomNumber);
      }
    },
    surrender() {
      this.playerHealth = 0;
      this.winner = "monster";
      this.addLogMessage("player", "surrender", -999);
    },
    tryAgain() {
      (this.monsterHealth = 100),
        (this.playerHealth = 100),
        (this.winner = null);
      this.roundHolderNum = 0;
    },
  },
});

app.mount("#game");
