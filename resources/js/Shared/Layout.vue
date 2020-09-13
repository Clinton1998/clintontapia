<template>
    <div>
        <main-menu v-on:open-mobile-menu="openMobileMenu" v-bind:is-active-menu="activeMenu"></main-menu>
        <mobile-menu v-bind:show-mobile-menu="showMobileMenu" v-on:close-mobile-menu="closeMobileMenu" v-bind:is-active-mobile-menu="activeMenu"></mobile-menu>
        <slot></slot>
    </div>
</template>
<script>
import MainMenu from '../components/MainMenu.vue';
import MobileMenu from '../components/MobileMenu.vue';
export default {
    data(){
        return {
            showMobileMenu: false,
            activeMenu: false
        }
    },
    mounted(){
        this.fixedHeader();
        $(window).on('scroll', ()=> {
            this.fixedHeader();
        });
    },
    methods: {
        openMobileMenu(){
                this.showMobileMenu = true;
        },
        closeMobileMenu(){
            this.showMobileMenu = false;
        },
        fixedHeader(){
            let url = this.$inertia.page.url;
            if(url==='/' || url==='/hola' ){
                let ww = $(window).scrollTop();
                this.activeMenu = (ww>0)?true:false;
            }else{
                this.activeMenu = true;
            }
        }
    },
    components: {
        MainMenu,
        MobileMenu
    }
}
</script>