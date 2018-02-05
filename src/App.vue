<template>
    <div id="app">
        <vue-lottie ref="lottie" loop autoplay :data="animationData" :height="400" :width="400"></vue-lottie>

        <div>
            <p>Speed: x{{speed}}</p>
            <input type="range" value="1" min="0" max="3" step="0.5" v-on:change="onSpeedChange" v-model="speed">
        </div>
        <button v-on:click="stop">stop</button>
        <button v-on:click="pause">pause</button>
        <button v-on:click="play">play</button>
    </div>

</template>

<script>
    import vueLottie from './components/vue-lottie.vue'
    import animationData from './assets/pinjump.json'

    export default {
        name: 'app',
        components: {
            vueLottie
        },
        data () {
            return {
                speed: 1,
                animationData
            }
        },
        computed: {
            lottie () {
                return this.$refs.lottie
            }
        },
        methods: {
            stop () {
                this.lottie.stop()
            },

            play () {
                this.lottie.play()
            },

            pause () {
                this.lottie.pause()
            },

            onSpeedChange: function () {
                this.lottie.setSpeed(this.speed)
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
