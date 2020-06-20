<template>
  <div>
    <!-- Header -->
    <main-header></main-header>
    <!-- slider -->
    <slot name="slider"></slot>
    <!-- Content -->
    <section>
        <div class="container">
        <div class="row">
            <slot></slot>
        </div>
        </div>
    </section>

    <!-- Footer -->
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'

export default {
    name: `LayoutDefault`,
    components: {
        MainHeader,
        MainFooter
    },
    data() {
        return {
            title: 'Main Layout'
        }
    },
    created() {    
    },
};
</script>

<style lang="scss">

</style>
