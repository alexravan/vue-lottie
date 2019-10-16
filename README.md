## Wapper of bodymovin.js

[bodymovin](https://github.com/bodymovin/bodymovin) is [Adobe After Effects](http://www.adobe.com/products/aftereffects.html) plugin for exporting animations as JSON, also it provide bodymovin.js for vender them as svg/canvas/html.

<!-- ## Demo
https://serzz1990.github.io/vue-lottie/
![Demo](https://s5o.ru/storage/dumpster/1/48/d25645a8f285fadc25d399a1a8b34.png) -->

## Why Lottie?

#### Flexible After Effects features
We currently support solids, shape layers, masks, alpha mattes, trim paths, and dash patterns. And we’ll be adding new features on a regular basis.

#### Manipulate your animation any way you like
You can go forward, backward, and most importantly you can program your animation to respond to any interaction.

#### Small file sizes
Bundle vector animations within your app without having to worry about multiple dimensions or large file sizes. Alternatively, you can decouple animation files from your app’s code entirely by loading them from a JSON API.

[Learn more](http://airbnb.design/introducing-lottie/) › http://airbnb.design/lottie/

Looking for lottie files › https://www.lottiefiles.com/


## Installation

Install through npm:
```
npm install vue-lottie-ssr --save
```


Available props:

- `data` - animation json data.
- `width` - svg width (Number).
- `height` - svg height (Number).
- `loop` - loop animation. [default: false]
- `autoplay` - autoplay animation. [default: true]
- `renderer` - 'svg' | 'html' | 'canvas' (String required)
- `settings` - bodymovin renderer settings (Object).

Available methods:
- `play` - play animation
- `pause` - pause animation
- `stop` - stop animation
- `setSpeed` - setSpeed animation

## Usage

```vue
<template>
    <div id="app">
        <vue-lottie ref="lottie" loop autoplay :data="animationData" renderer="html" :height="400" :width="400"></vue-lottie>

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
```

## SSR
Component has validation Vue.prototype.$isServer
set `true for server side rendering
```
Vue.prototype.$isServer = true
```

More information on [Bodymoving Documentation](https://github.com/bodymovin/bodymovin)

## License
MIT
