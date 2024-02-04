<template>
  <div id="app">
    <h1> Amanda Taylor <br>
    Junior Software Developer
    </h1>
    <HeaderSection/>
    <h2>Filler Section </h2>
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
h1{
  font-family: 'Roboto Condensed', sans-serif;
  padding: 200px;
  text-align: center;
  background-color: #384C52;
  margin: 0;
}
h2{
  padding: 2000px;
}
</style>
