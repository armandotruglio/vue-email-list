const xhhtp = new XMLHttpRequest();
const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emailList: [],
            emailsNumber : 10
        }
    },
    methods: {
        getRandomEmail() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.emailList.push(response.data.response);
                })
        }
    },
    mounted() {
        for (let i = 0; i < this.emailsNumber; i++){
            this.getRandomEmail();
        }
    },
}).mount('#app');