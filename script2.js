<<<<<<< HEAD
let addItem = document.getElementById("popupbox")
let cardContainer = document.getElementById("container")
let newCardName =document.getElementById("cardname")
let pTag = document.getElementById("ptag")
let blurBack = document.getElementById("backgroundblur")
let selectContainer = document.getElementById("selectContainer") 
let revertButton = document.getElementById("revertbackbutton")
let navBar = document.getElementById("cardheading")
console.log(newCardName.parentNode);


/* page 4 doc*/
// let listItem = document.getElementById("itempopupbox")
// let newItemName = document.getElementById("itemnameincard")
// let addListItem = document.getElementById("addlist")
// let closeItem = document.getElementById("closeitem")

function additem()
{
   
      addItem.classList.remove("hide")
      blurBack.setAttribute("class","blur")
   //addItem.setAttribute("class","popupbox show")
   
}

function hideAddCard()
{
    addItem.classList.add("hide")
    blurBack.setAttribute("class","undoblur")
}
/* unique id to each card */
let cardId = 0;
// const createcard2 = document.getElementById("cardnew2") 
function addCard()
{
    
    cardId++;
    let createCard = document.createElement("div");
    let hrLine = document.createElement("hr")
    let cardName = document.createElement("h2")
    let divstore = document.createElement("div")
   // let itemList = document.createElement("h4");
   // let markdone = document.createElement("button")
    let deleteButton = document.createElement("button");
    let itemAdd = document.createElement("button");

    createCard.setAttribute("id",cardId)
    createCard.appendChild(cardName);
    createCard.appendChild(hrLine);
    createCard.appendChild(divstore)
    //createCard.appendChild(itemList);
   // createCard.appendChild(markdone);
    createCard.appendChild(deleteButton);
    createCard.appendChild(itemAdd);
    cardContainer.appendChild(createCard);

  //  divstore.appendChild(itemList);
   // divstore.appendChild(markdone);
   
    createCard.classList.add("card")
    pTag.style.display = "none";

    cardName.innerText = newCardName.value;
   
    //for this eventlistener needed
    newCardName.value="";
   
    /*styling for card : inside cardcontainer */
    cardName.classList.add("cardtitle")
    hrLine.classList.add("hrlineinsidecard")
    itemAdd.classList.add("itemadd");
    deleteButton.classList.add("deletebutton");
    
   
    deleteButton.addEventListener('click',function()
     {
         createCard.remove();
        // console.log(cardId) show deleted id 
     }
     );
 
     hideAddCard()

    /*addbutton of card we are creating popup2 */
    
    itemAdd.addEventListener('click',function()
    {    
        //createpopupbox(divstore);
       let body = document.querySelector("body")
       let listItem = document.createElement("div")
       let h2Item = document.createElement("h2")
       let newItemName = document.createElement("input")
       let addListItem = document.createElement("button")
       let closeItem = document.createElement("button")
   
       listItem.style.display = "block";
       listItem.appendChild(newItemName)
       listItem.appendChild(h2Item)
       listItem.appendChild(addListItem)
       listItem.appendChild(closeItem)
       body.appendChild(listItem)
      
       listItem.setAttribute("class","itempopupbox" )
        //itempopupbox.style.display = "block"
      
       h2Item.setAttribute("class","h2item")
       newItemName.setAttribute("class","newitemname")
       addListItem.setAttribute("class","addcard")
       closeItem.setAttribute("class","closecard")
   
        h2Item.innerText = "Add New Item";
        //newItemName.style.placeholder = "add new item";
        addListItem.innerText = "Add";
        closeItem.innerText = "Close";

        /* close button of popupbox */
        closeItem.addEventListener("click", () => {
            listItem.remove();
      });
      /* Add button of popupboox */
      
      addListItem.addEventListener('click',function()
      {  
          let itemNameInCard = document.createElement("h3")
          let markDone = document.createElement("button")
         
          //let bgblur = document.createElement("div")
    
          divstore.appendChild(itemNameInCard)
          divstore.appendChild(markDone)
         // body.appendChild(bgblur)
  
          itemNameInCard.setAttribute("class","itemNameincard")
          markDone.setAttribute("class","markdone")
        
          itemNameInCard.innerText =  newItemName.value;
          markDone.innerHTML = "markdone"
  
          divstore.setAttribute("class","innerdivinsidecard")
        
          //.setAttribute("class","removepopupbox")
         // listItem.classList.add("hide")
          listItem.style.display = "none";

          /* markdone cut when activity done*/
          markDone.addEventListener('click',function(){
          markDone.setAttribute("class","linethrough")
          itemNameInCard.setAttribute("class","textdecoration")
          
          })
     
        } ); 
        
    } );
    
    /* for showing only select card in center ,today */
    cardName.addEventListener('click',function()
    {
        cardContainer.classList.add("hide");
        // selectContainer.classList.remove("hide");
        //cardContainer.classList.add("hide");
        // revertButton.classList.remove("hide");
        //  const clonecard = createCard.cloneNode(true);
        //   selectContainer.appendChild(clonecard)
        // selectContainer.createElement("h2").innerHTML = cardName;
        selectContainer.appendChild(createCard)
        /*styling container and back button */
        // selectContainer.classList.add("revertbutton")
       // selectContainer.classList.add("tripcard")
        selectContainer.style.display="flex";

       // selectContainer.classList.add("cardheading")

        // clonecard.setAttribute("class","tripcard")
    })
}


