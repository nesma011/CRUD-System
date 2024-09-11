
var NameInput = document.getElementById("ProductName");
var PriceInput = document.getElementById("ProductPrice");
var CategoryInput = document.getElementById("ProductCategory");
var descriptionInput = document.getElementById("description");
var search =document.getElementById("searchProduct");
var addButton =document.getElementById("btnAdd");
var updateButton =document.getElementById("btnUpdate");

var productList=[];

if (localStorage.getItem("products") !=null) {
    productList= JSON.parse(localStorage.getItem("products"));
    displayProduct();
}

function addProduct() {
    var products ={
        Name : NameInput.value ,
        price : PriceInput.value ,
        category :CategoryInput.value,
        description :descriptionInput.value,
        image :"../mobile.webp"
    }
    productList.push(products);
   
    localStorage.setItem("products", JSON.stringify(productList));
   
    displayProduct();
    clearInputs() ;

    
    
}



function clearInputs() {
    NameInput.value =null;
    PriceInput.value=null;
    CategoryInput.value=null;
    descriptionInput.value=null;
}


function displayProduct() {
    var cartona= ``
    for (let i = 0; i < productList.length; i++) {
       cartona +=
       ` 
        <tr>
         <td>${[i+1]}</td>
          <td>${productList[i].Name}</td>
          <td>${productList[i].price}</td>
          <td>${productList[i].category}</td>
          <td>${productList[i].description}</td>
         <td> <button class="btn btn-danger" onclick="deleteProduct(${i})"> delete</button> </td>
         <td> <button class="btn btn-warning" onclick="setValuesUpdate(${i})"> update</button> </td>

        </tr>
     `
        
    }
    document.getElementById("data").innerHTML = cartona;
}


var indexUpdate;


function setValuesUpdate(index) {
    indexUpdate =index;
    NameInput.value=productList[index].Name;
    PriceInput.value=productList[index].price;
    CategoryInput.value=productList[index].category;
    descriptionInput.value=productList[index].description;


    addButton.classList.add("d-none");
    updateButton.classList.remove("d-none")
}

function updateProduct()
{
    productList[indexUpdate].Name=NameInput.value;
    productList[indexUpdate].price= PriceInput.value;
    productList[indexUpdate].category= CategoryInput.value;
    productList[indexUpdate].description=descriptionInput.value;

    localStorage.setItem("products", JSON.stringify(productList));
    addButton.classList.remove("d-none");
    updateButton.classList.add("d-none")

    displayProduct();
    clearInputs();
}

function deleteProduct(i) {
    productList.splice(i,1);
    localStorage.setItem("products", JSON.stringify(productList))
    displayProduct();
}

function searchPro() {
    var cartona=``;
    var term =search.value;

    for (let i = 0; i < productList.length; i++) {
        if (productList[i].Name.toLowerCase().includes(term.toLowerCase())==true)
             {
                cartona +=
       ` 
        <tr>
         <td>${[i+1]}</td>
          <td>${productList[i].Name}</td>
          <td>${productList[i].price}</td>
          <td>${productList[i].category}</td>
          <td>${productList[i].description}</td>
         <td> <button class="btn btn-danger" onclick="deleteProduct(${i})"> delete</button> </td>
         <td> <button class="btn btn-warning" onclick=""> update</button> </td>

        </tr>
     `
        }
        
    }
    document.getElementById("data").innerHTML = cartona;
}





