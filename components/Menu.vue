<template>
  <div class="menu-container"  :class="{'menu-active':menu}">
    <div class="overlayer-content">
        <div class="logo"> logo   </div>
      <ul  class="menu-item-container" :class="{'container-active':menu}">
          <MenuItem v-for="(entry,index) in Menu" :entry="entry" :currentPage="overPage" :key="index" @currentPageData="currentPage"/>
     </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: "Menu",
props:{
    menu: Boolean,
},

data(){
return {
    Menu: [
       { title: 'Typefaces', id:1 },
       {title : 'Editorial', id:2},
       {title:'Index', id:3},
       {title:'Store',id:4},
       {title:'Information', id:5},
    ],
    overPage: 0,
};
},
computed:{
    // listClicked() {
    //      console.log("listclicked" + this.$store.state.listClicked);
    //     return this.$store.state.listClicked;
    //       },
},
  methods:{

      currentPage(data){
          console.log(data);
         this.overPage = data;
      },
      toggleMenu() {
          const menuBoolean = this.$store.state.menuToggle;
        if(!menuBoolean){
            this.$store.commit("toggleMenu", true);
        }
        else{
            this.$store.commit("toggleMenu",false);
        }
      },

      }
            

      
  
};
</script>

<style>
    ul{
        padding:0px;
        margin:0px;
    }
    ul li {
        list-style: none;
        display:flex;
        justify-content: center;
        padding:none;
    }
    .logo{
        font-size:3vw;
    }

    .menu-container{
        width:100%;
        height:100%;
        text-align: center;
        position:fixed;
        top:0px;
        left:0px;
        font-size: 6vw;
        overflow: hidden;
        backdrop-filter: blur(20px);
        opacity:0;
        pointer-events: none;
        transition-property: opacity;
        transition-duration: 500ms;
        transition-timing-function: ease;
        transition-delay:0s;
        z-index:1000;
        transition: cubic-bezier(0.33, 1, 0.68, 1);
    }
    
   .overlayer-content{
       width:100%;
       height:100%;
       margin-top: 5rem;
           transition-property: transform;
        transition-duration: 300ms, 300ms; 
       transition-timing-function: ease, ease;
        transition-delay:0s, 0s;
          transform-origin:center;
    }

    .menu-item-container{
           width:100%;
        height:100%;
           transition-property: all;
        transition-duration: 300ms; 
       transition-timing-function: ease;
        transition-delay:0s;
        transform: scale(0.85);
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
 
    .container-active{
         transform:scale(1);
    transition-property: transform;
        transition-duration: 300ms; 
       transition-timing-function: ease;
        transition-delay:0s;
    }

      .menu-active{
        opacity:1;
        pointer-events: all;
      transition-property: opacity;
        transition-duration: 500ms; 
       transition-timing-function: ease;
        transition-delay:0s;
    }

    .title-item{
        color:black;
        text-decoration:none;
        cursor:auto;
        list-style: none;
          transition-property: transform;
              transition-duration: 2s;
    }

    .visibility-hidden{
      visibility: hidden;
    }
/* 
    .menu-item-above{
        transform: translateY(100vh);
    }

    .menu-item-below{
        transform: translateY(-100vh);
    } */


</style>