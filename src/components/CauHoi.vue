<template>
  <div id="cauhoi" class="position-relative">
    <section class="lambai row mt-3 col-12 col-lg-7 col-md-9 mx-auto">
      <div class="col-12 col-sm-10 col-md-9">
        <div class="card text-start">
          <div class="card-header fw-semibold py-3">
            Làm bài thi (<span class="time text-danger">00:30</span>)
          </div>
          <div class="card-body ps-4">
            <DanhSach v-for="(qs, index) in cauhoi" :key="index" :danhsach="qs" :dung="qs.as" @loadDapAn="loadDapAn"/>
          </div>
        </div>
      </div>
      <div class="traloi col-12 col-sm-2 col-md-3 d-flex flex-column">
        <button type="button" class="d-none d-sm-block btn btn-primary btn-sm mb-2 bt1 position-relative">
          1. <span class="fw-semibold" :class="{correctDA: cauhoi[0].as == dapanWord[0]}">{{ dapan[0] }}</span>
        </button>
        <button type="button" class="d-none d-sm-block btn btn-primary btn-sm mb-2 bt2 position-relative">
          2: <span class="fw-semibold" :class="{correctDA: cauhoi[1].as == dapanWord[1]}">{{ dapan[1] }}</span>
        </button>
        <button type="button" class="d-none d-sm-block btn btn-primary btn-sm mb-2 bt3 position-relative">
          3: <span class="fw-semibold" :class="{correctDA: cauhoi[2].as == dapanWord[2]}">{{ dapan[2] }}</span>
        </button>
        <button type="button" class="d-none d-sm-block btn btn-primary btn-sm mb-2 bt4 position-relative">
          4. <span class="fw-semibold" :class="{correctDA: cauhoi[3].as == dapanWord[3]}">{{ dapan[3] }}</span>
        </button>
        <button type="button" class="d-none d-sm-block btn btn-primary btn-sm mb-2 bt5 position-relative">
          5: <span class="fw-semibold" :class="{correctDA: cauhoi[4].as == dapanWord[4]}">{{ dapan[4] }}</span>
        </button>
        <button type="button" class="d-none d-sm-block btn btn-primary btn-sm mb-2 bt6 position-relative">
          6: <span class="fw-semibold" :class="{correctDA: cauhoi[5].as == dapanWord[5]}">{{ dapan[5] }}</span>
        </button>
        <button type="button" class="d-none d-sm-block btn btn-primary btn-sm mb-2 bt7 position-relative">
          7. <span class="fw-semibold" :class="{correctDA: cauhoi[6].as == dapanWord[6]}">{{ dapan[6] }}</span>
        </button>
        <button type="button" class="d-none d-sm-block btn btn-primary btn-sm mb-2 bt8 position-relative">
          8: <span class="fw-semibold" :class="{correctDA: cauhoi[7].as == dapanWord[7]}">{{ dapan[7] }}</span>
        </button>
        <button type="button" class="d-none d-sm-block btn btn-primary btn-sm mb-2 bt9 position-relative">
          9: <span class="fw-semibold" :class="{correctDA: cauhoi[8].as == dapanWord[8]}">{{ dapan[8] }}</span>
        </button>
        <button type="button" class="d-none d-sm-block btn btn-primary btn-sm mb-2 bt10 position-relative">
          10: <span class="fw-semibold" :class="{correctDA: cauhoi[9].as == dapanWord[9]}">{{ dapan[9] }}</span>
        </button>
        <button type="button" class="btn btn-success nopbai mb-2" @click="nop">Nộp bài</button>
      </div>
    </section>
    <div class="diem position-absolute btn btn-success btn-sm">Điểm: {{ diem }}</div>
  </div>
