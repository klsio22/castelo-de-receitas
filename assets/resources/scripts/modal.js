const displayModal = {
  modal: $('#modal'),
  modalContent: document.getElementById('modal'),
  close: $('.close')[0],

  onClickBtn: function () {
    $('body').on('click', '#send-comment,' + '#send-btn', function () {
      displayModal.modal.css('display', 'block');
    });
  },

  closeModal: function () {
    $('body').on('click', '.close', function () {
      displayModal.modal.css('display', 'none');
    });

    $('body').on('click', function (event) {
      if (event.target === displayModal.modalContent) {
        //console.log('click');
        displayModal.modal.css('display', 'none');
      }
    });
  },
  execute: function () {
    this.onClickBtn();
    this.closeModal();
  },
};

displayModal.execute();
