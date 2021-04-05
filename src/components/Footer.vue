<template>
	<div id="footer">
		<!--Chèn background: tấm ảnh phần đen ở trên-->
		<div class="footer__background1">
		</div>
		<!--Chèn background: tấm ảnh phần còn lại -->
		<div class= "footer__background2">
			<div class="footer__logo">
				<div class="hr1">
					<hr>
				</div>
				<div class="logoedit">
					<img src="../assets/footerImg/footer_logo.png" alt="Can't load image">
				</div>
				<div class="hr2">
					<hr>
				</div>
			</div>
			<div class = "footer__columndivide">
				<div>
					<h1>Address</h1>
					<p>570 8th Ave, </p> 
					<p>New York, NY 10018 </p>
					<p> United States</p>
				</div>
				<div>
					<h1>Book a table</h1>
					<p>Dogfood och Sliders foodtruck.</p>
					<p> Under Om oss kan ni lasa </p>
					<p style="color:yellow"> (850) 435-4155</p>
				</div>
				<div>
					<h1>Opening hours</h1>
					<p>Monday - Friday</p>
					<p>10.00AM - 11.00PM</p>
				</div>
			</div>
			<div class = "footer__below">
				<div class="footer__formatLine">
					<hr class="hr3">
				</div>
				<div class = "footer__link">
					<a class="footer__link__a" href="http://demo.themewinter.com/wp/gloreya/about-us/" >About us </a> 
					<a class="footer__link__a" href="http://demo.themewinter.com/wp/gloreya/menu/" > Menu</a>
					<a class="footer__link__a" href="http://demo.themewinter.com/wp/gloreya/menu/">Blog</a>
					<a class="footer__link__a" href="http://demo.themewinter.com/wp/gloreya/gallery/">Gallery</a>
					<a class="footer__link__a" href="http://demo.themewinter.com/wp/gloreya/faq/">Faq</a>
					<a class="footer__link__a" href="http://demo.themewinter.com/wp/gloreya/contact/">Contact</a>
				</div>
				<div class = "footer__text">
					<p> Copyright C 2021 Gloreya. All Right Reserved</p> 
				</div>
				<div class="footer__icon">
					<!--font awesome (recommend) / gg font -->
					<span> <i class="fab fa-facebook" style="color:#3b5998"> </i> </span>
					<span> <i class="fab fa-twitter" style="color:#00acee"></i> </span>
					<span> <i class="fab fa-instagram"></i></span>
					<span> <i class="fab fa-youtube" style="color:#e62117"></i> </span> 
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
	position: fixed;
}
.footer__background1{
	background: url('../assets/footerImg/shape-down.png'), black;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 20px;
}
.footer__background2{
    background: url('../assets/footerImg/footer_bg.png'), black;
	background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Times New Roman', Times, serif;
}
.footer__logo{
    position: relative;
	height: 250px;
	width: cover;
}
.hr1{
	position: absolute;
	width: 30%;
	position: middle;
	top: 50%;
	left: 15%;
}
.logoedit{
	position: middle;
	top: 40%;
	padding-top: 50px;
}
.hr2{
	position: absolute;
	width: 30%;
	position: middle;
	top: 50%;
	right: 15%;
}
.footer__columndivide{
	display: flex;
	justify-content: space-between;
	padding-left: 30%;
	padding-right: 30%;
}
.footer__below{
	display: flex;
	justify-content: space-between;
	position: relative;
	padding-left: 170px;
	height: 100px;
}
.hr3{
	width: 70%;
	position: absolute;
	left: 15%;
	top: 20px;
}
.footer__link{
	position: absolute;
	top: 30px;
	left: 15%;
}
.footer__link__a{
	padding-right: 10px;
}
.footer__text{
	position: absolute;
	top: 60px;
	left: 15%;
}
.footer__icon{
	position: absolute;
	right: 15%;
	top: 30px;
}
/*link formatting*/
h1{
	color: white;
}
p{
	color: gray;
}
a:link{
    color: gray;
    text-decoration: none;
}
a:visited{
    color: gray;
}
a:hover, a:active{
    color:red;
}
span{
	padding-right: 5px;
}
/*link formatting*/

</style>
