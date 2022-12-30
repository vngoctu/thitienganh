<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="myModal" class="modal">
      <div class="modal-content">
        <div class="modal-header bg-info">
          <strong class="mx-auto">Thông báo</strong>
        </div>
        <div class="modal-body">
          <p></p>
        </div>
        <div class="btn btn-primary btn-sm mx-auto close">Đóng</div>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style>


.modal {
      text-align: center;
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 3; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  
  /* Modal Header */
  .modal-header {
    padding: 10px 5px;
    color: white;
  }
  
  .modal-header h2 {
    color: #fff;
  }
  
  /* Modal Body */
  .modal-body {padding: 20px 16px 0 16px;}
  
  /* Modal Footer */
  .modal-footer {
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
  }
  
  /* Modal Content */
  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    margin-top: 40vh;
    border: 1px solid #888;
    width: 50%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    animation-name: animatetop;
    animation-duration: 0.4s
  }
  
  .close {
    display: none;
    margin: 20px 0;
  }
  
  /* Add Animation */
  @keyframes animatetop {
    from {top: -300px; opacity: 0}
    to {top: 0; opacity: 1}
  }
  
  @media screen and (max-width: 600px) {
    .modal-content {
      width: 90%;
    }
  }

</style>