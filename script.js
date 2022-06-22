const button = document.querySelectorAll('button')
let url = "https://foodish-api.herokuapp.com/api/images/"

let content = function (event) {
  let hideImages = document.querySelectorAll('.content')

  for (let index = 0; index < hideImages.length; index++) {
    hideImages[index].style.display = "none"
  }
  let category = event.target.innerText.toLowerCase()

  let modifyUrl = url + `${category}`
  fetch(modifyUrl)
    .then(response => response.json())
    .then(element => {
      document.querySelector(`.${category}`).style.display = "block"
      document.querySelector(`.${category} > img`).src = element.image
    })
}

for (let index = 0; index < button.length; index++) {
  button[index].addEventListener('click', content)
}