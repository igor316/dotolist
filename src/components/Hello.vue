<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <my-input v-model="fullName" />
    <my-input v-model="firstName" />
    <my-input :inputValue="lastName" @change="val => { lastName = val }" />
    <h2>Ecosystem</h2>
    <h6>{{ ecosysCount }}</h6>
    <ul>
      <li v-for="(link, index) in ecosys">
        <a :style="{ 'font-weight': 900 }" :class="liClass" v-bind:href="link.ref" target="_blank">{{ index }}: {{ link.text | toUpper }}</a>
      </li>
    </ul>
    <ul>
      <template v-for="(val, key) in { asd: 5, qwe: 6 }">
        <li>{{ key }}</li>
        <li>{{ val }}</li>
      </template>
    </ul>
    <ul>
      <li v-for="n in 10">{{ n }}</li>
    </ul>
  </div>
</template>

<script>
import MyInput from './MyInput.vue'
export default {
  name: 'hello',
  data () {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
      msg: 'Welcome to Your Vue.js App',
      ecosys: [{
        ref: 'http://router.vuejs.org/',
        text: 'vue-router',
      }, {
        ref: 'http://vuex.vuejs.org/',
        text: 'vuex',
      }, {
        ref: 'http://vue-loader.vuejs.org/',
        text: 'vue-loader',
      }, {
        ref: 'https://github.com/vuejs/awesome-vue',
        text: 'awesome-vue',
      }],
    }
  },
  components: {
    'my-input': MyInput,
  },
  filters: {
    toUpper (val) {
      return val.toUpperCase()
    },
  },
  computed: { // we can use watch feature instead of this, which is more complex
    ecosysCount: function () {
      return this.ecosys.length
    },
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      },
    },
    liClass: function () {
      return {
        danger: this.firstName.length % 2 === 0,
      }
    },
  },
  created () {
    let i = 0
    const interval = setInterval(() => {
      this.msg = this.msg + 'wattafak'
      i++
      if (i === 5) {
        clearInterval(interval)
      }
    }, 1000)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.danger {
  color: #f00;
}
</style>
