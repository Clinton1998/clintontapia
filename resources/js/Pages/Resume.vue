<template>
    <section id="resume" class="container section mt-3">
            <div class="row">
                <div class="col-md-10">
                    <h2 id="resume_header" class="section__title">Currículum_</h2>
                    <p class="section__description">
                        Tengo capacidad de <i><b>aprender</b></i> nuevas tecnologías. Soy <i><b>autodidacta</b></i> pues me gusta crear proyectos en mis tiempos libres. Disfruto mucho <i><b>probando</b></i> nuevas tecnologías y exprimiendo las últimas hasta sus límites.
                    </p>
                </div>
            </div>
            <education v-bind:studies="studies"></education>
            <employment v-bind:jobs="jobs"></employment>
            <skills v-bind:skills="skills"></skills>
    </section>
</template>
<script>
    import Layout from '../Shared/Layout.vue';
    import Education from '../components/Resume/Education.vue';
    import Employment from '../components/Resume/Employment.vue';
    import Skills from '../components/Resume/Skills.vue';
    export default {
        props: {
            studies: {
                type: Array,
                default: () => []
            },
            jobs: {
                type: Array,
                default: () => []
            },
            skills: {
                type: Array,
                default: () => []
            }
        },
        layout: (h, page) => h(Layout, [page]),
        mounted(){
            $(window).trigger('scroll');
            animateHeaders({
                "#resume_header": '90%',
            });
            $('.js-progress-list').waypoint({
                handler: function() {
                    $(".progress-bar").each(function() {
                        $(this).animate({
                            width: $(this).attr('aria-valuenow') + '%'
                        }, 200);
                    });
                    this.destroy();
                },
                offset: '50%'
            });
        },
        components: {
            Education,
            Employment,
            Skills
        }
    }
</script>