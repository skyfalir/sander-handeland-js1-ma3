const url =
  'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=cbe09bcd58a640b08a70a7447a6398a8'

const result = document.querySelector('.result')

async function getGames () {
  const response = await fetch(url)

  const call = await response.json()

  const games = call.results

  result.innerHTML = ' '

  for (let i = 0; 1 < games.length; i++) {
    if (i === 8) {
      break
    }

    result.innerHTML += `<div class="result">
        Name: ${games[i].name} <br>
        Rating: ${games[i].rating} <br>
        Tags: ${games[i].tags.length}
        </div>`
  }
}

getGames()
