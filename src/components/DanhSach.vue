<template>
   <div class="danhsach position-relative">
      <div class="cauhoi">
         <div v-html="`${danhsach.id + 1 }. ${danhsach.qs}`" class="debai mt-2 mb-1" :class="`debai-${danhsach.id}`"></div>
      </div>
      <div class="form-check dapan">
         <input class="form-check-input" type="radio" :name="`dapan-${danhsach.id}`"
            :id="`dapan-a${danhsach.id}`" dapan="A" :value="danhsach.da">
         <label :class="{correct: dung == danhsach.da}" class="form-check-label" :for="`dapan-a${danhsach.id}`" @click="setDapAn(danhsach.da, danhsach.id, 'A')">
            <span class="lb-dapan">A</span> {{ danhsach.da }}
         </label>
      </div>
      <div class="form-check dapan">
         <input class="form-check-input" type="radio" :name="`dapan-${danhsach.id}`"
            :id="`dapan-b${danhsach.id}`" dapan="B" :value="danhsach.db">
         <label :class="{correct: dung == danhsach.db}" class="form-check-label" :for="`dapan-b${danhsach.id}`" @click="setDapAn(danhsach.db, danhsach.id, 'B')">
            <span class="lb-dapan">B</span> {{ danhsach.db }}
         </label>
      </div>
      <div class="form-check dapan">
         <input class="form-check-input" type="radio" :name="`dapan-${danhsach.id}`"
            :id="`dapan-c${danhsach.id}`" dapan="C" :value="danhsach.dc">
         <label :class="{correct: dung == danhsach.dc}" class="form-check-label" :for="`dapan-c${danhsach.id}`" @click="setDapAn(danhsach.dc, danhsach.id, 'C')">
            <span class="lb-dapan">C</span> {{ danhsach.dc }}
         </label>
      </div>
      <div class="form-check dapan">
         <input class="form-check-input" type="radio" :name="`dapan-${danhsach.id}`"
            :id="`dapan-d${danhsach.id}`" dapan="D" :value="danhsach.dc">
         <label :class="{correct: dung == danhsach.dd}" class="form-check-label" :for="`dapan-d${danhsach.id}`" @click="setDapAn(danhsach.dd, danhsach.id, 'D')">
            <span class="lb-dapan">D</span> {{ danhsach.dd }}
         </label>
      </div>
</div>
  </template>
  
  <script>
import { store } from '../store';
  export default {
    props: {
        danhsach: Object,
        dung: String
    },
    data() {
        return {
        }
    },

    methods: {
      setDapAn(...data) {
         document.querySelector(`.debai-${this.danhsach.id} span`).textContent = data[0] // Fill đáp án đã chọn lên câu hỏi
         store.commit('setDapAn', data) // đẩy đáp án đã chọn vào data store
         this.$emit('loadDapAn')
      }
   }
  }
  </script>
  
  <style>
p {
    margin-bottom: 10px;
    text-indent: 30px;
}

label, input[type=radio] {
  cursor: pointer;
}

.debai, .time {
  cursor: help;
}

span.bacham {
    font-weight: 700;
    text-decoration: underline;
}

input[type=radio] {
  visibility: hidden;
}

input[type=radio]:checked+label {
  font-weight: 600;
}

.lb-dapan {
  padding: 5px 10px;
}

input[type=radio]:checked+label .lb-dapan {
  background-color: #0ED2F7;
  border-radius: 100%;
}

.form-check {
  padding-left: .5em;
}
  </style>
  