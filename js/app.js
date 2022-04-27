console.log("matiasHackatom")


const getData = async () => {
    const resp = await fetch(" https://pokeapi.co/api/v2/pokemon")
    const json = await resp.json()


    return (json.results)

}

getData()

const createData = async () => {
    const infoApiCovalenthq = await getData()
    const containerCovalent = document.getElementById("containerCovalent")
     
   const pokemones = infoApiCovalenthq.map(pokemon => "<p>${pokemon.name}</p>")

containerCovalent.innerHTML = pokemones



}