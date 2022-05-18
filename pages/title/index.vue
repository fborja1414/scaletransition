<template>
<div>
    <div class="homepage">
        <a class="title-1"> Index </a>
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
</template>


<script>
import gsap from "gsap";
export default {
  name: 'TypographyPage',
 

  methods: {
        toggleMenu(){
            if(!this.$store.state.menuToggle)
            this.$store.commit("toggleMenu", true);
            else
            this.$store.commit("toggleMenu",false);
        },
     
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


transition: {
  appear:true,
  beforeLeave(el, done){
        // const editorial =  el.querySelector(".test-click");
    console.log('beforeLeave', el);
        //this.$store.commit("toggleList",true);
           gsap.to(el, {
                  duration:0.001,
                  ease:'sine',
                  onComplete:()=>this.$emit('animation:complete'),
                });
               
  },
}



};

</script>

<style>
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
    .page-enter-active,
.page-leave-active {
  transition: opacity 1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
