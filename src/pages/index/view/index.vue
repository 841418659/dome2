<template>
<div class="hello">
     <div>这是首页</div>
      <a  href="/index.html">index.html</a><br/>
     <a  href="/index.html/sign">/index.html/sign</a><br/>
  <a  href="/home.html">home.html</a><br/>
  <a  href="/home.html/sign">/home.html/sign</a><br/>
  <router-view/>
  </div>
  </template>

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

