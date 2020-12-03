<template>
        <div class="modal fade portfolio-modal" id="portfolioModal" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body col-md-11 col-lg-9 ml-auto mr-auto">
        <p class="portfolio-modal__title">{{ project.title }}</p>
        <a v-bind:href="project.url_image" target="_blank">
        <img class="portfolio-modal__img" v-bind:src="project.url_image" alt="modal_img"></a>
        <p class="portfolio-modal__description" v-html="project.description"></p>
        <div class="portfolio-modal__link">
          <a v-bind:href="project.url" target="_blank">{{ project.url }}</a>
        </div>
        <div  class="portfolio-modal__stack">
          <p class="portfolio-modal__stack-title">Stack usado:</p>
          <ul class="tags">
            <li v-for="stack in project.stacks" v-bind:key="stack.id">{{ stack.name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    project: {
      type: Object
    }
  }
}
</script>