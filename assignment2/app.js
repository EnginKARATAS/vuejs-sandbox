let app = Vue.createApp({
    data(){
        return {
            paragraphText: 'test'
        }
    },
    methods:{
        showAlert(){
            alert('Do not distress yourself')
        },
        inputHolder(event){
            this.paragraphText = event.target.value
        }
    }
})
app.mount('#assignment')