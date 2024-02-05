<template>
  <section>
    <Header class="sticky-top"/>
    <CodingProjects/>
    <Footer/>
  </section>
</template>

<script>
import Header from '@/components/HeaderSection.vue'
import CodingProjects from '@/components/CodingProjects.vue'
import Footer from '@/components/FooterSection.vue'

export default {
    name: 'coding-projects',
    components: {
        Header,
        CodingProjects,
        Footer
    }
}
</script>

<style>

</style>