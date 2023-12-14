import './scss/javascript.scss'
import { setupModal } from './components/modal/index.js'
import { setupCheckbox } from './components/formCheckbox/index.js'

function onDomReady() {
  setupModal()
  setupCheckbox()
}

document.addEventListener('DOMContentLoaded', onDomReady)
