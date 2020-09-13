<template>
    <header class="main-header" v-bind:style="`background-image: url(${professional.cover_image})`">
    <div class="container">
      <div class="row personal-profile">
        <div class="col-md-4 personal-profile__avatar">
          <img class="" v-bind:src="professional.photography" alt="avatar">
        </div>
        <div class="col-md-8">
          <p class="personal-profile__name">{{ professional.name }} {{ professional.first_last_name }}_</p>
          <p class="personal-profile__work">
            <span v-for="(charge,index) in professional.charges" v-bind:key="charge.id">{{ charge.title }}{{((professional.charges.length-1)==index) ? '':', '}}</span></p>
          <div class="personal-profile__contacts">
            <dl class="contact-list contact-list__opacity-titles">
              <dt>Edad:</dt>
              <dd>{{ professional.age }}</dd>
              <dt>Teléfono:</dt>
              <dd><a v-bind:href="`tel:${professional.phone}`">{{ professional.phone }}</a></dd>
              <dt>Correo:</dt>
              <dd><a v-bind:href="`mailto:${professional.email}`">{{ professional.email }}</a></dd>
              <dt>Dirección:</dt>
              <dd>{{ professional.address }}</dd>
            </dl>
          </div>
          <p class="personal-profile__social">
            <a v-bind:href="social.url" target="_blank" v-for="social in professional.socials" v-bind:key="social.id"><i v-bind:class="social.class_icon"></i></a>
          </p>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
    props: {
      professional: {
        type: Object,
        default: () => null
      }
    }
}
</script>