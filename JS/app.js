const getInfo = () => {
    fetch("https://api.covalenthq.com/v1/1/address/demo.eth/balances_v2/?key=ckey_4bf5134147bb4813bca00d00975")
    .then(resp => resp.json())
    .then(json => console.log(json.results))
}