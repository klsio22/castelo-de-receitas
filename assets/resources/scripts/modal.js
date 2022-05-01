/* 
const modal = document.getElementById('modal');
const btn = document.getElementById('send-recipe');
const span = document.getElementsByClassName('close')[0];
btn.onclick = function () {
  modal.style.display = 'block';
};
span.onclick = function () {
  modal.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}; */

const Modal = {
  modal: document.getElementById('modal'),
  btn: document.getElementById('send-btn'),
  close: $('.close')[0],

  onClickBtn: function () {
    Modal.btn.onclick = function () {
      console.log('cluclou');
      Modal.modal.style.display= 'block';
    };
  },

  closeModal: function () {
    Modal.close.onclick = function () {
      Modal.modal.style.display = 'none';
    };
  },

  verifyModal: function () {
    window.onclick = function (event) {
      if (event.target == Modal.modal) {
        Modal.modal.style.display = 'none';
      }
    };
  },

  excute: function () {
    this.onClickBtn();
    this.closeModal();
    this.verifyModal();
  },
};

Modal.excute();
