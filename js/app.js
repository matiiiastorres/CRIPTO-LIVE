console.log("matiasHackatom")


const getData = async () => {
    var valueInput = document.getElementById("adrres").value
    const resp = await fetch("https://api.covalenthq.com/v1/1/address/" + valueInput + "/balances_v2/?key=ckey_4bf5134147bb4813bca00d00975")
    const json = await resp.json()
    var monedasList = json.data.items
    const containerCovalent = document.getElementById("containerCovalent")
    const monedas = monedasList.map(moneda => `<p>${moneda.contract_name} ${moneda.quote}</p>`)
    return containerCovalent.innerHTML = monedas
}