function creatCard(date , day) {
    return `
    <div id="cards">
        <div id="card">
            <h2> ${date} <span>${day}</span></h2>
            <ul>
                <li>
                    <img src="imagens-paises/icon=brazil.svg" alt="bandeira Brasil">
                    <strong>16:00</strong>
                    <img src="imagens-paises/icon=serbia.svg" alt="bandeira Servia">
                </li>
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
    ${creatCard('24/11', 'quinta')}
    ${creatCard('28/11', 'segunda')}
    ${creatCard('02/12', 'sexta')}  
    </main>
`