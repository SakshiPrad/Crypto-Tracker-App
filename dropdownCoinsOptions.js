
const dropdown = document.querySelectorAll("select");
const bitcoin = document.querySelectorAll(".bitcoin");

dropdown.forEach(element => {
    for(let coin in coins){
        // console.log(typeofcoins[coin]);     
        let newOption = document.createElement("option");
        // console.log(coins[coin])
        newOption.innerText = coins[coin];
        // console.log(element.value);
        newOption.value = coins[coin].toLocaleLowerCase();
    if (coin === "Bitcoin"){
            newOption.selected = "selected";
        }       
    element.appendChild(newOption);
}
});
