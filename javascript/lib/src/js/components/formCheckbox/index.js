const checkboxParent = document.querySelector('[data-checkbox="parent"]')
const checkboxChild = document.querySelectorAll('[data-checkbox="child"]')

const resetChecks = () => {
  checkboxChild.forEach((elm) => {
    elm.checked = false
  })
}

const checkAll = () => {
  checkboxChild.forEach((elm) => {
    elm.checked = true
  })
}

const setListener = () => {
  checkboxParent.addEventListener('click', () => {
    checkboxParent.checked ? checkAll() : resetChecks()
  })

  checkboxChild.forEach((elm) => {
    elm.addEventListener('click', () => {
      const checkedList = [].filter.call(checkboxChild, (el) => {
        return el.checked
      })

      checkboxParent.checked = checkedList.length > 0
    })
  })
}

export function setupCheckbox() {
  if (checkboxParent.length === 0) return // no parent checkbox
  setListener()
}
