<template>
    <div class="row portfolio-menu">
        <div class="col-md-12">
          <nav>
            <ul>
            <li><a href="#" data-portfolio-target-tag="all" v-bind:class="{'portfolio-menu__link--active': all}" v-on:click.prevent="getProjects('all')">Todo</a></li>
            <li v-for="category in lsCategories" v-bind:key="category.title"><a href="#" v-bind:data-portfolio-target-tag="category.title" v-bind:class="{'portfolio-menu__link--active': category.active}" v-on:click.prevent="getProjects(category.id)">{{ category.title }}</a></li>
            </ul>
          </nav>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        categories: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {
            lsCategories: [],
            all: true
        }
    },
    created(){
        this.lsCategories = this.categories
    },
    methods: {
        getProjects(category_id){
            if(category_id==='all'){
                this.$emit('all-projects')
                this.all = true
            }else{
                this.$emit('projects-category',category_id)
                this.all= false
            }
            this.lsCategories = this.lsCategories.map((category) => {
                if(category.id==category_id){
                    category.active = true
                }else{
                    category.active = false
                }
                return category
            })
        }
    }
}
</script>