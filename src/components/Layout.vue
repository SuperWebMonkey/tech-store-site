<template>
  <div class="layout">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
    components: {
        Navbar,
        Footer
    }
};
</script>

<style></style>
