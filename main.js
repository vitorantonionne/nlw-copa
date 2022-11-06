function createGame(player1, hora, player2) {
    return `
    <li>
        <img src="imagens-paises/icon-${player1}.svg" alt="${player1}">
        <strong>${hora}</strong>
        <img src="imagens-paises/icon-${player2}.svg" alt="${player2}">
    </li>  

    `
}

function createCard(date , day, games) {
    return `
    <div id="cards">
        <div id="card">
            <h2> ${date} <span>${day}</span></h2>
            <ul>
              ${games}
            </ul>
        </div>
    </div>
    `
} 
document.querySelector("#app").innerHTML = `
    <header>
        <img src="imagens-paises/logo.svg" alt="logo nwl copa">
        </header>
    <main id="cards">   
    ${createCard('24/11', 'quinta',createGame("brasil", "16:00", "servia"))}
    ${createCard('28/11', 'segunda',createGame("suiça", "13:00", "brasil"))}
    ${createCard('02/12', 'sexta',createGame("brasil", "16:00", "camaroes"))}  
    </main>
`