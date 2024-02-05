<template>
  <section>
    <Header class="sticky-top"/>
    <GraphitePortraits/>
    <Footer/>
  </section>
</template>

<script>
import Header from '@/components/HeaderSection.vue'
import GraphitePortraits from '@/components/GraphitePortraits.vue'
import Footer from '@/components/FooterSection.vue'

export default {
    name: 'graphite-portraits',
    components: {
        Header,
        GraphitePortraits,
        Footer
    }
}
</script>

<style>

</style>