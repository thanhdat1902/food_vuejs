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
            <div class="divide-column">
                <div class="ele">
                    <div class="text">
                        <p> <strong> Chick-n-Minis </strong> </p>
                        <p> Bite-sized Chick-fil-A Nuggets nestled in
                        warm, mini yeast rolls that are lightly brushed with a honey butter spread.
                        </p>
                        <p>$5.45</p>
                    </div>
                    <div class="img">
                        <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/photos/aedb65d1-e5b2-4728-b187-2a163465f3f8-retina-large-jpeg">
                    </div>
                </div>
                <div class="ele">
                    <div class="text">
                        <p> <strong> Hash Brown Scramble Burrito </strong> </p>
                        <p>A hearty morning meal of sliced Chick-fil-A Nuggers, crispy Hash Browns,
                        scrambled eggs and a blend of Monterey Jack and Cheddar cheeses. Made fresh
                        each morning. Rolled in a warm flour tortilla.
                        Serve with Jalapeno Salsa.
                        </p>
                        <p>$5.70</p>
                    </div>
                    <div class="img">
                        <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/photos/7d963eda-b0aa-4682-866f-f1a52f30438c-retina-large-jpeg">
                    </div>
                </div>
            </div>

            <div class="divide-column">
                <div class="ele">
                    <div class="text">
                        <p> <strong> Iced Coffee </strong> </p>
                        <p>Handcrafted daily, made with a custom blend of cold-brewed coffee and 2% milk,
                        sweetened with pure cane sugar and served over ice. Our coffee beans are sourced by THRIVE
                        Farmers, a farmer-direct coffee company that enriches the lives and
                        communities of those who grow it. Available all day in Original or Vanilla.   
                        </p>
                        <p>$4.00 </p>
                    </div>
                    <div class="img">
                        <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/photos/826dfa19-5bf9-47a7-85e0-9346986115ef-retina-large-jpeg">
                    </div>
                </div>
                <div class="ele">
                    <div class="text">
                        <p> <strong> Simple Orange </strong> </p>
                        <p>100% pure-squeezed, pasteurized Orange Juice.</p>
                        <p>$3.60</p>
                    </div>
                    <div class="img">
                        <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photos/13d650fe-becc-45cb-835c-42fe4bf8c7b2-retina-large-jpeg">
                    </div>
                </div>
            </div>

            <div class="divide-column">
                <div class="ele">
                    <div class="text">
                        <p> <strong> Chick-fil-A Nuggets </strong> </p>
                        <p>Bite-sized pieces of boneless chicken breast, seasoned to perfection,
                        freshly breaded and pressure cooked in 100% refined peanut oil.
                        Available with choice of dipping sauce.   
                        </p>
                        <p>$5.70 </p>
                    </div>
                    <div class="img">
                        <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photos/217aea22-95c3-4347-a443-6b436bba8ed8-retina-large-jpeg">
                    </div>
                </div>
                <div class="ele">
                    <div class="text">
                        <p> <strong> Hash Brown Scramble Bowl </strong> </p>
                        <p>A hearty morning meal of sliced Chick-fil-A Nuggets, crispy
                        Hash Browns, scrambled eggs and a blend of Monterey Jack and Cheddar cheeses.
                        Made fresh each morning. Served in a convenient bowl. Served with Jalapeno Salsa.   
                        </p>
                        <p>$5.70</p>
                    </div>
                    <div class="img">
                        <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photos/4306e9b8-495f-4224-b933-ef37573552f5-retina-large-jpeg">
                    </div>
            </div>
        </div>
            <h2 id="build"> Build your own Family Meal </h2>
            <h2 id="entree"> Entrees </h2>
            <h2 id="side"> Sides </h2>
            <h2 id="beverages"> Beverages </h2>
            <h2 id="salad"> Salad </h2>
            <h2 id="treat"> Treat </h2>
            <h2 id="sauce"> 8oz Sauces </h2>
            <p> Prices on this menu are set directly by Merchant. </p>
            <p> <strong> American (New) </strong> delivered from <strong>Chick-fil-A </strong>at
            <strong>5323 Mission Center Rd, San Diego, CA 92108, USA </strong> </p>
        </div>
        <hr>
        <div class="footer">
            <div>
                <p> <strong> Trending Restaurants </strong> </p>
                <p> Baba lou's </p>
                <p> Saigon Star </p>
                <p> Walgreens </p>
                <p> Fusion eats </p>
                <p> Chili's Grill &  Bar </p>
            </div>
            <div>
                <p> <strong> Top Dishes Near Me </strong> </p>
                <p> Sweet And Sour Chicken near me </p>
                <p> Wor Wonton Soup near me </p>
                <p> Caprese Panini near me </p>
                <p> Beef Curry near me </p>
                <p> Crispy Chicken Strips near me </p>
            </div>
            <div>
                <p> <strong> Top Cuisines Near Me </strong> </p>
                <p> Asian near me </p>
                <p> Middle Eastern near me </p>
                <p> Steak near me </p>
                <p> Japanese near me </p>
                <p> Food near me </p>
            </div>
            <div>
                <p> <strong> Trending Categories </strong> </p>
                <p> American </p>
                <p> Take out </p>
                <p> Pickup </p>
                <p> Sandwiches </p>
                <p> Desserts </p>
            </div>
            <div>
                <p>     </p>
                <p> Breakfast </p>
                <p> Chicken </p>
                <p> Lunch </p>
                <p> Mexican </p>
                <p> Fast food </p>
            </div>
            <div>
                <p> <strong>Nearby Cities </strong> </p>
                <p> Border </p>
                <p> Porway </p>
                <p> Carlsbad </p>
                <p> Escondido </p>
                <p> Del Mar </p>    
            </div>
        </div> 
        <br><br>
        <div class="footer2">
            <div> 
                <p> <strong> Get to Know Us </strong> </p>
                <p> About Us </p>
                <p> Careers </p>
                <p> Investors </p>
                <p> Blog </p>
                <p> Engineering Blog </p>
                <p> Gift Cards </p>
                <p> DoorDash Stories </p>
                <p> LinkedIn </p>
                <p> Glassdoor </p>
                <p> Accessibility </p>
            </div>
            <div>
                <p> <strong> Let Us Help You </strong> </p>
                <p> Account Details </p>
                <p> Order History </p>
                <p> Help </p>
            </div>
            <div>
                <p> <strong> Doing Business </strong> </p>
                <p> Become a Dasher </p>
                <p> Be a Partner Restaurant </p>
                <p> Get Dashers for Deliveries </p>
                <p> Get DoorDash for Work </p>
            </div>
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
.footer2{
    width: 60%;
    display: flex;
    justify-content: space-between;
}
.footer{
    display: flex;
    justify-content: space-between;
}
.divide-column{
    display: flex;
    justify-self: space-between;
}
.ele{
    display: flex;
    justify-content: space-between;
    border-style: solid;
    border-radius: 5px;
    border-width: 2px;
    text-align: left;
    box-sizing: border-box;
    width: 40%;
    height: cover;
}
.text{
    width: 70%;
}
.img{
    width: 30%;
}
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