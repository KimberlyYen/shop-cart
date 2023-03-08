window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload() 
    }
};

//data
let itemMap = null;
function initItemMap(){
    itemMap = {
        "itemA":{"name":"Kiwi Juice", "price":10, "quantity":0, "size": "450ml"},
        "itemB":{"name":"Mango Juice", "price":20, "quantity":0, "size": "450ml"},
        "itemC":{"name":"Pineapple Juice", "price":15, "quantity":0, "size": "1 Slice"},
        "itemD":{"name":"Berry Muffins", "price":90, "quantity":0, "size": "600ml"},
        "itemE":{"name":"Pea Soup", "price":100, "quantity":0, "size": "450ml"},
        "itemF":{"name":"Pancake", "price":50, "quantity":0, "size": "2 Slice"},
    }
}
function setItemMap(inputItemMap){
    itemMap = inputItemMap
}

function calculateFunction (id, type, page){
    let quantity = parseInt(itemMap[id]["quantity"]) 
    if("add" == type){
        quantity = quantity + 1;
        //設定map
        itemMap[id]['quantity'] = quantity
        //設定畫面
        document.getElementById(id+"-quantity").innerHTML = quantity
    }
    if("delete" == type){
        if(quantity > 0) {
            quantity = quantity - 1;
            //設定map
            itemMap[id]['quantity'] = quantity
            //設定畫面
            document.getElementById(id+"-quantity").innerHTML = quantity
            if("confirm" == page && quantity == 0) {
                document.getElementById(id).style.display="none";
            }
        }
    }
    //重新加總
    calculateTotal(page);
}

function calculateTotal (page) {
    if("index" == page ){
        let totalNumber = 0;
        for (const [key, value] of Object.entries(itemMap)) {
            const quantity = parseInt(itemMap[`${key}`]["quantity"]);
            totalNumber = totalNumber + quantity
        }
        if(totalNumber > 0){
            document.getElementById("nextTrue").style.display="block";
            document.getElementById("nextFalse").style.display="none";
        }else{
            document.getElementById("nextTrue").style.display="none";
            document.getElementById("nextFalse").style.display="block";
        }
        document.getElementById("totalNumber").innerHTML = totalNumber; 
    }
    if("confirm" == page ){
        let total = 0;
        for (const [key, value] of Object.entries(itemMap)) {
            const quantity = parseInt(itemMap[`${key}`]["quantity"]);
            const price = parseInt(itemMap[`${key}`]["price"]);
            total = total + (quantity * price)
        }
        if(total > 0){
            document.getElementById("nextTrue").style.display="block";
            document.getElementById("nextFalse").style.display="none";
        }else{
            document.getElementById("nextTrue").style.display="none";
            document.getElementById("nextFalse").style.display="block";
        }
        document.getElementById("total").innerHTML = total; 
    }
    
}