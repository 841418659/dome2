<template>
<div class="hello">
     <div>这是home</div>
      <a  href="/index.html">index.html</a><br/>
     <a  href="/index.html/sign">/index.html/sign</a><br/>
      <a  href="/home.html">home.html</a><br/>
       <a  href="/home.html/sign">/home.html/sign</a><br/>
       <router-view/>
  </div>
  </template>

<script>
  export default {
    name: 'index'
  }
</script>