// function revertbutton(){
//     cardContainer.classList.remove("hide");
//     selectContainer.classList.add("hide")
//     revertButton.classList.add("hide")
//     navBar.style.display="flex"
//   //console.log(selectContainer.childNodes[1])
//     selectContainer.innerHTML = "";
  
   
// }

       
  
/*
function createcardpopup(divstore)
{
    let body = document.querySelector("body")
    let popupDiv = document.createElement("div")
    let popupCardName = document.createElement("h2")
    let newItemName = document.createElement("input")
    let addListItem = document.createElement("button")
    let closeItemCard = document.createElement("button")

    popupDiv.appendChild(popupCardName)
    popupDiv.appendChild(newItemName)
    popupDiv.appendChild(addListItem)
    popupDiv.appendChild(closeItemCard)

    body.appendChild(popupDiv)

    popupDiv.setAttribute("class","itempopupbox");
    popupCardName.setAttribute("class","popupboxname");
    newItemName.setAttribute("class","inputitemname");
    addListItem.setAttribute("class","additembutton");
    closeItemCard.setAttribute("class","closeitemcard");

    // addListItem.addEventListener("click", function() 
    
    // {
    //     let itemNameInCard = document.createElement("h4")
    //     let markDone = document.createElement("button")

    //    divstore.appendChild(itemNameInCard)
    //     divstore.appendChild(markDone)

    //     itemNameInCard.setAttribute("class","itemNameincard")
    //     markDone.setAttribute("class","markdone")

    //     divstore.setAttribute("class","innerdivinsidecard")

    //     popupDiv.setAttribute("class","removepopupbox")


    // })
  
}
*/
     // createcardpopup(divstore)
        //listItem.style.display = "block";  
  //  }
    //)


 
// div.createElement(h3)
// div.createElement(button)

// h3.classList.add(itemName)
// button.classList.add()

//}
=======
let addItem = document.getElementById("popupbox")
let cardContainer = document.getElementById("container")
let newCardName =document.getElementById("cardname")
let pTag = document.getElementById("ptag")
let blurBack = document.getElementById("backgroundblur")
let selectContainer = document.getElementById("selectContainer") 
let revertButton = document.getElementById("revertbackbutton")
console.log(newCardName.parentNode);


/* page 4 doc*/
// let listItem = document.getElementById("itempopupbox")
// let newItemName = document.getElementById("itemnameincard")
// let addListItem = document.getElementById("addlist")
// let closeItem = document.getElementById("closeitem")

function additem()
{
   
      addItem.classList.remove("hide")
      blurBack.setAttribute("class","blur")
   //addItem.setAttribute("class","popupbox show")
   
}

