<template>
  <div class="ebook-reader">
    <!-- {{ $route.params.fileName }} -->
    <div class="read" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Epub from 'epubjs'
global.ePub=Epub

export default {
name:'EbookReader',
computed:{
    ...mapGetters(['fileName']),
},
mounted() {
    const url ='http://localhost:8081/epub/'
    // const fileName=this.$route.params.fileName.split('|').join('/')
    console.log(`${url}${fileName}.epub`)
    console.log(fileName)

    // this.$store.dispatch('setFileName',this.fileName)
    // .then(()=>{
    // this.initEpub()
    // }) 
    // console.log(this.$store.fileName)
},
methods:{
initEpub()
{

    //  const url ='http://localhost:8081/epub/'+this.fileName +'epub'
    //  this.book=new Epub(url)
//     console.log(url)
},
}
}
</script>

<style>

</style>