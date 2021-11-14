<template>
  <div id="app">
    <p>
      <img src="@/assets/fakery-logo.png">
    </p>
    <h1> Welcome to BFM Verif scraper by Anna </h1>
    <div id="body">
      <p> Choose a subject </p>
      <router-link to="/french-list"><button> Top French Companies </button></router-link>
      <router-link to="/info-list"><button> Top Info Companies </button></router-link>
      <button @click="toggleModal"> None </button>
      <div><ModalInfo v-bind:isOpen="isOpen" @toggleModal = "toggleModal" /></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ModalInfo from "./components/ModalInfo";

export default {
  name: 'App',
  components : {
  "ModalInfo": ModalInfo,
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
}
</script>

<style>
h1 {
  color: #009879;
  margin-bottom: 40px;
}

img {
  width: 30%;
}

p {
  margin-bottom: 40px;
}

button {
  margin: 10px;
  background-color: #009879;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

button:hover {
  background-color: #23803d;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

</style>
