<template>
    <header id="header"><!--header-->
        <header-top></header-top>
        <header-middle></header-middle>
        <header-bottom></header-bottom>
    </header>
</template>

<script>
import HeaderTop from "@/components/navigations/HeaderTop";
import HeaderMiddle from "@/components/navigations/HeaderMiddle";
import HeaderBottom from "@/components/navigations/HeaderBottom";
export default {
    name: `MainHeader`,
    data() {
        return {
            title: 'Main Header'
        }
    },
    components: {
        HeaderTop,
        HeaderMiddle,
        HeaderBottom
    }
};
</script>