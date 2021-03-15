<template>
<div>
    <!-- navigationNextLabel là button next, tìm cách thêm vào component vào chỗ này -->
    <carousel 
    perPage="2"
    :navigationEnabled="true"
    navigationNextLabel=""
    navigationPrevLabel=""
    >
        <slide>123</slide>
        <slide>456</slide>
        <slide>7809</slide>
    </carousel>
    
    <Button innerText="prev"/>
    <Button innerText="next"/>
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
    }
}
</script>

<style scoped>
</style>