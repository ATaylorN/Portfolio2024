<template>
  <div>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Coding Projects</a></li>
      <li><a href="#">Data Analytics & Python</a></li>
      <li><a href="#">Marketing</a></li>
      <li><a href="#">Graphite Portraits</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
  props: {
    
  }
}
</script>


<style scoped>

ul{
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #ECEAE4;
  position: fixed;
  top:0;
  width: 100%;
}
li{ 
  display: inline;
  float: left;
}
a{
  display: block;
  color: #384C52;
  padding: 18px 16px;
  background-color: #ECEAE4;
  text-decoration: none;
  font-family: 'Share Tech Mono', monospace;
  font-size: 20px;
}
a:hover{
  background-color: #9EB5BC;
}
</style>
