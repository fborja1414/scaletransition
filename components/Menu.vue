<template>
  <div class="menu-container"  :class="{'menu-active':menu}"
  >
    <div class="overlayer-content">
        <div class="logo"> logo   </div>
      <ul class="menu-item-container" :class="{'container-active':menu}">
        <nuxt-link class="title-item" to="/title"> <li class="menu-item test-click" ref='type' :class="{'menu-item-above': TBool, 'visibility-hidden': TBool1}" @click="toggleRoute(1)"> <a> Typefaces </a></li></nuxt-link>
          <nuxt-link class="title-item" to="/title">  <li class="menu-item" ref='editorial' :class="{'menu-item-above': EBool, 'menu-item-below':!EBool, 'visibility-hidden': EBool1}"  @click="toggleRoute(2)"> <a>Editorial </a></li></nuxt-link>
           <nuxt-link class="title-item" to="/title"> <li class="menu-item" ref='index' :class="{'menu-item-above': IXBool, 'menu-item-below':!IXBool, 'visibility-hidden': IXBool1}"  @click="toggleRoute(3)"> <a>Index </a></li></nuxt-link>
          <nuxt-link class="title-item" to="/title">  <li class="menu-item" ref='store' :class="{'menu-item-above': SBool, 'menu-item-below':!SBool, 'visibility-hidden': SBool1}"  @click="toggleRoute(4)"> <a>Store </a></li></nuxt-link>
           <nuxt-link class="title-item" to="/title"> <li class="menu-item menu-item-below" :class="{'visibility-hidden': IFBool}" ref='info' @click="toggleRoute(5)"> <a>Information </a></li></nuxt-link>
      </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: "Menu",
props:{
    menu: Boolean
},

data(){
return {
    currentPage: Number,
    listClicked: Boolean,
    TBool: false,
    EBool: false,
    IXBool: false,
    SBool: false,
    IFBool:false,
    TBool1: false,
    EBool1: false,
    IXBool1: false,
    SBool1: false,
};
},
computed:{
    // listClicked() {
    //      console.log("listclicked" + this.$store.state.listClicked);
    //     return this.$store.state.listClicked;
    //       },
},
  methods:{
      toggleMenu() {
          const menuBoolean = this.$store.state.menuToggle;
        if(!menuBoolean){
            this.$store.commit("toggleMenu", true);
        }
        else{
            this.$store.commit("toggleMenu",false);
        }
      },

      toggleRoute(index){
          this.currentPage = index;
            if(this.currentPage >=1 && this.currentPage <2){
                this.TBool1 = true;
                this.TBool = true;
                this.EBool = false;
                this.IXBool = false;
                this.SBool = false;
                this.IFBool = false;
               
            }
            else if(this.currentPage >=2 && this.currentPage <3 ){
                   this.EBool1 = true;
                  this.TBool = true;
                this.EBool = true;
                this.IXBool = false;
                this.SBool = false;
                this.IFBool = false;
         }
            else if(this.currentPage >=3 && this.currentPage <4){
                   this.IXBool1 = true;
                  this.TBool = true;
                this.EBool = true;
                this.IXBool = true;
                this.SBool = false;
                this.IFBool = false;
            }
            else if(this.currentPage >=4 && this.currentPage <5){
                   this.SBool1 = true;
                 this.TBool = true;
                this.EBool = true;
                this.IXBool = true;
                this.SBool = true;
                this.IFBool = false;
            }
            else if(this.currentPage ==5){
                    this.TBool = true;
                this.EBool = true;
                this.IXBool = true;
                this.SBool = true;
                this.IFBool = true;
            }
      }
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
        transition-duration: 300ms;
        transition-timing-function: ease;
        transition-delay:0s;
        z-index:1000;
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


</style>