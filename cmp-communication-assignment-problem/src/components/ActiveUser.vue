<template>
    <h2>{{username}}</h2>
    <h3>{{age}}</h3>
</template>

<script>
export default {
    props:{
        username:{
            type: String,
            required: false
        },
        age:{
            type:Number,
            required:false
        }
    }
};
</script>
