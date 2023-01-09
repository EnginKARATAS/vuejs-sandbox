<template>
  <user-data @emit-user-data="handleEmittedUserData()" ></user-data>
  <active-user :username='username' :age="age"></active-user>
</template>
<script>
export default {
  data() {
    return {
      username:'emptyusername',
      age:11
    };
  },
  methods:{
    handleEmittedUserData(username, age){
      this.username = username
      this.age = age
    }
  }
};
</script>
