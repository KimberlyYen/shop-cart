window.onload=function(){
    //init
    initItemMap();
    initData();
}

function initData(){
    for (const [key, value] of Object.entries(itemMap)) {
        const nameId = `${key}` + "-name";
        const quantityId = `${key}` + "-quantity";
        const priceId = `${key}` + "-price";
        const sizeId = `${key}` + "-size";

        document.getElementById(nameId).innerHTML = itemMap[`${key}`]["name"];
        document.getElementById(quantityId).innerHTML = itemMap[`${key}`]["quantity"];
        document.getElementById(priceId).innerHTML = itemMap[`${key}`]["price"];
        document.getElementById(sizeId).innerHTML = itemMap[`${key}`]["size"];
    }
    document.getElementById("nextTrue").style.display="none";
    document.getElementById("nextFalse").style.display="block";
    document.getElementById("totalNumber").innerHTML = 0;
    
}

function confirm(){
    let finalPriceMapJson = JSON.stringify(itemMap)
    window.location.href = "order.html?data=" + finalPriceMapJson;
}