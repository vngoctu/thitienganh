<template>
    <div class="home">
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageHome',
    props: {
    },
    beforeCreate () {
      
    this.$router.push({ name: 'account' })

}
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  