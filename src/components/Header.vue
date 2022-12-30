<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom border-light-subtal">
      <div class="container">
        <router-link tag="a" class="nav-link" to="/">
            <img src="../assets/logo.png" alt="Logo" width="30" height="24" class="d-inline-block mb-1" />
          <span class="d-none d-sm-inline fs-5 ms-3">Thi Tiếng anh Quốc gia</span></router-link>
        <ul class="nav">
            <router-link v-if="user" tag="li" class="nav-link" to="/account">
                <a>Chào {{ user }} !</a></router-link>
            <router-link v-else tag="li" class="nav-link" to="/user">
                <a>User</a></router-link>
            <router-link tag="li" class="nav-link" to="/thi">
                <a>Thi</a></router-link>
        </ul>
      </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                user: localStorage.getItem('user') ? localStorage.getItem('user') : false,
            }
        },
        method: {
            addClass(event) {
                event.target.classList.add('active') // Thêm .active khi click
            }
        },
        watch:{
    $route (){
        this.user = localStorage.getItem('user') ? localStorage.getItem('user') : false;
    }
} 
    }
</script>

<style>
    ul.nav li a {
        text-decoration: none;
        font-weight: 600;
    }
    .router-link-exact-active a {
        color: red;
    }
</style>