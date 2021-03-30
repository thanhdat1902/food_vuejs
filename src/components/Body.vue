<template>
<div class="body">
    <div class="body-header">
    <ItemCarousel/>
    <div class="body-header__button-list">
        <button class="button button--normal">Pickup</button>
        <button class="button button--normal button--rating">Over 4.5 ★ 
            <div class="button__divide"></div>
            <button v-on:click="displayRating('menu-rating--header')" class="button button--dropdown">v</button>
            <div class="menu-rating menu-rating--header">
                <div class="menu-rating__score">
                    <span class="menu-rating__tag">4.5</span>
                    <div class="menu-rating__score-cap">
                        <p class="menu-rating__score-star">4.5 ★</p>
                        <span class="menu-rating__score-range">and over</span>
                    </div>
                </div>
                <div class="menu-rating__button">
                    <button class="button button--normal button--cancel">Cancel</button>
                    <button class="button button--normal button--result">View Results</button>
                </div>
            </div>
        </button>
        <button class="button button--normal">Under 30 min</button>
        <button class="button button--normal">Vegetarian</button>
        <button class="button button--normal button--price">$,$$ 
            <div class="button__divide"></div>
            <button v-on:click="displayPrice('menu-price--header')" class="button button--dropdown">v</button>
            <div class="menu-price menu-price--header">
                <span class="menu-price__tag">Menu price</span>
                <div class="menu-price__price-range">
                    <button v-on:click="togglePrice" class="button--price-range button--price-range-selected">$</button>
                    <button v-on:click="togglePrice" class="button--price-range button--price-range-selected">$$</button>
                    <button v-on:click="togglePrice" class="button--price-range">$$$</button>
                    <button v-on:click="togglePrice" class="button--price-range">$$$$</button>
                </div>
                <div class="menu-price__button">
                    <button class="button button--normal button--cancel">Cancel</button>
                    <button class="button button--normal button--result">View Results</button>
                </div>
            </div>
        </button>
    </div>
    </div>

    <div class="body__bgr">
        <div class="body__main">
            <div class="sidebar">
                <aside class="sidebar--sticky">
                    <h1 class="sidebar__title">All Restaurant</h1>
                    <p class="sidebar__restaurant-found">1234 STORES NEARBY</p>
                    <div class="sidebar__icon-list">
                        <a class="food-icon" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon food-icon--see-more" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon food-icon--see-more" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon food-icon--see-more" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon food-icon--see-more" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon food-icon--see-more" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon food-icon--see-more" href="#">
                            <div>
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                    </div>
                    <div class="sidebar__see-more">
                        <button v-on:click="seeMore" class="button button--normal button--see-more">See All v</button>
                    </div>
                    

                    <div class="sidebar__button-list">
                        <button class="button button--normal">Pickup</button>
                        <button class="button button--normal button--rating">Over 4.5 ★
                            <div class="button__divide"></div>
                            <button v-on:click="displayRating('menu-rating--sidebar')" class="button button--dropdown">v</button>
                            <div class="menu-rating menu-rating--sidebar">
                                <div class="menu-rating__score">
                                <span class="menu-rating__tag">4.5</span>
                                <div class="menu-rating__score-cap">
                                    <p class="menu-rating__score-star">4.5 ★</p>
                                    <span class="menu-rating__score-range">and over</span>
                                </div>
                            </div>
                            <div class="menu-rating__button">
                                <button class="button button--normal button--cancel">Cancel</button>
                                <button class="button button--normal button--result">View Results</button>
                            </div>
                            </div>
                        </button>
                        <button class="button button--normal">Under 30 min</button>
                        <button class="button button--normal">Vegetarian</button>
                        <button class="button button--normal button--price">$,$$
                            <div class="button__divide"></div>
                            <button v-on:click="displayPrice('menu-price--sidebar')" class="button button--dropdown">v</button>
                            <div class="menu-price menu-price--sidebar">
                                <span class="menu-price__tag">Menu price</span>
                                <div class="menu-price__price-range">
                                    <button v-on:click="togglePrice" class="button--price-range button--price-range-selected">$</button>
                                    <button v-on:click="togglePrice" class="button--price-range button--price-range-selected">$$</button>
                                    <button v-on:click="togglePrice" class="button--price-range">$$$</button>
                                    <button v-on:click="togglePrice" class="button--price-range">$$$$</button>
                                </div>
                                <div class="menu-price__button">
                                    <button class="button button--normal button--cancel">Cancel</button>
                                    <button class="button button--normal button--result">View Results</button>
                                </div>
                            </div>
                        </button>
                    </div>
                </aside>
            </div>

            <div class="dish-list">
                <ListComponent/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ItemCarousel from './Carousel'
import ListComponent from "./ListComponent.vue"

