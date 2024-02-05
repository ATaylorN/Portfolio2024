<template>
  <section>
    <Header class="sticky-top"/>
    <DataProjects/>
    <Footer/>
  </section>
</template>

<script>
import Header from '@/components/HeaderSection.vue'
import DataProjects from '@/components/DataProjects.vue'
import Footer from '@/components/FooterSection.vue'

export default {
    name: 'data-analytics',
    components: {
        Header,
        DataProjects,
        Footer
    }
}
</script>

<style>

</style>