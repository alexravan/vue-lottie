<template>
    <div :style="style" ref="lavContainer"></div>
</template>

<script>
    import bodymovin from 'bodymovin/build/player/bodymovin_light.js'

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
            width: Number
        },

        data () {
            return {
                animation: null,
                style: {
                    width: this.width ? `${this.width}px` : '100%',
                    height: this.height ? `${this.height}px` : '100%',
                    overflow: 'hidden',
                    margin: '0 auto'
                }
            }
        },
        methods: {
            play () {
                this.animation.play()
            },
            pause () {
                this.animation.pause()
            },
            stop () {
                this.animation.stop()
            },
            setSpeed (val) {
                this.animation.setSpeed(val)
            }
        },
        mounted () {
            this.animation = bodymovin.loadAnimation({
                container: this.$refs.lavContainer,
                renderer: 'svg',
                loop: this.loop,
                autoplay: this.autoplay,
                animationData: this.data,
                rendererSettings: this.settings
            })
        }
    }
</script>
