const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose= document.querySelector('.modal button.close')

const Modal = {
  open(){
    modalWapper.classList.add('open')
  },
  close(){
   modalWapper.classList.remove('open')
  }
}

Modal.close()

form.onsubmit = event => {
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  modalMessage.innerText = message
  Modal.open()
}

modalBtnClose.onclick = () => {  
  Modal.close()
}
function IMC(weight, height) {
  return(weight / ((height/100)**2)).toFixed(2)
}