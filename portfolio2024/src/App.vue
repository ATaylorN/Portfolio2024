<template>
  <div id="app">
    <div class="amanda">
    <h1 class="name">Amanda Taylor</h1>
    <p class="about">Junior Software Developer *  Veteran  *  Artist  *  Sci-fi Enthusiast </p>
    </div>
    <HeaderSection/>
    <FooterSection/>
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    FooterSection
  }
}
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
}
.amanda{
  background: rgb(158,181,188);
  background: radial-gradient(circle, rgba(158,181,188,1) 0%, rgba(56,76,82,1) 73%, rgba(11,15,17,1) 100%);
  padding-top: 15%;
  padding-bottom: 15%;
}
.name{
  text-align: center;
  font-family: 'Share Tech Mono';
  font-size: 6em;
  margin: 0;
  color: #ECEAE4;
}
.about {
  text-align: center;
  margin: 0;
  font-family: 'Share Tech Mono';
  font-size: 1.4rem;
  color: #ECEAE4;
}
</style>