function hideAddCard()
{
    addItem.classList.add("hide")
    blurBack.setAttribute("class","undoblur")
}
/* unique id to each card */
let cardId = 0;
// const createcard2 = document.getElementById("cardnew2") 
function addCard()
{
    
    cardId++;
    let createCard = document.createElement("div");
    let hrLine = document.createElement("hr")
    let cardName = document.createElement("h2")
    let divstore = document.createElement("div")
   // let itemList = document.createElement("h4");
   // let markdone = document.createElement("button")
    let deleteButton = document.createElement("button");
    let itemAdd = document.createElement("button");

    createCard.setAttribute("id",cardId)
    createCard.appendChild(cardName);
    createCard.appendChild(hrLine);
    createCard.appendChild(divstore)
    //createCard.appendChild(itemList);
   // createCard.appendChild(markdone);
    createCard.appendChild(deleteButton);
    createCard.appendChild(itemAdd);
    cardContainer.appendChild(createCard);

  //  divstore.appendChild(itemList);
   // divstore.appendChild(markdone);
   
    createCard.classList.add("card")
    pTag.style.display = "none";

    cardName.innerText = newCardName.value;
   
    //for this eventlistener needed
    newCardName.value="";
   
    /*styling for card : inside cardcontainer */
    cardName.classList.add("cardtitle")
    hrLine.classList.add("hrlineinsidecard")
    itemAdd.classList.add("itemadd");
    deleteButton.classList.add("deletebutton");
    
   
    deleteButton.addEventListener('click',function()
     {
         createCard.remove();
        // console.log(cardId) show deleted id 
     }
     );
 
     hideAddCard()

    /*addbutton of card we are creating popup2 */
    itemAdd.addEventListener('click',function()
    { 
        
        //createpopupbox(divstore);
       let body = document.querySelector("body")
       let listItem = document.createElement("div")
       let h2Item = document.createElement("h2")
       let newItemName = document.createElement("input")
       let addListItem = document.createElement("button")
       let closeItem = document.createElement("button")
   
       listItem.style.display = "block";
       listItem.appendChild(newItemName)
       listItem.appendChild(h2Item)
       listItem.appendChild(addListItem)
       listItem.appendChild(closeItem)
       body.appendChild(listItem)
      
       listItem.setAttribute("class","itempopupbox" )
        //itempopupbox.style.display = "block"
      
       h2Item.setAttribute("class","h2item")
       newItemName.setAttribute("class","newitemname")
       addListItem.setAttribute("class","addcard")
       closeItem.setAttribute("class","closecard")
   
        h2Item.innerText = "Add New Item";
        //newItemName.style.placeholder = "add new item";
        addListItem.innerText = "Add";
        closeItem.innerText = "Close";

        /* close button of popupbox */
        closeItem.addEventListener("click", () => {
            listItem.remove();
      });
      /* Add button of popupboox */
      
      addListItem.addEventListener('click',function()
      {  
          let itemNameInCard = document.createElement("span")
          let markDone = document.createElement("button")
    
          divstore.appendChild(itemNameInCard)
          divstore.appendChild(markDone)
  
          itemNameInCard.setAttribute("class","itemNameincard")
          markDone.setAttribute("class","markdone")
        
          itemNameInCard.innerText =  newItemName.value;
          markDone.innerHTML = "markdone"
  
          divstore.setAttribute("class","innerdivinsidecard")

          //.setAttribute("class","removepopupbox")
         // listItem.classList.add("hide")
          listItem.style.display = "none";

          /* markdone cut when activity done*/
          markDone.addEventListener('click',function(){
            markDone.setAttribute("class","linethrough")
          })
     
        } ); 
   
    } );
    
    /* for showing only select card in center ,today */
    cardName.addEventListener('click',function()
    {
         cardContainer.classList.add("hide");
        selectContainer.classList.remove("hide");
        //cardContainer.classList.add("hide");
        revertButton.classList.remove("hide")
        selectContainer.appendChild(createCard)
    })
}


function revertbutton(){
    cardContainer.classList.remove("hide");
    selectContainer.classList.add("hide")
    revertButton.classList.add("hide")
   
    selectContainer.innerHTML = "";
    console.log(selectContainer.childNodes[1])
   
}

       
       // createcardpopup(divstore)
        //listItem.style.display = "block";  
  //  }
    //)


 
// div.createElement(h3)
// div.createElement(button)

// h3.classList.add(itemName)
// button.classList.add()

//}
/*
function createcardpopup(divstore)
{
    let body = document.querySelector("body")
    let popupDiv = document.createElement("div")
    let popupCardName = document.createElement("h2")
    let newItemName = document.createElement("input")
    let addListItem = document.createElement("button")
    let closeItemCard = document.createElement("button")

    popupDiv.appendChild(popupCardName)
    popupDiv.appendChild(newItemName)
    popupDiv.appendChild(addListItem)
    popupDiv.appendChild(closeItemCard)

    body.appendChild(popupDiv)

    popupDiv.setAttribute("class","itempopupbox");
    popupCardName.setAttribute("class","popupboxname");
    newItemName.setAttribute("class","inputitemname");
    addListItem.setAttribute("class","additembutton");
    closeItemCard.setAttribute("class","closeitemcard");

    // addListItem.addEventListener("click", function() 
    
    // {
    //     let itemNameInCard = document.createElement("h4")
    //     let markDone = document.createElement("button")

    //    divstore.appendChild(itemNameInCard)
    //     divstore.appendChild(markDone)

    //     itemNameInCard.setAttribute("class","itemNameincard")
    //     markDone.setAttribute("class","markdone")

    //     divstore.setAttribute("class","innerdivinsidecard")

    //     popupDiv.setAttribute("class","removepopupbox")


    // })
  
}
*/
>>>>>>> 4604ce6004201c9155b3217f648f7af589f2470b
