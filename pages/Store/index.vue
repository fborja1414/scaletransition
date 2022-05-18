<template>
<transition name="page">
<div >
  
    <div class="homepage">
        <a class="title-1"> Store </a>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>

         <a class="title"> Bukunmi </a>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
 
     <a class="title"> Bukunmi </a>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>

     <a class="title"> Bukunmi </a>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
        <p>sdkjnskcjdckn dkjnwkjvkvw,ebvefhbvejhbv,sdfvbjvbvbejvbejrvbr </p>
    </div>
</div>
</transition>
</template>

<script>

export default {
  name: 'IndexPage',
  components:{
   
  },
  methods: {
        toggleMenu(){
            if(!this.$store.state.menuToggle)
            this.$store.commit("toggleMenu", true);
            else
            this.$store.commit("toggleMenu",false);
        },

      

  },


data() {
  return{
  loaded: false
};
},
  // created() {
   
  //       const editorial =  document.body.querySelector(".test-click");
  //   console.log('beforeLeave', editorial);
  //      // this.$store.commit("toggleList",true);
  //          gsap.to(editorial, {
  //                 duration:1.5,
  //                 y:-100,
  //                 ease:'sine',
  //               });
  
  // },

transition: {
  appear:true,
  beforeLeave(el, done){
    this.$emit('animation:complete')
        // const editorial =  el.querySelector(".test-click");
    console.log('beforeLeave', el);
        //this.$store.commit("toggleList",true);
  
               
  },

  beforeEnter(el){
    //  this.loaded = true;
  //   console.log('beforeEnter');
  //   body.classList.remove("loading");
  //   gsap.from(body,{
  //     opacity: 0,
  //     duration: 1,
  //     ease: "Power3.easeInOut",
  //   })
    
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


};

</script>

<style >
  .toggle{
    padding:1rem;
    position:sticky;
    top:0px;
  }
    .homepage{
      
    }

    .overflowswitch {
      overflow:hidden;
    }

    .title{
      font-size:6vw;
      display:flex;
      justify-content: center;
    }

    .title-1{
      
      font-size:6vw;
       display:flex;
      justify-content: center;
    }

    .loading{
      visibility:hidden;
    }
 .homepage{
      transition:filter 500ms opacity 0.1s;
    }
   
  .page-enter-active,
.page-leave-active {
  transition: opacity 1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
