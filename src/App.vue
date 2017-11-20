<!--template>
  <div class="app1">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'appx'
}
</script>

<style>
.app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style-->

<template>
<div style="position:relative;height:100%">
  <div id="wrapper">
    <!-- header -->
    <div id="header">
    <div class="menu_icon icon" @click="toggleMenu">
      
    </div>
     <!--  -->
        {{$route.name}} 
    </div>
    <!-- main view class="view" -->
    <router-view   keep-alive transition transition-mode="out-in">    </router-view>
   
  </div>
    <vmenu :slideout.sync="slideout" ></vmenu>
 </div>
  <!-- :title.sync="title"  -->
    

</template>
<script> 
import Vmenu from '@/components/Menu'
import Slideout from 'Slideout'
export default {
  name: 'App',
  data(){
    return{
      slideout:{}
    }
  },
  mounted(){
  this.slideout = new Slideout({
        'panel': document.getElementById('wrapper'),
        'menu': document.getElementById('menu'),
        'padding': 120,
        'tolerance': 70,
        'touch':false
      });   
  },
  methods:{
    toggleMenu(){
      this.slideout.toggle()
    }
  },
components: {
      Vmenu
    }
  }
</script>
<style lang="stylus">
  @import "./assets/styles/index.styl"
</style>
