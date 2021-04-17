<template>
<div class="container">
    <div class="">
        <div class="cover">
            <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/store/header/1855.png"
             alt="" class="rcorners cover-image">
             <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/restaurant/cover_square/Chick-fil-A%C3%82_logo.png" 
             alt="" class="avatar">
        </div>
        <div class="name-container">
           <h1>{{$route.params.id}}</h1> 
        </div>
        <div class="text-above">
            <h1> Chick-fil-A </h1>
            <pre> DashPass . Chicken sandwiches, nuggets
    4.7 (stars) (13,600+ ratings) . 7785.9 mi . $
            </pre>
        </div>
        <div class="set-height">
            <div class="text-inside">
                <p> <strong> $0.00 </strong> </p>
                <p> delivery free </p>
            </div>
            <div class="box-inside">
                <p> <strong> Unavailable</strong> </p>
                <p> too far away i</p>
            </div>
        </div>
        <br><br><br><br><br><br>

        <div class="yellow-box">
            <p>Enter your address </p>
            <p>We'll confirm that you can have this restaurant delivered </p>
            <input type="text" name="address" placeholder="Address" />
        </div>
        <p> Local restaurants delivered in 45 minutes </p>
        <hr>
        
        <div class="align-left"> 
            <p> <strong> All day </strong> </p>
            <p> 10:00 am - 9:30 pm </p>
        </div>

        <div class="justify-content">
            <a href="#pop"> Popular Items </a>
            <a href="#build"> Build your own Family Meal </a>
            <a href="#entree"> Entrees </a>
            <a href="#side"> Sides </a>
            <a href="#beverages"> Beverages </a>
            <a href="#salad"> Salad </a>
            <a href="#treat"> Treat </a>
            <a href="#sauce"> 8oz Sauces </a>
        </div>    
        <div class="list-food">
            <h2 id="pop"> Popular Items </h2>
            <p> The most commonly ordered items and dishes from this store </p>
            <h2 id="build"> Build your own Family Meal </h2>
            <h2 id="entree"> Entrees </h2>
            <h2 id="side"> Sides </h2>
            <h2 id="beverages"> Beverages </h2>
            <h2 id="salad"> Salad </h2>
            <h2 id="treat"> Treat </h2>
            <h2 id="sauce"> 8oz Sauces </h2>
        </div>
        <h1>Body</h1>
    </div>
</div>
</template>

<script>
export default {
    name: "ResBody",
    setup() {
        
    },
}
</script>

<style scoped>
.h2{
    text-align: left;
}
.justify-content{
    display: flex;
    justify-content: space-between;
    text-align: left;
}
.align-left{
    text-align: left;
}

.yellow-box{
    border-style: solid;
    background-color: yellow;
    border-radius: 5px;
    padding-bottom: 20px;
}
.set-height{
    position: absolute;
    width: 30%;
    height: 105px;
    border-style: solid;
    border-radius: 20px;
}
.text-inside{
    position: relative;
    width: 30%;
    left: 10%;

}
.box-inside{
    position: relative;
    width: 40%;
    top: -75%;
    left: 55%;
    border-style: solid;
    border-radius: 10px;
    border-width: 10%;
    background-color: #920000;
    color: white;
}
.text-above{
    text-align: left;
}


img{
    max-width: 100%;
    max-height: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block
}

.container{
    margin: 40px;
}

.cover{
    width: 100%;
    height: 290px;
    position: relative;
}

.cover-image{
    object-fit: cover;
    width: 90%;
    height: 250px;
}

.avatar {
    position: absolute;
    left: 10%;
    bottom: 0px;
    z-index: 2;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px
}

.rcorners {
    border-radius: 10px;
    z-index: 1;
}

</style>