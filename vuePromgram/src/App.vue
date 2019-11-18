<template>
  <div id="app">
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
// import Room from '@/components/view/Room'
// import Login from '@/components/view/Login'
// import leftNav from '@/components/view/leftNav'
// import Index from '@/components/view/Index'
export default {
     name: 'App',
     components:{
      //  Room,
      //  Login,
      //  leftNav,
      //  Index
     }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%;
  height:100%
}
</style>
