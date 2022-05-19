<template>
    <div>
      <li class="menu-item test-click" ref='type' :class="{'visibility-hidden': visibilityBool}">  <nuxt-link class="title-item" :class="{'menu-item-above': aboveBool, 'menu-item-below': belowBool, }" :to="'/' + entry.title"><a  @click="toggleRoute()"> {{entry.title}} </a></nuxt-link></li>
   </div>
</template>

<script>
export default {
    name: 'MenuItem',
    props:{
        entry: Object,
          currentPage: Number,
    },

    data(){
        return{
        };
    },

    computed:{
        aboveBool(){
        return this.entry.id < this.currentPage && this.currentPage > 0 && this.$store.state.aboveBool;
        },
        belowBool(){
       return this.entry.id > this.currentPage && this.currentPage > 0 && this.$store.state.belowBool;
        },
        visibilityBool(){
            return this.entry.title === this.$store.state.pageTitle; 
        },

    },

    methods:{
        toggleRoute(){
            this.$store.commit('updateCurrentPage',this.entry.title);
            this.$store.commit('toggleAbove',true);
            this.$store.commit('toggleBelow',true);
            this.$emit('currentPageData', this.entry.id);
        },
    },
//reinitiate beforeleave transition hook on repeated click of nuxt-link

}
</script>


<style scoped>
     li {
        list-style: none;
        display:flex;
        justify-content: center;
        padding:none;
    }

  .menu-item{
      transition-property: transform;
    transition-duration: 500ms;
    transition-timing-function: ease;
    transition-delay: 0s;
    }

    .menu-item:hover{
        transition-property: opacity;
        transition-duration:500ms;
          transition-timing-function: ease;
             transition-delay:0s;
        opacity: 0.2;
     
    }

  a{
           cursor: pointer;
    }
 


    .title-item{
        color:black;
        text-decoration:none;
        cursor:auto;
        list-style: none;
          transition-property: transform;
              transition-duration: 500ms;
    }

       .visibility-hidden{
      visibility: hidden;
    }

    
    .menu-item-above{
        transform: translateY(-100vh);
    }

    .menu-item-below{
        transform: translateY(100vh);
    } 


</style>