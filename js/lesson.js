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
   