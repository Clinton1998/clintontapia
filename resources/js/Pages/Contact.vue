<template>
	<div class="background mt-5" style="background-image: url(assets/img/img_bg_main.jpg)">
    <div id="contact" class="container section">
      <div class="row">
        <div class="col-md-12">
          <p id="contacts_header" class="section__title">Ponerse en contacto_</p>
        </div>
      </div>
      <div class="row contacts">
        <div class="col-md-5 col-lg-4">
          <div class="contacts__list">
            <dl class="contact-list">
              <dt>Teléfono:</dt>
              <dd><a v-bind:href="`tel:${professional.phone}`">{{ professional.phone }}</a></dd>
              <dt>Correo:</dt>
              <dd><a v-bind:href="`mailto:${professional.email}`">{{ professional.email }}</a></dd>
            </dl>
          </div>
          <div class="contacts__social">
            <ul>
              <li v-for="social in professional.socials" v-bind:key="social.id"><a v-bind:href="social.url" target="_blank">{{ social.name }}</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-7 col-lg-5">
          <div class="contacts__form">
            <p class="contacts__form-title">O simplemente escríbeme un mensaje por aquí_</p>
            <form class="js-form" v-on:submit.prevent="submit">
              <div class="form-group">
                <input class="form-field js-field-name" type="text" placeholder="Tu nombre" v-model="form.your_name" autofocus required>
                <div v-if="$page.errors.your_name">{{ $page.errors.your_name[0] }}</div>
              </div>
              <div class="form-group">
                <input class="form-field js-field-email" type="email"  placeholder="Tu correo electrónico" v-model="form.your_email" required>
                <div v-if="$page.errors.your_email">{{ $page.errors.your_email[0] }}</div>
              </div>
              <div class="form-group">
                <textarea class="form-field js-field-message" placeholder="Escriba el mensaje aquí" 
                v-model="form.message" required></textarea>
                <div v-if="$page.errors.message">{{ $page.errors.message[0] }}</div>
              </div>
              <button class="site-btn site-btn--form" type="submit" value="Enviar">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	import Layout from '../Shared/Layout.vue';
	export default {
		layout: (h, page) => h(Layout, [page]),
		props: {
			professional: {
				type: Object
			}
		},
    data(){
      return {
        form: {
          your_name: '',
          your_email: '',
          message: ''
        }
      }
    },
    methods: {
      submit(){
        this.$inertia.post(this.$route('send_email'), this.form)
      }
    },
		mounted(){
			$(window).trigger('scroll')
			animateHeaders({
				"#contacts_header": '90%',
			})
			$('.site-btn').mbClicker({
				size: 300,
				speed: 750,
				colour: 'rgba(0,0,0,0.11)',
				shadow: false,
				buttonAnimation: true
			})
      $('meta[property="og:url"]').attr('content',this.$route('page.contact'));
		}
	}
</script>