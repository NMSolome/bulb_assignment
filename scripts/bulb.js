const bulb = {
    data() {
        return {
            switchBtn: true,
        }
    },
    methods:{
        switchBulb: function(){
            // this.switchBtn =! this.switchBtn
            this.switchBtn =! this.switchBtn

        }
    }
}

Vue.createApp(bulb).mount('#app')
