<template>
<div class="body">
    <div class="body-header">
    <ItemCarousel/>
    <div class="body-header__button-list">
        <button class="button button--normal">Pickup</button>
        <button class="button button--normal button--rating">Over 4.5 ★ 
            <div class="button__divide"></div>
            <button v-on:click="displayRating(0)" class="button button--dropdown">v</button>
            <div class="menu-rating menu-rating--header" v-if="subrating[0]">
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
            <button v-on:click="displayRating(1)" class="button button--dropdown">v</button>
            <div class="menu-price menu-price--header" v-if="subrating[1]">
                <span class="menu-price__tag">Menu price</span>
                <div class="menu-price__price-range">
                    <button v-on:click="togglePrice(0)" class="button--price-range" v-bind:class="{ 'button--price-range-selected': inPriceRange[0] }">$</button>
                    <button v-on:click="togglePrice(1)" class="button--price-range" v-bind:class="{ 'button--price-range-selected': inPriceRange[1] }">$$</button>
                    <button v-on:click="togglePrice(2)" class="button--price-range" v-bind:class="{ 'button--price-range-selected': inPriceRange[2] }">$$$</button>
                    <button v-on:click="togglePrice(3)" class="button--price-range" v-bind:class="{ 'button--price-range-selected': inPriceRange[3] }">$$$$</button>
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
                            <div v-if="displayIcon[0]">
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon food-icon--see-more" href="#">
                            <div v-if="displayIcon[1]">
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon food-icon--see-more" href="#">
                            <div v-if="displayIcon[2]">
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon food-icon--see-more" href="#">
                            <div v-if="displayIcon[3]">
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon food-icon--see-more" href="#">
                            <div v-if="displayIcon[4]">
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                        <a class="food-icon food-icon--see-more" href="#">
                            <div v-if="displayIcon[5]">
                                <img class="food-icon__img" src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"/>
                                <p class="food-icon__name">Sample</p>
                            </div>
                        </a>
                    </div>
                    <div class="sidebar__see-more">
                        <button v-on:click="seeMore" class="button button--normal button--see-more">{{seeMoreText ? 'See All v' : 'See Less ^'}}</button>
                    </div>
                    

                    <div class="sidebar__button-list">
                        <button class="button button--normal">Pickup</button>
                        <button class="button button--normal button--rating">Over 4.5 ★
                            <div class="button__divide"></div>
                            <button v-on:click="displayRating(2)" class="button button--dropdown" >v</button>
                            <div class="menu-rating menu-rating--sidebar" v-if="subrating[2]">
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
                            <button v-on:click="displayRating(3)" class="button button--dropdown">v</button>
                            <div class="menu-price menu-price--sidebar" v-if="subrating[3]">
                                <span class="menu-price__tag">Menu price</span>
                                <div class="menu-price__price-range">
                                    <button v-on:click="togglePrice(0)" class="button--price-range" v-bind:class="{ 'button--price-range-selected': inPriceRange[0] }">$</button>
                                    <button v-on:click="togglePrice(1)" class="button--price-range" v-bind:class="{ 'button--price-range-selected': inPriceRange[1] }">$$</button>
                                    <button v-on:click="togglePrice(2)" class="button--price-range" v-bind:class="{ 'button--price-range-selected': inPriceRange[2] }">$$$</button>
                                    <button v-on:click="togglePrice(3)" class="button--price-range" v-bind:class="{ 'button--price-range-selected': inPriceRange[3] }">$$$$</button>
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
    ItemCarousel,
    ListComponent
  },
  data: 
    () => {
        return {
            displayIcon: [false, false, false, false, false, false],
            seeMoreBtn: false,
            seeMoreText: true,
            subrating: [false, false,false,false],
            inPriceRange: [true, true, false, false],
            
        }
    },
  methods: {
    seeMore: function(){
        this.seeMoreBtn = !this.seeMoreBtn;
        this.seeMoreText = !this.seeMoreText;
        this.displayIcon = this.displayIcon.map((item)=> {
            return !item;
        })
    },
    displayRating: function(idx){
        this.subrating = this.subrating.map((item, index)=> {
            if (index!=idx) {
                return false;
            }
            return !item;
        })
    },
    togglePrice: function(idx){
        this.inPriceRange[idx] = !this.inPriceRange[idx];
        this.inPriceRange = [...this.inPriceRange];
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
    display: flex;
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