</template>
  
  <script>
  import DanhSach from './DanhSach.vue'
  
  import { store } from '../store';
  
  export default {
    components: {
      DanhSach
    },
    data() {
      window.onbeforeunload = () => ""; // Chặn load trang để tập trung làm
      return {
        s: 0, // biến thời gian làm bài
        dapan: [], // đáp án người dùng chọn [value]
        dapanWord: [], // đáp án người dùng theo A B C D
        diem: 0, // biến tổng điểm

        // Popup
        modal: document.getElementById("myModal"),
        modalContent: document.getElementsByClassName("modal-content")[0],
        modalBody: document.getElementsByClassName("modal-body")[0],
        closeBtn: document.getElementsByClassName("close")[0],
    }
  },
  computed: {
    cauhoi() {
      return store.state.cauhoi //nhận dữ liệu câu hỏi
    }
  },
  methods: {
    loadDapAn() {
      this.dapan = this.loadDapAn //
      this.dapan = store.state.dapan.map(e => e.abcd)
      this.dapanWord = store.state.dapan.map(e => e.word)
    },
    cham() {
      clearInterval(this.s)
      store.commit('getDung', this.dapanWord) // check đáp án với data store
      // <_ CSS cho đáp án đúng / sai
      let elem = document.createElement('style') 
      elem.className = 'styleDA'
      elem.textContent = '.correct {padding-right: 10px; border-radius:3px} .correct:before{content: "✔";position: absolute;margin-top: 5px;margin-left: -7px;background: green;width: 15px;height: 15px;font-size: 12px;text-align: center;border-radius: 100%;color: white;z-index:2}input[type=radio]:checked+label .lb-dapan:before{content:"×";position: absolute;margin-top: 5px;margin-left: -16px;font-size: 14px;background: red;width: 14px;height: 14px;text-align: center;border-radius: 100%;color: white;line-height: 15px;z-index: 1}.correctDA:after{content: "✔";background: green;width: 15px;height: 15px;position: absolute;top: 7px;right: 3px;line-height: 15px;border-radius: 100%;'
      // _>

      // <_ Hiển thị điểm
      setTimeout(() => {
        this.diem = store.state.diem
        this.modalBody.innerHTML += `<strong>${this.diem}/10 câu đúng, ${this.diem} điểm về chỗ</strong>`
        this.modal.style.display = "block"
        this.closeBtn.style.display = "block"
      this.closeBtn.onclick = () => { this.modal.style = 'none'; document.querySelectorAll('.danhsach').forEach(e => e.style.pointerEvents = 'none')}
      }, 3000)
      setTimeout(() => {
        document.body.appendChild(elem)
        window.onbeforeunload = null
        document.querySelector("nav").style.pointerEvents = 'auto'
      },4000)
      // _>
    },
    
    nop(event) {
      if (this.dapan.filter(obj=>obj!=="").length == 10) {
        let confirmAction = confirm("Bạn có chắc chắn muốn hoàn thành bài?");
        if (confirmAction) {
          event.target.style.pointerEvents = 'none' // Chặn click để tập trung làm
          this.modalBody.innerHTML = "<p>Hệ thống sẽ chấm điểm tự động</p>"
          this.modal.style.display = "block"
          this.cham()
        }
      } 
      else {
        alert('Vui lòng làm đủ các câu trả lời !!') // Chưa đủ 10 câu thì thông báo
      }
    }
  },
  updated() {

  },
  mounted() {
    store.state.dapan = [] // reset đáp án
    document.querySelector("nav").style.pointerEvents = 'none' // Chặn click để tập trung làm
    // <_ Sau khi render lại trang, xóa các thành phần thừa
    let styleDA = document.querySelector('.styleDA')
    styleDA ? styleDA.parentNode.removeChild(styleDA) : ''
    this.closeBtn ? this.closeBtn.style.display = 'none' : ''
    // _>

    let _this = this // định nghĩa lại this
    const startTimer = (duration, display) => {
      var timer = duration, minutes, seconds;
      _this.s = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds
        display.textContent = minutes + ":" + seconds
        if (--timer < 0) {
          document.querySelector(".nopbai").style.pointerEvents = 'none'
          _this.modalBody.innerHTML =
            "<p>Hết thời gian. Hệ thống đang chấm điểm...</p>";
          _this.modal.style.display = "block"
          _this.cham()
        }
      }, 1000)
    }
    let fiveMinutes = 6 * 5 - 1,
    display = document.querySelector(".time") // Thời gian 30 giây
    startTimer(fiveMinutes, display)
  },
  beforeCreate () { // Chặn chưa đăng nhập chưa được thi
    if (!localStorage.getItem('user')) {
      alert('Chưa đăng nhập nhé !')
      this.$router.push({ name: 'user' })
    }
  }
}
</script>

<style>
  .lambai .card-body {
    height: 73vh;
    overflow-y: scroll;
  }

  .traloi {
      margin-top: 10px;
      justify-content: center;
    }

  .diem {
    width: 100px;
    height: 40px;
    line-height: 30px;
    position: absolute;
    top: 10px;
    right: 20px;
  }

  @media only screen and (min-width: 1000px) and (max-width: 1600px) {
    .traloi {
      justify-content: flex-end;
    }
  }
</style>
