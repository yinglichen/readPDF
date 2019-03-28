<template>
  <div class="home">
     <button @click="readPdf">在线预览</button>
  </div>
</template>

<script>
let Base64=require('js-base64').Base64
export default {
  name: 'home',
  data () {
    return {
      url: './../../static/2019_PDF.pdf'
    }
  },
  methods:{
    readPdf(){
      this.$router.push({
        name:'readPdf',
        query:{
          url:Base64.encode(this.url)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
