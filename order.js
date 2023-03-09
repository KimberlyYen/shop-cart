//data
window.onload=function(){
    let url = new URL(location.href);
    let data = JSON.parse(url.searchParams.get('data'));
    setItemMap(data);
    initData()
  }

  function initData(){
    
    for (const [key, value] of Object.entries(itemMap)) {
          //沒有不顯示
          // 
          const quantity = parseInt(itemMap[`${key}`]["quantity"]);
          if(quantity > 0) {
            // document.getElementById(`${key}`).style.display="block";

            const quantityId = `${key}` + "-quantity";
            const priceId = `${key}` + "-price";
            const nameId = `${key}` + "-name";
            const sizeId = `${key}` + "-size";

            document.getElementById(nameId).innerHTML = itemMap[`${key}`]["name"];
            document.getElementById(quantityId).innerHTML = itemMap[`${key}`]["quantity"];
            document.getElementById(priceId).innerHTML = itemMap[`${key}`]["price"];
            document.getElementById(sizeId).innerHTML = itemMap[`${key}`]["size"];
            
          }else{
            document.getElementById(`${key}`).style.display="none";
          }
      }
      document.getElementById("nextTrue").style.display="none";
      document.getElementById("nextFalse").style.display="block";

      calculateTotal("confirm");
  }

  function confirm(){
      alert("🎉 Order complete! 🎉 ")
  }