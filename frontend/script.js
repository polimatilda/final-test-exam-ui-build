const beers = {
  id: "beers",
  logo: "Best Beers",
  button: "details",
  cards: [
    {
      title: "Mango Bay",
      sub: "Mad Scientist Beer",
      text: "Pale Ale - American"
    },
    {
      title: "Távoli Galaxis",
      sub: "Rothbeer Brewery",
      text: "IPA - American"
    },
    {
      title: "Flying Rabbit AIPA",
      sub: "MONYO Brewing Co.",
      text: "IPA - American"
    },
    {
      title: "Liquid Cocaine",
      sub: "Mad Scientist Beer",
      text: "IPA - Imperial"
    },
    {
      title: "Organic Chocolate Stout",
      sub: "Samuel Smith Old Brewery",
      text: "Stout - English"
    },
    {
      title: "Bracia",
      sub: "Thornbridge Brewery",
      text: "Strong Ale - English"
    },
    {
      title: "Oatmeal Stout",
      sub: "Samuel Smith Old Brewery",
      text: "Stout - Oatmeal"
    },
    {
      title: "Black Tokyo Horizon",
      sub: "BrewDog",
      text: "Stout - American Imperial"
    },
    {
      title: "Vintage Ale",
      sub: "Fuller's",
      text: "Old Ale"
    },
    {
      title: "All the Leaves are Brown",
      sub: "Tempest Brewing Company",
      text: "Brown Ale - American"
    },
  ]
}

console.log(beers);

const beerComponent = (title, sub, text) => `
  <div class="beer-card">
    <div class="beer-id-circle">
      <p class="beer-id">id</p>
    </div>
    <h1 class="beer-name">${title}</h1>
    <h3 class="beer-sub">${sub}</h3>
    <h3 class="beer-text">${text}</h3>
      <button class="beer-details">
        <p>details</p>
        <span class="material-symbols-outlined">arrow_forward</span>
      </button>
  </div>
`
const headerComponent = (logo) => `
  <div class="header-div">
    <h1 class="page-title">${logo}</h1>
    <span class="material-symbols-outlined" style="font-size:36px;">menu</span>
  </div>
`

const loadEvent = () => {
  const rootElement = document.querySelector('#root')

  rootElement.insertAdjacentHTML('beforeend', `<div class="beers-container"></div>`)
  const beersContainer = document.querySelector('.beers-container')

  beers.cards.map(beer => {
    console.log(beer.title)
    beersContainer.insertAdjacentHTML('beforeend', beerComponent(beer.title, beer.sub, beer.text))
  })

  rootElement.insertAdjacentHTML('afterbegin', headerComponent(beers.logo))

  const idCalculator = () => {
    const idClasses = document.querySelectorAll('.beer-id')

    for (let i = 0; i < idClasses.length; i++) {
      idClasses[i].innerHTML = i + 1
    }
  }

  idCalculator()

}

window.addEventListener("load", loadEvent);