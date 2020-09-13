<template>
    <div class="row section__resume progress-list js-progress-list">
      <div class="col-md-12">
        <h3 class="progress-list__title">Habilidades generales</h3>
      </div>
      <div class="col-md-5 mr-auto">
        <progress-skill v-for="skill in skills_col1" v-bind:title="skill.title" v-bind:value="skill.value" v-bind:key="skill.id"></progress-skill>
      </div>
      <div class="col-md-5 mr-auto">
        <progress-skill v-for="skill in skills_col2" v-bind:title="skill.title" v-bind:value="skill.value" v-bind:key="skill.id"></progress-skill>
      </div>
    </div>
</template>
<script>
import ProgressSkill from './ProgressSkill.vue';
export default {
    props: {
        skills: {
            type: Array,
            required: true,
            validator: (val) => val.length==8
        }
    },
    data(){
        return {
            skills_col1: () => [],
            skills_col2: () => []
        }
    },
    created(){
        this.skills_col1 = this.skills.slice(0,4);
        this.skills_col2 = this.skills.slice(4);
    },
    components:{
        ProgressSkill
    }
}
</script>