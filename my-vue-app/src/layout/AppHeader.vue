<template lang="html">
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li v-link-active><a v-link="{path: '/'}">Home</a></li>
        <li v-link-active><a v-link="{path: '/card'}">Card</a></li>
        <li v-link-active><a v-link="{path: '/buttons'}">Buttons</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {

  }
</script>

<style lang="css">

</style>
