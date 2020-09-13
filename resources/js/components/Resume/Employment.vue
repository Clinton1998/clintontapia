<template>
    <div class="row">
      <div class="col-md-8 section__resume resume-list">
        <h3 class="resume-list_title">Empleo</h3>
        <div class="resume-list__block" v-for="job in jobs" v-bind:key="job.id">
          <p class="resume-list__block-title"><a v-bind:href="job.url_business" target="_blank">{{ job.name_business }}</a></p>
          <p class="resume-list__block-date">{{ job.range }}</p>
          <p>
            {{ job.description }}
          </p>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    props: {
        jobs: {
            type: Array,
            default: () => []
        }
    }
}
</script>