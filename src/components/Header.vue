<template>
  <div id="header" >
    <div v-bind:class="{'header__container--onscroll': isScroll}" class=" nav--max-height header__container">
      <div class="nav--max-height nav-container">
      <!-- Begin nav-list -->
        <div class="nav--max-height nav">
          <ul class="nav--max-height nav__list">
            <li >
              <a href="#">
                Home
                <i class="nav__icon material-icons">expand_more</i>
              </a>
              <ul class="nav__subnav">
                <li><a href="#">Home 1</a></li>
                <li><a href="#">Home 2</a></li>
                <li><a href="#">Home 3</a></li>
              </ul>
            </li>
            <li><a href="#">Menu</a></li>
            <li>
              <a href="#">
                Pages
                <i class="nav__icon material-icons">expand_more</i>
              </a>
              <ul class="nav__subnav">
                <li><a href="#">About us</a></li>
                <li><a href="#">Team</a></li>
                <li class="nav__subnav--relative">
                  <a href="#">
                    Blog
                    <i class="nav__subnav-icon material-icons"> chevron_right </i>
                  </a>
                  <ul class="blog-subnav nav__subnav">
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Blog details</a></li>
                  </ul>
                </li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Faq</a></li>
                <li><a href="#">404</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                Shop
                <i class="nav__icon material-icons">expand_more</i>
              </a>
              <ul class="nav__subnav">
                <li><a href="#">Shop</a></li>
                <li><a href="#">Shop Details</a></li>
              </ul>
            </li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <!-- End nav-list -->
        <div class="nav-container__image">
          <a href="#">
            <img src="../assets/headerImg/logo.png" alt="Hamburger">
          </a>
        </div>
        <div class="nav--max-height nav__order">
          <div class="nav__order-button">
            <a href="#">Order online</a>
          </div>
          <div class="nav__order-cart">
            <a href="#">
              <i class="cart-icon material-icons"> shopping_cart </i>
              <sup>0</sup>
            </a>
          </div>
          <div class="nav__order-sidebar">
            <a href="#">
              <i class="sidebar-icon material-icons"> apps </i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="header__banner-area">
      <h1 class="header__banner">Menu</h1>
    </div>
  </div>
</template>

<script>
import {ref,onMounted, onUnmounted} from "@vue/composition-api"
export default {
  name: 'Header',
  setup(){
    let isScroll = ref(false);
    const handleSrcoll = () =>{
      let top = window.scrollY;
      if(top > 250){
        isScroll = true;
      }
      else{
        isScroll = false;
      }
      console.log(isScroll);
    }

    onMounted (() => {
      window.addEventListener('scroll', handleSrcoll);
    })

    onUnmounted (() => {
      window.removeEventListener('scroll', handleSrcoll);
    })

    return{
      isScroll
    }
  },

  mounted(){
    return this.isScroll
  },

  methods: {


  }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a{
  transition: all 0.4s ease;
}

html{
  font-size: 16px;
}

.nav--max-height{
  max-height: 140px;
} 

#header{  
  background-image: url("../assets/headerImg/background.png");
  background-size: cover;
  background-position: center center;
  position: relative;
  min-height: 540px;
  font-family:'Roboto';
  width: 100%;
}

#header .header__container{
  position: relative;
  min-width: 100%;
  z-index: 1000;
}


#header .header__container::after{
  position: absolute;
  content: "";
  width: calc(50% - 585.5px + 1em);
  height: 48px;
  background-color: #e7272d;
  right: 0;
  border-right: 0 solid transparent;
  top: 0;
  bottom: 0;
  margin: auto;
}

/* Start scrolling-animation */
@keyframes fadeInDown {
   0% {
      opacity: 0;
      transform: translateY(-20px);
   }
   100% {
      opacity: 1;
      transform: translateY(0);
      background-color: #000;
   }
} 

.header__container--onscroll{
  animation: fadeInDown 2s ease;
  background-color: #000;
  position: fixed;
}

.banner--onscroll{
  padding-top: 140px;
  min-height: 540px;
}

/* Start  nav-container*/
#header .nav-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1140px;
  position: relative;
}

/* Start nav-list */
.nav{
  min-width: 41.666667%;
  display: flex;
}

