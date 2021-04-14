<template>
    <div>
        <div>Header</div>
        <div class = "body">
            <h1>Body</h1>
            <div>Restaurant Cover</div>
            <div>
                <h1>Restaurant Info</h1>
                <h1> {{$route.params.id}} </h1>
            </div>
            <div>Dish List</div>
        </div>
        <div>Footer</div>
    </div>
</template>


<script>
//{{$route.params.id}} catch the matching id pattern from
//path retaurant/:id
//try this path: /restaurant/hung and you will see the result
export default {
    name: "resTemplate",
}
</script>
//
<style scoped>

</style>