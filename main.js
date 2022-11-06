function creatCard() {
    return `
    <div id="cards">
        <div id="card">
            <h2> 05/11 <span>sábado</span></h2>
            <ul>
                <li>
                    <img src="imagens-paises/icon=brazil.svg" alt="bandeira Brasil">
                    <strong>7:00</strong>
                    <img src="imagens-paises/icon=serbia.svg" alt="bandeira Servia">
                </li>
                <li>
                    <img src="imagens-paises/icon=hungary.svg" alt="logo Hungria">
                    <strong>13:00</strong>
                    <img src="imagens-paises/icon=argentina.svg" alt="logo Argentina">
                </li>
                <li>
                    <img src="imagens-paises/icon=colombia.svg" alt="logo Colombia">
                    <strong>20:00</strong>
                    <img src="imagens-paises/icon=japan.svg" alt="logo Japão">
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
    ${creatCard()}
    ${creatCard()}
    ${creatCard()}
    </main>
`