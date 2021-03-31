<template>
    <div class="dish">
        <a class="dish__link" href="">
            <img class="dish__image dish__image--first" src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1366,format=auto,quality=50/https://cdn.doordash.com/media/photos%2Ff8c2b34d-ba56-40a0-91e3-a49041815b28-retina-large.jpg"/>
            <img class="dish__image" src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1366,format=auto,quality=50/https://cdn.doordash.com/media/photos%2Ff8c2b34d-ba56-40a0-91e3-a49041815b28-retina-large.jpg"/>
            <div class="dish__info">
                <h3 class="dish__name"> {{post.author}} </h3>
                <div class="dish__description">
                    <span class="dish__price-tag-deliv-time">
                        <p class="dish__price">$$</p>
                        <p>•</p>
                        <p class="dish__tag">Sweets, Breakfast</p>
                        <p class="dish__deliv-time">30 min</p>
                    </span>
                    <span class="dish__star-rating-deliv-cost">
                        <p class="dish__star">3.7★</p>
                        <p class="dish__rating">33 ratings</p> 
                        <p class="dish__deliv-cost">Free delivery</p>
                    </span>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: "PostComponent",
    props: ["post"]
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}
.dish-list {
    margin-left: 10px;
    flex: 66 1 0%;
}
.dish {
    background: white;
    margin-bottom: 20px;
    padding: 10px 17px 0 17px;
    box-shadow: 0 2px 16px #dadada;
    border-radius: 5px;
    width: fit-content;
}
.dish:hover {
    box-shadow: 0px 2px 26px rgb(0 0 0 / 24%), 0px 2px 8px rgb(0 0 0 / 8%);
    transition: 0.2s;
}
.dish__image {
    width: 280px;
    height: 140px;
    object-fit: cover;
    border-radius: 5px;
    margin: 18px 0 10px;
}
.dish__image--first {
  margin-right: 30px;
}
.dish p {
    display: inline-block;
    padding-right: 5px;
}
.dish__info *  {
    margin-block: 0;   
}
.dish__description {
    color: grey;
}
.dish__deliv-time, .dish__deliv-cost { /*padding-right not overriding*/
    padding-right: 0;
    float: right;
}
.dish__star-rating-deliv-cost {
    display: block;
    padding: 5px 0 7px;
}

</style>

