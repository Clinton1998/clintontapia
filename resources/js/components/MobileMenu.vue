<template>
    <div class="mobile-menu d-lg-none" v-bind:class="{active: showMobileMenu,'mobile-menu--active': isActiveMobileMenu}">
    <div class="container">
      <div class="mobile-menu__close" v-on:click="closeMobileMenu">
        <span><i class="mdi mdi-close" aria-hidden="true"></i></span>
      </div>
      <nav class="mobile-menu__wrapper">
        <ul>
          <li><inertia-link v-bind:href="$route('page.hello')" v-on:click="closeMobileMenu">Hola</inertia-link></li>
          <li><inertia-link v-bind:href="$route('page.resume')" v-on:click="closeMobileMenu">Currículum</inertia-link></li>
          <li><inertia-link v-bind:href="$route('page.portfolio')" v-on:click="closeMobileMenu">Portafolio</inertia-link></li>
          <!--<li><inertia-link v-bind:href="$route('page.testimonials')" v-on:click="closeMobileMenu">Testimonios</inertia-link></li>-->
          <li><inertia-link v-bind:href="$route('page.contact')" v-on:click="closeMobileMenu">Contacto</inertia-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
    props: {
      showMobileMenu: {
        type: Boolean,
        default: false
      },
      isActiveMobileMenu: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeMobileMenu(){
        this.$emit('close-mobile-menu');
      }
    }
}
</script>