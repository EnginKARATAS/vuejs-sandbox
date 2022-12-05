let app = Vue.createApp({
    data(){
        return {
            myName:'Engin Karatas',
            age: 23,
            imageURL: 'https://fakeimg.pl/300/'
        }
    },
    methods:{
        myFavoriteNumber(){
            return Math.random()
        },
        myAgeAfterYearsAgo(number){
            return this.age + 5
        }
    }
})

app.mount('#assignment')