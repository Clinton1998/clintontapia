<template>
    <div>
        <header-hello v-bind:professional="professional"></header-hello>
        <section id="hello" class="container section">
          <div class="row">
            <div class="col-md-10">
              <h2 id="hello_header" class="section__title">Hola soy {{ professional.name }} {{professional.first_last_name }}_</h2>
                <p class="section__description text-justify" v-text="professional.presentation"></p>
                <a v-bind:href="$route('cv.download',[professional.id])" v-bind:cdownload="professional.cv_download" class="section_btn site-btn">
                  <img src="assets/img/img_btn_icon.png" alt="">Descargar CV</a>
            </div>
          </div>
        </section>
    </div>
</template>
<script>
    import Layout from '../Shared/Layout.vue';
    import HeaderHello from '../components/Hello/HeaderHello.vue';
    export default {    
        layout: (h, page) => h(Layout, [page]),  
        props: {
          professional: {
            type: Object,
            default: () => null
          }
        },  
        mounted(){
          $(window).trigger('scroll');
          animateHeaders({
                "#hello_header": '90%',
          })
          $('.site-btn').mbClicker({
            size: 300,
            speed: 750,
            colour: 'rgba(0,0,0,0.11)',
            shadow: false,
            buttonAnimation: true
          })
          let url = this.$route('page.hello');
          $('meta[property="og:url"]').attr('content',url);
          $('link[rel="canonical"]').attr('href',url);
        },
        components: {
            HeaderHello
        }
    }
</script>