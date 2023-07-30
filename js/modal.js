//MODAL JS
const modal = document.querySelector('.modal')
const modalTriger = document.querySelector('#btn-get')
const closeModelButton = document.querySelector('.modal_close')

const openModal = () => {
   modal.style.display = 'block'
   document.body.style.overflow ='hidden'
}

const closeModal = () => {
   modal.style.display = 'none'
   document.body.style.overflow =''
}

modalTriger.onclick = () =>  openModal()
closeModal
closeModelButton.onclick = () => closeModal()
modal.onclick = (event) =>{
event.target === modal && closeModal()
}

window.addEventListener('scroll', function() {
   if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
     openModal();
     window.removeEventListener('scroll', arguments.callee);
   }
 });

 setTimeout(function() {
   openModal();
 }, 10000);

 // POST DATA

 const form = document.querySelector('form')
const postData = (form) => {
form.addEventListener('submit', (event) => {
event.preventDefault()

const request = new XMLHttpRequest()
request.open("POST", "server.php")
request.setRequestHeader("Content-type", "application/json")

const formData = new formData(form)
const obj ={}
formData.forEach( (item,i) => {
 obj[i] = item
})
const json = JSON.stringify(obj)
request.send(json)
request.addEventListener('load', () => {
  if (request.status === 200){
    console.log(request.response)
  }
})
})
}
postData(form)