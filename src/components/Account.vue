<!-- eslint-disable vue/comment-directive -->
<template>
    <div class="login mx-auto col-11 col-sm-6 col-lg-4">
    <div class="border border-secondary rounded p-4">
        Chào {{ user }}, bạn đăng nhập rồi nhé <div class="logout text-danger ms-2" @click="dangxuat">[Đăng xuất]</div>
    </div>
    </div>
</template>
    
    <script>
    export default {
      name: 'PageAccount',
      props: {
      },
      data() {
        return {
          user: localStorage.getItem('user') ? localStorage.getItem('user') : false,
      }
    },
      beforeCreate () {
        if (!localStorage.getItem('user')) {
      this.$router.push({ name: 'user' })
    }
}, 
methods: {
    dangxuat() {
      let confirmAction = confirm("Bạn có chắc chắn muốn đăng xuất?");
            if (confirmAction) {
        localStorage.removeItem('user')
        location.reload()
      }
    }
}
    }
  
  </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style>

    </style>
    