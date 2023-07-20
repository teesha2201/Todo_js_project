let addItem = document.getElementById("popupbox")
let cardContainer = document.getElementById("container")
let newCardName =document.getElementById("cardname")
let pTag = document.getElementById("ptag")
let blurBack = document.getElementById("backgroundblur")
console.log(newCardName.parentNode);


/* page 4 doc*/
let listItem = document.getElementById("itempopupbox")
let newItemName = document.getElementById("itemnameincard")
let addListItem = document.getElementById("addlist")
let closeItem = document.getElementById("closeitem")

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
const createcard2 = document.getElementById("cardnew2") 
function addCard()
{
    
    cardId++;
    let createCard = document.createElement("div");
    let hrLine = document.createElement("hr")
    let cardName = document.createElement("h2")
    let divstore = document.createElement("div")
    let itemList = document.createElement("h4");
    let markdone = document.createElement("button")
    let deleteButton = document.createElement("button");
    let itemAdd = document.createElement("button");

    createCard.setAttribute("id",cardId)
    createCard.appendChild(cardName);
    createCard.append(hrLine);
    createCard.appendChild(itemList);
    createCard.appendChild(markdone);
    createCard.appendChild(deleteButton);
    createCard.appendChild(itemAdd);
    cardContainer.appendChild(createCard);

    divstore.appendChild(itemList);
    divstore.appendChild(markdone);
   
    createCard.classList.add("card")
    pTag.style.display = "none";



    cardName.innerText = newCardName.value;
   
    //for this eventlistener needed
    newCardName.value="";
   

    /*styling for card : inside cardcantainer */
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

    itemAdd.addEventListener('click',function()
    { 
        listItem.style.display = "block";  
    }
    )
    addListItem.addEventListener('click',function()
    {
        itemList.innerText =  newItemName.value;
    }
)
}