<template>
    <div class="post">
        <p>Load into here</p>
        <h2> {{post.author}} </h2>
        <p> {{post.content}} </p>
    </div>
</template>

<script>
export default {
    name: "PostComponent",
    props: ["post"]
}
</script>

<style scoped>

</style>

