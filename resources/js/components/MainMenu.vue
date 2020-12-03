<template>
    <div class="menu" v-bind:class="{'menu--active': isActiveMenu}">
    <div class="container">
      <div class="row">
        <div class="menu__wrapper d-none d-lg-block col-md-12">
          <nav class="">
            <ul>
              <li><inertia-link v-bind:href="$route('page.hello')">Hola</inertia-link></li>
              <li><inertia-link v-bind:href="$route('page.resume')">Currículum</inertia-link></li>
              <li><inertia-link v-bind:href="$route('page.portfolio')">Portafolio</inertia-link></li>
              <!--<li><inertia-link v-bind:href="$route('page.testimonials')">Testimonios</inertia-link></li>-->
              <li><inertia-link v-bind:href="$route('page.contact')">Contacto</inertia-link></li>
            </ul>
          </nav>
        </div>
        <div class="menu__wrapper col-md-12 d-lg-none">
          <button type="button" class="menu__mobile-button" v-on:click="openMobileMenu">
            <span><i class="fa fa-bars" aria-hidden="true"></i></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        isActiveMenu: {
          type: Boolean,
          default: false
        }
      },
      methods: {
        openMobileMenu(){
          this.$emit('open-mobile-menu');
        }
      }
    }
</script>
