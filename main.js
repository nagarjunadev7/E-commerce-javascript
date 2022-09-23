// let mycard = document.querySelector(".card-img-top");
// let mytitle = document.querySelector(".card-title");
// let mytext = document.querySelector(".card-text");
let mydata = document.querySelector(".myshow");
let myproduct = document.querySelector(".show_product");
let mybadge = document.querySelector(".badge");
let mycartViewer = document.querySelector(".cartViewer");
let newData = [];
let newCart = [];
let result="";
let output="";
let data;
let myview="";
fetch('ProductsList.json').then(function(response){
    data = response.json();
    return data;
}).then(function(data){
    displayProducts(data);
})
function displayProducts(data){
  newData.push(data.productList)
  for(let i=0;i<data.productList.length;i++){
    result +=`<div class="card" style="width: 18rem;">
             <img class="card-img-top" src="${newData[0][i].img}.png" alt="Card image cap">
             <div class="card-body">
             <h5 class= "card-title">${newData[0][i].title}</h5>
             <h5 class= "card-title">Price Rs : ${newData[0][i].Price}</h5>
             <p class="card-text">${newData[0][i].des}</p>
             <a onclick="addItem('${newData[0][i].id}')" id = "add" class="btn btn-primary">Add Cart</a>
             <button type="button" onclick="displayItem('${newData[0][i].id}')" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
             View Product
             </button>
            </div>
            </div>`
            mydata.innerHTML = result;
    }
}

function displayItem(value){
  const filtervalue = newData[0].filter(e=>{
    return e.id.includes(value)  
})

output+= `<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle"> ${filtervalue[0].title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="row">
      <div class="col">
      <img class="card-img-top" src="${filtervalue[0].img}.png" alt="Card image cap">
      </div>
      <div class="col">
      Product Description :
      <p class="card-text-2">${filtervalue[0].des}</p>
      <p class= "card-title">Price Rs : ${filtervalue[0].Price}</p>
      </div>
      </div>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <a onclick="addItem('${filtervalue[0].id}')" class="btn btn-primary">Add Cart</a>
      </div>
    </div>
  </div>
</div>`
myproduct.innerHTML = output;
output="";
}

function addItem(index){
  const myvalue = newData[0].filter(e=>{
    return e.id.includes(index)  
})

newCart.push(myvalue[0]);
mybadge.innerHTML = newCart.length;
}

function showCart(newCart){
  for(let j=0;j<newCart.length;j++){
   myview +=`<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="exampleModalLongTitle">Your Cart Items </h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
       <div class="viewCart">
         <img src="${newCart[j].img}.png">
         ${newCart[j].title}
         ${newCart[j].Price}
        </div>
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       </div>
     </div>
   </div>
 </div>`;
  }
  mycartViewer.innerHTML = myview;
}



