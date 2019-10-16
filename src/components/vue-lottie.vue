<template>
    <div :style="style" ref="lavContainer"></div>
</template>

<script>
    import Vue from 'vue'
    let lottieWeb

    if (!Vue.prototype.$isServer) {
        lottieWeb = require('lottie-web/build/player/lottie_light.js')
    }

    export default {
        props: {
            data: {
                type: Object,
                required: true
            },
            loop: Boolean,
            autoplay: {
                type: Boolean,
                default: true
            },
            settings: Object,
            height: Number,
            width: Number,
            renderer: String,
        },

        data () {
            return {
                animation: null
            }
        },
        computed: {
            style () {
                let style = {}
                if (this.width) {
                    style.width = this.width + 'px'
                }
                if (this.height) {
                    style.height = this.height + 'px'
                }
                return style
            }
        },
        methods: {
            play () {
                if (this.animation) {
                    this.animation.play()
                }
            },
            pause () {
                if (this.animation) {
                    this.animation.pause()
                }
            },
            stop () {
                if (this.animation) {
                    this.animation.stop()
                }
            },
            setSpeed (val) {
                if (this.animation) {
                    this.animation.setSpeed(val)
                }
            }
        },
        mounted () {
            if (lottieWeb) {
                this.animation = lottieWeb.loadAnimation({
                    container: this.$refs.lavContainer,
                    renderer: this.renderer,
                    loop: this.loop,
                    autoplay: this.autoplay,
                    animationData: this.data,
                    rendererSettings: this.settings
                })
            }
        }
    }
</script>
