<template>
<div class="container">
    <Menu :menu="menu"  />
     <a class="toggle" @click="toggleMenu()">Toggle </a>
   
    <nuxt class="overview-overview" @animation:complete="menuTransition"/>
</div>
</template>

<script>
import gsap from "gsap";
import Menu from '../components/Menu.vue';
export default {
    name: 'DefaultLayout',
    components: {
        Menu
    },

    data(){
        return{
        };
    },

  methods: {
        toggleMenu(){
            if(!this.$store.state.menuToggle){
            this.$store.commit("toggleMenu", true);
          
            }
            else{
            this.$store.commit("toggleMenu",false);
            
            }
        },

        removeShadow(){
            var shadowClone = document.querySelector(".shadowClone");
           setTimeout(()=>{ shadowClone.remove()},700);

        },

        menuTransition(){
            var menuItem = document.body.querySelector(".menu-item-above");
            var menuSelected = document.body.querySelector('.visibility-hidden');
             var menuItemPosition = menuSelected.getBoundingClientRect();
            console.log(menuSelected);
            var shadowClone = menuSelected.cloneNode(true);
            shadowClone.setAttribute("class", "shadowClone");
                shadowClone.classList.remove("menu-item-above");
                  shadowClone.classList.remove("menu-item-below");
                  var body = document.querySelector("body");
             body.parentNode.append(shadowClone);
            shadowClone.style.visibility = "visible";
            
               //menuSelected.style.display="none";
          
          //Calculate position to move menu-item 
          var title = document.body.querySelector(".title-1");
         var titlePosition = title.getBoundingClientRect();
         var titleY = titlePosition.y;
        
         var menuY = menuItemPosition.y;
         shadowClone.style.textAlign = "center";
        shadowClone.style.width="100%";
        shadowClone.style.listStyle = "none";
        shadowClone.style.fontSize = "6vw";
         shadowClone.style.position = "fixed";
         shadowClone.style.zIndex = "1001";
         shadowClone.style.top= menuY + 'px';
            shadowClone.style.left="0";
        //  console.log(menuY);
         
         var menuTranslate = menuY - titleY;
        //  console.log(titlePositionY);

            // console.log(titlePositionY);
            // var gsapVar = {y: titlePositionY};
           //console.log(menuItem);

        //    var tl = gsap.timeline();
        //     tl.to(".menu-item-above", {
                
        //           duration:0.09,
        //           y:-1000,
        //           ease:'ease',
                  
        //         },'start');

        //           tl.to(".menu-item-below", {
        //           duration:0.09,
        //           y:1000,
        //           ease:'ease',
                  
        //         },'start');

                gsap.to(".shadowClone", {
                    duration: 0.9,
                    y: -(menuTranslate),
                    delay: 0.05,
                    ease:'ease',
                     onComplete:()=>{this.toggleMenu(); this.removeShadow(); this.resetMenu();}
                });

    // var body = document.querySelector(".overview-overview")
    //               gsap.from(body,{
    //   opacity: 0,
    //   duration: 0.5,
    //   ease: "ease",
    // })
    

            // console.log("menuTransition", menuItem);
        },

        resetMenu(){
              this.$store.commit("toggleAbove", false);
                this.$store.commit("toggleBelow", false);
          
            // console.log('menu');
             var menuSelected = document.body.querySelector('.visibility-hidden');

             if(menuSelected){
            setTimeout(()=> {menuSelected.classList.remove('visibility-hidden')},300);
            console.log(menuSelected);
             }
            
            // tl.reverse(".menu-item-above", {
            //       duration:0.09,
            //       y:-1000,
            //       ease:'ease',
            //     });

            //       tl.from(".menu-item-below", {
            //       duration:0.09,
            //       y:1000,
            //       ease:'ease',
                  
            //     });
        }
  },


watch:{
  menu(){
    const menuBoolean = this.$store.state.menuToggle;
    if(menuBoolean) {
    document.body.classList.add("overflowswitch");
  }
  else{
    document.body.classList.remove("overflowswitch");
  }
}

},


  computed:{
    menu() {
      return this.$store.state.menuToggle;
    }
  },
}
</script>

<style>

.toggle{
    z-index: 1002;
}
</style>