<template>
    <div class="row">
      <div class="col-md-8 section__resume resume-list">
        <h3 class="resume-list_title">Educación</h3>
        <div class="resume-list__block" v-for="studie in studies" v-bind:key="studie.id">
          <p class="resume-list__block-title"><a v-bind:href="studie.url_institution" target="_blank">{{ studie.name_institution }}</a></p>
          <p class="resume-list__block-date">{{ studie.range }}</p>
          <p>
            {{ studie.description }}
          </p>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    props: {
        studies: {
            type: Array,
            default: () => []
        }
    }
}
</script>