export default {
  name: 'Body',
  components: {
    StyledInfinityList,
    ItemCarousel,
    ListComponent
  },
  methods: {
    seeMore: function(){
        let myBtn = document.getElementsByClassName("button--see-more")[0];
        let hiddenIcons = document.getElementsByClassName("food-icon--see-more");

        if (myBtn.textContent === "See Less ^"){
            Array.from(hiddenIcons).forEach(icon => {
                icon.style.display = "none";
            })
            myBtn.textContent = "See All v";
        }
        else if (myBtn.textContent === "See All v") {
            Array.from(hiddenIcons).forEach(icon => {
                icon.style.display = "inline";
            })
            myBtn.textContent = "See Less ^";
        }
    },
    displayRating: function(tag){
        let object = document.getElementsByClassName(tag)[0];
        let display = window.getComputedStyle(object).display;
        if (display === "none")
            object.style.display = "flex";
        else
            object.style.display = "none";
    },
    displayPrice: function(tag){
        let object = document.getElementsByClassName(tag)[0];
        let display = window.getComputedStyle(object).display;
        if (display === "none") 
            object.style.display = "flex";
        else
            object.style.display = "none";
    },
    togglePrice: function(){
        let object = event.target;
        let check = 'button--price-range-selected';
        if (object.classList.contains(check))
            object.classList.remove(check);
        else
            object.classList.add(check);
    }
  }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}
p {
    font-size: 14px;
}

.body {
    text-align: left;
}
.body-header {
    width: 960px;
    margin: 10px auto;
}
.body-header__button-list {
    margin-top: 20px;
}
.body__bgr {
    background: #f6f6f6;
    padding-top: 64px;
}
.body__main {
    width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: row;
}

.sidebar {
    z-index: 1;
    flex: 33 1 0%;
}
.sidebar--sticky {
    margin: 0 10px 20px;
    position: sticky;
    top: 20px;
}
.sidebar__title {
    font-size: 30px;
    margin: 15px 0 0 20px;
}
.sidebar__restaurant-found {
    font-size: 12px;
    margin: 5px 0 15px 20px;
    font-weight: bold;
}
.sidebar__icon-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5px 0;
}
.sidebar__button-list {
    margin: 0 0 40px;
}
.sidebar__see-more {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10px auto 20px;
}
.sidebar__see-more:before {
    content: "";
    border-bottom: 1px solid rgb(214, 214, 214);
    position: absolute;
    left: 0px;
    right: 0px;
    top: 50%;
}

.food-icon {
    width: fit-content;
    text-align: center;
    width: 96px;
    overflow-wrap: break-word;
    margin: 5px 0;
}
.food-icon__name {
    margin: 5px 0 0 0;
    font-size: 12px;
}
.food-icon__img {
    width: 50px;
    height: 50px;
}
.food-icon--see-more {
    display: none;
}

.button {
    width: fit-content;
    height: 32px;
    border: none;
    outline: none;
    font-weight: bold;
}
.button:hover {
    background: #f6f6f6;
    transition: 0.2s;
}
.button:active {
    background: #cecdcd;
}
.button__divide {
    display: inline;
    border-left: 1px solid rgb(185, 185, 185);
    height: 16px;
}
.button--normal {
    padding: 0 12px;
    border-radius: 50px;
    background: #dfdfdf;
    margin: 0 15px 10px 0;
}
.button--dropdown {
    padding: 0  5px 0 10px;
    background-color: transparent;
}
.button--see-more {
    background-color: white;
    z-index: 1;
    margin: 0;
}
.button--rating, .button--price {
    position: relative;
}

.menu-rating {
    width: 270px;
    height: 240px;
    border-radius: 15px;
    background-color: white;
    position: absolute;
    box-shadow: 0 0 8px 2px #d3d3d3;
    z-index: 2;
    box-sizing: border-box;
    display: none;
    flex-direction: column;
    white-space: nowrap;
    text-align: start;
}
.menu-rating--header {
    top: 32px;
    left: -5px;
}
.menu-rating--sidebar {
    bottom: 32px;
    left: -5px;
}
.menu-rating__score {
    padding: 24px 24px 0;
}
.menu-rating__score-cap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 97px;
}
.menu-rating__score-star {
    font-size: 175%;
    margin: 5px 0 10px;
}
.menu-rating__score-range {
    font-size: 75%;
    color: grey;
}
.menu-rating__button {
    display: flex;
    justify-content: space-evenly;
}
.button--cancel {
    padding: 0 25px;
    margin: 0;
}
.button--result {
    padding: 0 25px;
    background-color: #ff3721;
    color: white;
    margin: 0;
}
.button--result:nth-child(2) {
    margin-left: 16px;
}
.menu-price {
    width: 340px;
    height: 180px;
    border-radius: 15px;
    background-color: white;
    position: absolute;
    box-shadow: 0 0 8px 2px #d3d3d3;
    z-index: 2;
    box-sizing: border-box;
    display: none;
    flex-direction: column;
    white-space: nowrap;
    text-align: start;
    padding: 24px 20px 0;
}
.menu-price--header {
    top: 32px;
    left: -5px;
}
.menu-price--sidebar {
    bottom: 32px;
    left: -5px;
}
.menu-price__price-range {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 0;
}
.button--price-range {
    width: 65px;
    height: 65px;
    background-color: rgb(228, 228, 228);
    border-radius: 50%;
    border: none;
    outline: none;
    font-size: 16px;
}
.button--price-range-selected {
    background-color: black;
    color: white;
}
.button--price-range:hover, .button--price-range-selected:hover {
    opacity: 0.6;
    transition: 0.3s;
}
.menu-price__button {
    display: flex;
    justify-content: flex-end;
}
</style>
