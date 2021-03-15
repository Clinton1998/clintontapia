<template>
	<div id="testimonials" class="section mt-4">
    <div class="background slider-carousel" style="background-image: url(assets/img/img_bg_main.jpg);">
      <div class="container">
        <div id="carouselTestimonials" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselTestimonials" v-bind:class="{active: index===0}" v-bind:data-slide-to="index" v-for="(testimony,index) in testimonies" v-bind:key="testimony.id"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item" v-bind:class="{active: index===0}" v-for="(testimony,index) in testimonies" v-bind:key="testimony.id">
              <div class="row">
                <div class="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                  <p class="slider-carousel__title">{{ testimony.name }}</p>
                  <p class="slider-carousel__caption">Project: {{ testimony.project }}</p>
                  <hr>
                  <p class="slider-carousel__description">{{ testimony.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#" role="button" data-slide="prev" v-on:click.prevent="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Anterior</span>
          </a>
          <a class="carousel-control-next" href="#" role="button" data-slide="next" v-on:click.prevent="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Siguiente</span>
          </a>
          <div class="slider-carousel__circle">
            <p><i class="fa fa-quote-right" aria-hidden="true"></i></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	import Layout from '../Shared/Layout.vue';
	export default {
		props: {
			testimonies: {
				type: Array,
				default: () => []
			}
		},
		layout: (h, page) => h(Layout, [page]),
		mounted(){
			$(window).trigger('scroll');
            animateHeaders({
                "#testimonials_header": '90%',
            });
			$('.carousel').carousel({
				pause: "hover",
				interval: 5000
			})
      let url = this.$route('page.testimonials');
      $('meta[property="og:url"]').attr('content',url);
      $('link[rel="canonical"]').attr('href',url);
		},
		methods: {
			prev(){
				$(".carousel").carousel("prev")
			},
			next(){
				$(".carousel").carousel("next")
			}
		}
	}
</script>