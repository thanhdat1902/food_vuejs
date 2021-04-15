<template>
    <div>
        <Header/>
        <ResBody/>
        <Footer/>
    </div>
</template>


<script>
import ResBody from "@/components/resTemplate/ResBody.vue"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

//{{$route.params.id}} catch the matching id pattern from
//path retaurant/:id
//try this path: /restaurant/hung and you will see the result
export default {
    name: "resTemplate",
    components: {
        Header,
        Footer,
        ResBody,
    }
}
</script>

<style scoped>

</style>