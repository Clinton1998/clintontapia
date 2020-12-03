<template>
    <div class="portfolio-cards">

      <div class="row project-card" data-portfolio-tag="web-sites" v-for="project in projects" v-bind:key="project.id" v-on:click="showProject(project)">
        <div class="col-md-6 col-lg-5 project-card__img">
          <img class="" v-bind:src="project.url_image" alt="project-img">
        </div>
        <div class="col-md-6 col-lg-7 project-card__info">
          <h3 class="project-card__title">{{ project.title }}</h3>
          <p class="project-card__description" v-html="project.short_description"></p>
          <p class="project-card__stack">Stack usado:</p>
          <ul class="tags">
            <li v-for="stack in project.stacks" v-bind:key="stack.id">{{ stack.name }}</li>
          </ul>
          <a v-bind:href="project.url" target="_blank" class="project-card__link">{{ project.url }}</a>
        </div>
      </div>
      
    </div>
</template>
<script>
export default {
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    showProject(project){
      this.$emit('show-project',project)
    }
  }
}
</script>