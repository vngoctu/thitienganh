<template>
  <div class="login mx-auto col-11 col-sm-6 col-lg-3">
    <div class="border border-info rounded p-4">
        <div class="login-title text-center fs-5 fw-semibold mb-3">
          Đăng nhập hệ thống
        </div>
        <form class="row g-3">
          <div class="col-md-12">
            <label for="inputUser4" class="form-label">Tài khoản</label>
            <input type="text" class="form-control" autocomplete="-username" id="inputUser" placeholder="guess" v-model="tk">
          </div>
          <div class="col-md-12">
            <label for="inputPassword4" class="form-label">Mật khẩu</label>
            <input type="password" class="form-control" autocomplete="-password" id="inputPassword4" placeholder="1" v-model="mk">
          </div>
          <div class="d-grid col-md-6 mx-auto">
            <button class="btn btn-primary" @click="dangnhap(tk, mk)">Đăng nhập</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageLogin',
    props: {
    },
    data() {
      return {
        user: localStorage.getItem('user') ? localStorage.getItem('user') : false,
        tk: '', // username của ô nhập
        mk: '', // password của ô nhập

        // <_ Popup
        modal: document.getElementById("myModal"),
        modalContent: document.getElementsByClassName("modal-content")[0],
        modalBody: document.getElementsByClassName("modal-body")[0],
        closeBtn: document.getElementsByClassName("close")[0],
        // _>
      }
    },
    beforeCreate () { // Đăng nhập rồi thì vào trang Account
      if (localStorage.getItem('user')) {
      this.$router.push({ name: 'account' })
    }
  },
  methods: {
    dangnhap(...data) {
      // <_ Dữ liệu giả
      let users = [{
        "username": "admin",
        "password": "admin",
        "count": 1
      },
      {
          "username": "guess",
          "password": "1",
          "count": 2
      }]
      // _>
      if (data[0] == "" || data[1] == "") { // lấy data từ form nhập của người dùng
        this.modalBody.innerHTML = "Không được bỏ trống ô nhập";
        this.modal.style.display = "block";
        setTimeout(() => {
          this.modal.style.display = "none";
        }, 2000);
      } else {
        users.find((obj) => {
          // tìm giá trị đã nhập so sánh với tên đăng nhập trong data
          if (obj["username"] === data[0]) {
            if (obj.password === data[1]) {
              this.modalBody.textContent = "Đăng nhập thành công";
              this.modal.style.display = "block";
              localStorage.setItem("user", data[0]); // lưu session
              setTimeout(() => {
                this.$router.push({ name: 'account', params: { id: 1 }})
                this.modal.style.display = 'none'
              }, 2000)
            } else {
              this.modalBody.innerHTML = "Nhập sai tài khoản hoặc mật khẩu"
              this.modal.style.display = "block";
              setTimeout(() => {
                this.modal.style.display = "none"
              }, 2000)
            }
          }
          else { this.modalBody.innerHTML = "Nhập sai tài khoản hoặc mật khẩu"
            this.modal.style.display = "block";
            setTimeout(() => {
              this.modal.style.display = "none"
            }, 2000) 
          }
        })
      }
    },
  },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .login {
    margin-top: 10%;
  }

  .logout {
    cursor: pointer;
  }

</style>
  