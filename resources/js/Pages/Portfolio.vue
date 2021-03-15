<template>
  <div>
      <section id="portfolio" class="container section mt-3">
          <div class="row">
            <div class="col-md-12">
              <h2 id="portfolio_header" class="section__title">Mis proyectos_</h2>
            </div>
          </div>
          <portfolio-menu v-bind:categories="categories" 
          v-on:all-projects="getAllProjects" 
          v-on:projects-category="getProjects"></portfolio-menu>
          <portfolio-card v-bind:projects="lsProjects" v-on:show-project="showProject"></portfolio-card>
      </section>
      <portfolio-modal v-bind:project="project"></portfolio-modal>
  </div>
</template>
<script>
import Layout from '../Shared/Layout.vue';
import PortfolioMenu from '../components/Portfolio/PortfolioMenu.vue';
import PortfolioCard from '../components/Portfolio/PortfolioCard.vue';
import PortfolioModal from '../components/Portfolio/PortfolioModal.vue';

export default {
    layout: (h, page) => h(Layout, [page]),
    props: {
      categories: {
        type: Array,
        default: () => []
      },
      projects: {
        type: Array,
        default: () => []
      }
    },
    data(){
      return {
        lsProjects: [],
        project: null
      }
    },
    created(){
      this.lsProjects = this.projects
      this.project = this.lsProjects[0]
    },
    mounted(){
        $(window).trigger('scroll');
        animateHeaders({
            "#portfolio_header": '90%',
        });
        let url = this.$route('page.portfolio');
        $('meta[property="og:url"]').attr('content',url);
        $('link[rel="canonical"]').attr('href',url);
    },
    methods: {
      getAllProjects(){
        this.lsProjects = this.projects
      },
      getProjects(category_id){
        let projects = this.projects
        projects = projects.filter((project) => project.category_id == category_id)
        this.lsProjects = projects
      },
      showProject(project){
        this.project = project
        $('#portfolioModal').modal('show')
      }
    },
    components:{
      PortfolioMenu,
      PortfolioCard,
      PortfolioModal
    }
}
</script>