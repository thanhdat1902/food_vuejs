<template>
<div>
    <!-- navigationNextLabel là button next, tìm cách thêm vào component vào chỗ này -->
    <carousel 
    :perPage="8.5"
    :navigationEnabled="true"
    :paginationEnabled="false"
    :speed=700
    >
        <!-- <slide>123</slide>
        <slide>456</slide>
        <slide>7809</slide> -->
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
        <slide><Button innerText="Sample"/></slide>
    </carousel>
    
    <!-- <Button innerText="Sample"/>
    <Button innerText="Sample"/> -->
</div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
import Button from '../share/components/Button';
export default {
    name:"ItemCarousel",
    
    components: {
        Carousel,
        Slide,
        Button
    },
    methods : {
        // next () {
        // },
        // prev () {
        // },
    }
}
</script>

<style scoped>
</style>