<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  
}
document.addEventListener('DOMContentLoaded', () => {
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    const html = document.querySelector('html')
    html.style.fontSize = fontSize + 'px'
  })
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    // position: fixed;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // z-index: 0;
    // width: 100%;
    // height: 100%;
    // background: #7d8188;
    // overflow: hidden;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
