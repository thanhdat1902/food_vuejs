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