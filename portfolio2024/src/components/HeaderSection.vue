<template>
  <header>
 <nav class="navbar navbar-expand-lg sticky-top" id="menu">
  <div class="container-fluid justify-content-end">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
      <ul class="navbar-nav ">
        <li class="nav-item "><a class="nav-link" href="#">HOME</a></li>
        <li class="nav-item "><a class="nav-link" href="#">CODING PROJECTS</a></li>
        <li class="nav-item"><a class="nav-link" href="#">DATA ANALYTICS & PYTHON</a></li>
        <li class="nav-item"><a class="nav-link" href="#">MARKETING</a></li>
        <li class="nav-item"><a class="nav-link" href="#">GRAPHITE PORTRAITS</a></li>
        <li class="nav-item"><a class="nav-link" href="#">BLOG</a></li>
      </ul>
    </div>
  
  </div>
</nav>

  </header>

</template>

<script>
export default {
  name: 'HeaderSection',
}
</script>


<style scoped>
.nav-link{
  display: flex;
  justify-content: end;
  font-family: 'Share Tech Mono', monospace;
  font-weight: 600;
}
.nav-link:hover {
  background-color: #9EB5BC;
}
#menu{
  background-color: #ECEAE4;
  border: none;
  margin: 0;
}
</style>
