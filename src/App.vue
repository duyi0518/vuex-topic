<template>
  <div class="main_interface">
    <router-view
        keep-alive
        transition="fade"
        transition-mode='out-in'></router-view>
  </div>
</template> 

<style>
body{
  margin: 0;padding: 0;
  text-align: left;
}
div,p,ul,li,input{
  margin: 0;padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 750px;  margin: 0 auto;
  border: solid 1px #ccc;
  color: #2c3e50;
}


h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
