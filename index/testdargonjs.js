
PriceItem = 0

function APIAUCTION(requestObject) {
  

fetch("https://api.hypixel.net/skyblock/auctions?key=ffa56cad-5677-47d7-86f2-aca03c3df3de&page=0")
.then(result => result.json())
.then((auction)=> {
  


 for (let i = 0; i < auction.totalPages; i++) {
  
  fetch("https://api.hypixel.net/skyblock/auctions?key=ffa56cad-5677-47d7-86f2-aca03c3df3de&page=" + i)
.then(result => result.json())
.then((auction)=> {
  
  console.log("c'est le numéro" + i)

  for (let i2 = 0; i2 < auction.auctions.length; i2++) {
    
    objectName = auction.auctions[i2].item_name
    if (objectName == requestObject) {
      

        var totcalc = []
        for (let i = 0; i < auction.length; i++) {
          lastcalc = parseFloat(auction.auctions[i2].highest_bid_amount)
           
          
          totcalc.push(lastcalc)
          
        }
        totcalc.sort()

        
        for (let i3 = 0; i3 < totcalc.length/2; i3++) {
          
          delete totcalc[i3]
          
        }
        
        for (let i4 = 0; i4 < totcalc.length; i4++) {

          PriceItem = parseFloat(totcalc[i4]) + parseFloat(PriceItem)
          
        }

        return parseFloat(PriceItem)
        


    }
    
  }

})
}


})

}


let requestObject = "Superior Dragon Helmet"


dragon = 0
dragon = APIAUCTION(requestObject)