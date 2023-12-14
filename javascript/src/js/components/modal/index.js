import './_style.scss'

const modalElm = document.querySelector('[data-modal]')
const infoElms = document.querySelectorAll('[data-service-info]')
const modalBtns = document.querySelectorAll('[data-modal-button]')
const closingBtns = [document.querySelector('.javascript-modal__closebtn'), document.querySelector('.javascript-modal__bg')]

const setOpenListener = () => {
  if (modalBtns.length < 1) return // no modal detected
  modalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      const infoId = btn.getAttribute('data-modal-info')
      const infoElm = document.querySelector('[data-service-info="' + infoId + '"]')
      if (!infoElm) {
        console.error('no modal named ' + infoId + ' found')
        return // no modal found
      }
      infoElm.classList.add('d-flex')
      modalElm.classList.add('d-block')
    })
  })
}

const setCloseListener = () => {
  closingBtns.forEach((btn) => {
    if (!btn) return
    btn.addEventListener('click', function () {
      modalElm.classList.remove('d-block')
      if (infoElms.length > 0) hideServiceInfos()
    })
  })
}

const hideServiceInfos = () => {
  infoElms.forEach((elm) => {
    elm.classList.remove('d-flex')
  })
}

export function setupModal() {
  setOpenListener()
  setCloseListener()
}
