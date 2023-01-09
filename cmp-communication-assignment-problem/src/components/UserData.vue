<template>
  <input type="text" v-model="username"  />
  <input type="text" v-model="age" />
  <button @click="emitUserData()">Emit User Data</button>
</template>

<script>
export default {
  emits: ['emit-user-data'],
  data(){
    return{
        username: '',
        age: 0
    }
  },
  methods:{
    emitUserData(){
        this.$emit('emit-user-data', this.username, this.age)
    }
  }
};
</script>
