<template>
  <section>
    <Header class="sticky-top"/>
    <Blog/>
    <Footer/>
  </section>
</template>

<script>
import Header from '@/components/HeaderSection.vue'
import Blog from '@/components/BlogSection.vue'
import Footer from '@/components/FooterSection.vue'

export default {
    name: 'blog-section',
    components: {
        Header,
        Blog,
        Footer
    }
}
</script>

<style scoped>

</style>