.nav .nav__list{
  display: inline-block;
  padding: 0px 15px;
  list-style-type: none;
  display: flex;
}


.nav__list > li{
  display: inline-block;
  padding: 40px 16px;
  align-self: center;
}

.nav__list > li:first-child{
  margin-left: -15px;
}

.nav__list > li:nth-child(2) > a{
  color: #e7272d;
}

.nav__list  li  a{
  color: #fff;
}
.nav__list  li  a{
  font-size: 14px;
  display: block;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
}


.nav__list > li:nth-child(2) > a::after{
  content: "__";
  display: block;
  font-weight: 700;
  position: absolute;
  width: 100%;
  text-align: center;
}

.nav__list .nav__icon{
  font-size: 14px;
  font-weight: 700;
}

/* Start subnav */
.nav__list .nav__subnav{
  display: none;
}

.nav__list li:hover a
,.nav__list > li:hover > .nav__subnav > li:hover > a
,.nav__subnav li:hover .blog-subnav li:hover a{
  color:#e7272d ;
}

.nav__list > li:hover > .nav__subnav{
  margin: 40px 0 0 -10px;

}

.nav__list li:hover .nav__subnav{
  display: block;
  position: absolute;
  list-style-type: none;
  text-align: left;
  background-color: #fff;
  min-width: 230px;
  padding: 10px 0px;
  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 20%);
  background-clip: padding-box;
  border-radius: 0.25rem;
}

.nav__list .nav__subnav li a{
  color: #000;
  font-size: 12px;
  line-height: 40px;
  padding: .25rem 1.5rem;
  white-space: nowrap;
  border-top: 1px solid #eaeaea;
}


.nav__list .nav__subnav li:first-child > a{
  border-top: none;
}
/* End sub-nav */


/*Start blog-subnav */
.nav__list li:hover .blog-subnav{
  display: none;
}

.nav__subnav--relative{
  position: relative;
}

.nav__list li:hover .nav__subnav li:hover .blog-subnav{
  display: block;
  position: absolute;
  left: 100%;
  top: 0px;
}

.nav__list .nav__subnav .nav__subnav-icon{
  color: #000;
  font-size: 12px;
  font-weight: 700;
  margin-left: 160px;
  margin-right: -10px;
}
/*End blog-subnav */

/* End nav-list */

/* Start nav-image */

#header .nav-container .nav-container__image{
  text-align: center;
}
/* End nav-image */

/*Start nav-order */
#header .nav__order .nav__order-sidebar,
#header .nav__order .nav__order-cart{
  align-self: center;
  position: relative;
}

#header .nav__order{
  display: flex;
  justify-content: space-between;
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
}

/* Start order-button */
#header .nav__order .nav__order-button{
  align-self: center;
  margin-left: 10rem;
}


#header .nav__order .nav__order-button a{
  background: #e7272d;
  border: 1px solid #e7272d;
  font-size: 14px;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  padding: 14px 25px;
  color: #fff;
  border-radius: 36px;
  line-height: 1.5;
}

#header .nav__order .nav__order-button:hover a{
  background-color: #ffc107;
  border: 1px solid #ffc107;
}

/* End order-button */

/* Start order-cart */
#header .nav__order .nav__order-cart a{
  font-size: 14px;
  font-weight: 700;
  list-style-type: none;
  text-decoration: none;
}

#header .nav__order .nav__order-cart i{
  color: #fff;
  font-size: 18px;
}

#header .nav__order .nav__order-cart sup{
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  background-color: #e7272d;
  padding: 2px 5px;
  border-radius: 50%;
}
/* End order-cart */

/* Start order-sidebar */

#header .nav__order .nav__order-sidebar i{
  padding-left: 25px;
  padding-right: 8px;
  border-top-left-radius: 36px;
  border-bottom-left-radius: 36px;
  line-height: 48px;
  color: #fff;
  font-size: 32px;
  background-color: #e7272d;
  right: 0;
}

/* End order-sidebar */

/* End nav-container */

/* Start banner */
#header .header__banner-area{
  min-height: 400px;
  display: flex;
  align-content:  center;
}

#header .header__banner{
  color: #fff;
  font-size: 80px;
  line-height: 90px;
  font-weight: 900;
  align-self: center;
  width: 100%;
}
/* End banner */

</style>
