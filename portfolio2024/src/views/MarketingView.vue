<template>
  <section>
    <Header class="sticky-top"/>
    <Marketing/>
    <Footer/>
  </section>
</template>

<script>
import Header from '@/components/HeaderSection.vue'
import Marketing from '@/components/MarketingCampaign.vue'
import Footer from '@/components/FooterSection.vue'

export default {
    name: 'data-analytics',
    components: {
        Header,
        Marketing,
        Footer
    }
}
</script>

<style>

</style>