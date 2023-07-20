let addItem = document.getElementById("popupbox");
// let cardContainer = document.getElementById("container")
let newCardName =document.getElementById("cardname")
let pTag = document.getElementById("ptag")
let blurBack = document.getElementById("backgroundblur")
console.log(newCardName.parentNode);

function additem()
{
   
    //  addItem.classList.remove("hide")
//    blurBack.classList.add("blur")
//    document.body.style.filter = "blur(5px)"
//    blurback.setAttribute("class","blur")
   blurBack.setAttribute("class","blur")
   addItem.setAttribute("class","popupbox show")
   
}
/*
function hideAddCard()
{
    addItem.classList.add("hide")
}
*/

/* unique id to each card */
let cardContainer = document.getElementById("container");
let cardId = 0;
function addCard()
{
    
    cardId++;
    let createCard = document.createElement("div");
    let hrLine = document.createElement("hr")
    let cardName = document.createElement("h2");
    let itemList = document.createElement("div");
    let deleteButton = document.createElement("button");
    let itemAdd = document.createElement("button");

    createCard.setAttribute("id",cardId)
    createCard.appendChild(cardName);
    createCard.append(hrLine);
    createCard.appendChild(itemList);
    createCard.appendChild(deleteButton);
    createCard.appendChild(itemAdd);
    cardContainer.appendChild(createCard);

    createCard.classList.add("card")
    pTag.style.display = "none";

    cardName.innerText = newCardName.value;
    // deleteButton.innerText = "delete";
    // itemAdd.innerText = "add";
    //for this eventlistener needed
    newCardName.value="";
    // addItem.classList.add("hide");
     //to hide popupbox after adding one card

    /*styling for addItem : div open */
    cardName.classList.add("cardtitle")
    hrLine.classList.add("hrlineinsidecard")
    itemAdd.classList.add("itemadd");
    deleteButton.classList.add("deletebutton");

}
/*
deleteButton.addEventListener('click',function()
    {
        createCard.remove();
       // console.log(cardId) show deleted id 
    }
    );
*/
   // hideAddCard();

    /*addbutton call as function to showpopupbox */
  /*  let itemId = 0;
    itemAdd.addEventListener('click',function()
    {
     
       itemId++; 
       let addNewItem = document.createElement("div");
       let boxName = document.createElement("h2");
       let itemName = document.createElement("input");
       let addButton = document.createElement("button");
       let closeButton = document.createElement("button");
       
       addNewItem.appendChild(h2);
       addNewItem.appendChild(boxName);
       addNewItem.appendChild(itemName);
       addNewItem.appendChild(addButton);
       addNewItem.appendChild(closeButton);

      //class name for styling
       addNewItem.classList.add('addNewItemBox'); //class
       boxName.classList.add("boxname");
       itemName.classList.add("itemnamelist");
       addButton.classList.add("addlistitem");

    //    let boxNameClass = document.getElementById
    

       addNewItem.addEventListener('click',function()
       {
        addNewItem.classList.add('addNewItemBox');
        // boxname.innerText = "Add New Item";
        boxName.innerText = "Add New Item";
        itemList .innerText = itemName.value; //item in list of trip
        addButton.innerText = "additem";
        closeButton.innerText = "close";
        
       }
       );
       /*
        itemList .innerText = itemName.value; //item in list of trip
        addButton.innerText = "additem";
        closeButton.innerText = "close";
       */
      /*
        addButton.addEventListener('click',function()
        {
            addNewItem.remove("hide");
        });

        closeButton.addEventListener('click',function()
        {
            itemList.add("hide");
        });
    }
    )
    
//}*/
