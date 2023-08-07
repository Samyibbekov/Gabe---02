const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
   tabContent.forEach( item => {
     item.style.display = 'none'
   })
   tabs.forEach (item =>{
      item.classList.remove('tab_content_item_active')
   })
}

const schowTabContent = (index = 0) => {
   tabContent[index].style.display = 'block'
   tabs[index].classList.add('tab_content_item_active')
}

hideTabContent()
schowTabContent()



tabParent.onclick = (event) =>{
   const targetElement = event.target
   if(targetElement.classList.contains('tab_content_item')) {
   tabs.forEach((tab, tabIndex) => {
if (targetElement === tab) {
  hideTabContent()
   schowTabContent(tabIndex)
}
      })
   }
}

let currentIndex = 0;
setInterval(() => {
  currentIndex++;
  if (currentIndex >= tabs.length) {
    currentIndex = 0;
  }
  hideTabContent();
  schowTabContent(currentIndex);
}, 3000);
   

// CONVERTER
// const som = document.querySelector('#som')
// const usd = document.querySelector('#usd')

// som.addEventListener('input', () => {
//    const request = new XMLHttpRequest()
//    request.open("GET", "../data/convert.json" )
//    request.setRequestHeader("Content-type","application/json" )
//    request.send()
//    request.addEventListener('load', () => {
//       const response = JSON.parse(request.response)
//       usd.value = (som.value / response.usd).toFixed(2)
//    })

// })




var som = document.getElementById("som");
var usd = document.getElementById("usd");
var eur = document.getElementById("eur");

function convert(element, target, target2, isTrue) {
  element.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "../data/convert.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = () => {
      const response = JSON.parse(request.response);
      if (isTrue) {
        target.value = (element.value / response.usd).toFixed(2);
        target2.value = (element.value / response.eur).toFixed(2);
      } else {
        target.value = (element.value * response.usd).toFixed(2);
        target2.value = (element.value * response.eur).toFixed(2);
      }
      element.value === "" && ((target.value = ""), (target2.value = ""));
    };
  };
}

convert(som, usd, eur, true);
convert(usd, som, eur, false);
convert(eur, som, usd, false);


// CARD SWITCHER

// const card = document.querySelector('.card')
// const btnNext = document.querySelector('#btn-next')
// const btnPrev = document.querySelector('#btn-prev')
// let count = 1




// btnNext.onclick = () => {
  
//   count++
//   fetch(`https://jsonplaceholder.typicode.com/todos/${count}`).then(response => response.json())
//   .then(data => {
//    card.innerHTML = `
//    <p>${data.title}</p>
//    <p style= 'color: ${data.completed ? 'green' : 'red'}>${data.completed}</p>
//    <span> ${data.id}</span>`
//   })
// }

// const fetchCardById = (index) => {
//   fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
// }
// fetchCardById(count)


const card = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')
let count = 1


const updateCard = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(response => response.json())
  .then(data => {
   card.innerHTML = `
   <p>${data.title}</p>
   <p style= 'color: ${data.completed ? 'green' : 'red'}'>${data.completed}</p>
   <span> ${data.id}</span>`
  })
}


const changeCount = (druk) => {
  count += druk
  if (count > 200) count = 1 
  if (count < 1) count = 200 
}


btnNext.onclick = () => {
  changeCount(1) 
  updateCard(count) 
}

btnPrev.onclick = () => {
  changeCount(-1) 
  updateCard(count) 
}

updateCard(count)


