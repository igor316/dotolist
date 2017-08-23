<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <v-loading v-if="$isLoading('doLogin')" class="loader">
      <template slot='spinner'>
        <spinner message="Signing in..." :line-size="7" />
      </template>
    </v-loading>
  </div>
</template>

<script>
import Spinner from 'vue-simple-spinner'

export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left',
    }
  },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  },
  components: {
    Spinner,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}

.child-view {
  transition: all 1.5s cubic-bezier(.55,0,.1,1);
  position: absolute;
  width: 100%;
}

.slide-left-enter, .slide-right-leave-to {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-to, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}

.w-100 {
  width: 100%;
}

.w-50-center {
  width: 50%;
  margin: auto;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: left;
}

.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
