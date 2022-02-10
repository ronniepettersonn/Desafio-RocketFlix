import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

let numberFilm

const buttonFilm = document.querySelector('.find-film button')

console.log(buttonFilm)

buttonFilm.addEventListener("click", function() {
  
  numberFilm = Math.floor(Math.random().toFixed(4) * 1000)
  
  fetch(`${BASE_URL}${numberFilm}?${API_KEY}&${language}`)
  .then(res => res.json())
  .then(data => {
    const img = document.querySelector('.film-img img')
    const title = document.querySelector('.film-content h2')
    const description = document.querySelector('.film-content p')
    const noFilm = document.querySelector('.no-film')
    const filmContent = document.querySelector(".film-content")
    const article = document.querySelector('article')
  
    console.log(data.overview)
  
    console.log(numberFilm)

    if(data.title === undefined || data.overview === undefined || data.poster_path === undefined) {
      article.setAttribute('style', 'display:flex')
      
      filmContent.setAttribute('style', 'display: flex; align-items: center')

      noFilm.innerHTML = '<b>Ops, hoje não é dia de assistir filme. <br> Bora codar!🚀</b>'
      description.innerHTML = ''

      title.innerHTML = ''
      img.setAttribute("src", `./assets/Poster.png`)

    } else {
      article.setAttribute('style', 'display:flex')

      title.innerHTML = data.title

      filmContent.setAttribute('style', '')

      noFilm.innerHTML = ''
    
      description.innerHTML = data.overview
    
      img.setAttribute("src", `${IMG_URL}${data.poster_path}`)

    }

  
    console.log(data)
  })
  .catch(err => console.log(err))
})

