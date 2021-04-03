<template>
    <!-- <button>{{innerText}}</button> -->
        <a href="#">
                <div>
                    <img class="food-icon" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                    <p>{{innerText}}</p>
                </div>
        </a>
</template>
<script>
export default {
    name:"Button",
    props: {
        innerText: String
    },
    components: {

    }
}
</script>

<style scoped>
    div {
        width: fit-content;
        text-align: center;
        margin-right: 50px;
    }
    a {
        text-decoration: none;
        color: black;
    }
    img {
        width: 50px;
        height: 50px;
        
    }
    p {
        font-size: 12px;
        margin-top: 5px;
    }
</style>