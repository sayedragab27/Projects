//CRUD
// Create----ADD
// Read-----RETRIEVE---DISPLAY
// Update-----EDIT
// Delete------REMOVE


//SEARCH
//VALIDATION---REGEX

// Swal.fire({
//   title: "The Internet?",
//   text: "That thing is still around?",
//   icon: "question"
// });

//Add Product
var productNameInput = document.getElementById("productName");
var ProdcutPriceInput = document.getElementById("productPrice");
var ProductCategoryInput = document.getElementById("ProductCategory");
var ProductImageInput = document.getElementById("ProductImage");
var ProductDescriptionInput = document.getElementById("ProductDescription");
var productSearchInput = document.getElementById("productSearch");
var products=document.getElementById("products");
var addBtn=document.getElementById("addBtn");
var updateBtn=document.getElementById("updateBtn");
var notFound=document.getElementById("notFound");
var productList=[];
// localStorage.clear()
if(JSON.parse(localStorage.getItem("allProducts"))){
    
    productList=JSON.parse(localStorage.getItem("allProducts"));
    displayProduct(productList);
}
function addProduct() {
    
    Swal.fire({
    title: "Are you sure to add the product?",
    // text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, add it!"
    }).then((result) => {
    if (result.isConfirmed) {
       
       
    if(validateProduct(productNameInput)&&validateProduct(ProdcutPriceInput)&&validateProduct(ProductCategoryInput)&&validateProduct(ProductImageInput)&&validateProduct(ProductDescriptionInput)){
        var product={
        name:productNameInput.value,
        price:ProdcutPriceInput.value,
        category:ProductCategoryInput.value,
        image:`../images/${ProductImageInput.files[0].name}`,
        description:ProductDescriptionInput.value,
}

    productList.push(product);
    localStorage.setItem("allProducts",JSON.stringify(productList));
    var img=product.image.slice(product.image.lastIndexOf("\\")+1);
    // console.log(img);
    clearData()
    displayMessage("No Products Available")
    displayProduct(productList)


    }
       
       
       
       
       
        Swal.fire({
        title: "The Product is added successfully",
        text: "You can modify or delete the product.",
        icon: "success"
        });
    }
    });



}

function clearData() {
    productNameInput.value="";
    ProdcutPriceInput.value="";
    ProductCategoryInput.value="";
    ProductImageInput.value="";
    ProductDescriptionInput.value="";
}

function displayProduct(list) {
   var blackBox=``
    for (var i = 0; i < list.length; i++) {
        blackBox+=`      
         <div class="col-lg-3 col-md-6">
                    <div class="Product-card card shadow">
                        <figure class="card-img bg-light py-2 px-3 mt-3 d-flex justify-content-center">

                            <img src="${list[i].image}"  alt="Iphone">
                        </figure>
                        <div class="d-flex justify-content-between p-3">
                            <span class="badge text-bg-primary">${list[i].category}</span>
                            <span class="text-danger">${list[i].price} EGP</span>
                        </div>
                        <div class="card-body p-3">
                            <h5 class="card-title">${list[i].hightlightedName ? list[i].hightlightedName : list[i].name}</h5>
                            <p class="card-text">${list[i].description}</p>
                        </div>
                        <div class="d-flex justify-content-between p-3">
                            <button class="btn btn-outline-warning" id="editBtn" onclick="editProduct(${i})" data-index="${i}"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="btn btn-outline-danger" onclick="deleteProduct(${i})"><i class="fa-solid fa-trash"></i></button>
                        </div>

                    </div>
                </div>      
        
        `

    }
    products.innerHTML=blackBox;
}

function deleteProduct(index){
    Swal.fire({
        title: `Do you want to Delete the product "${productList[index].name}"?`,
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Delete",
        showConfirmButton: true,
        confirmButtonColor:"red",

        // popup: 'swal2-show',
        // backdrop: 'swal2-backdrop-show',
        //  icon: 'success',
        //  footer: '<a href>Why do I have this issue?</a>'
        // toast: true
}).then((result) => {
    console.log('result: ', result);
  if (result.isConfirmed) {
        productList.splice(index,1);
        localStorage.setItem("allProducts",JSON.stringify(productList));
        displayMessage("No Products Available")
         displayProduct(productList);
    Swal.fire("the product is deleted Well", "", "success");
  } 
  
});



//     productList.splice(index,1);
//    localStorage.setItem("allProducts",JSON.stringify(productList));
//     displayProduct(productList);
}   


function editProduct(editIdx){
    // updateIndx=editIdx;
//   console.log("editIdx",editIdx);
//   console.log(productList[editIdx].description);
productNameInput.value=productList[editIdx].name;
ProdcutPriceInput.value=productList[editIdx].price;
ProductCategoryInput.value=productList[editIdx].category;
// ProductImageInput.files[0].name=productList[editIdx].image.slice(productList[editIdx].image.lastIndexOf("\\")+1);
ProductDescriptionInput.value=productList[editIdx].description;
addBtn.classList.add("d-none");
updateBtn.classList.remove("d-none");

updateBtn.setAttribute("indx",editIdx);
    // var updateIndx=updateBtn.getAttribute("indx");
    // console.log('updateIndx: ', updateIndx);

}


function updateProduct(){

 Swal.fire({
    title: "Are you sure to update the product?",
    // text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, update it!"
    }).then((result) => {
    if (result.isConfirmed) {
        
        if(validateProduct(productNameInput)&&validateProduct(ProdcutPriceInput)&&validateProduct(ProductCategoryInput)&&validateProduct(ProductImageInput)&&validateProduct(ProductDescriptionInput)){
            var updateIndx=updateBtn.getAttribute("indx");
            // console.log('updateIndx: ', updateIndx);
            productList[updateIndx].name=productNameInput.value;
            productList[updateIndx].price=ProdcutPriceInput.value;
            productList[updateIndx].category=ProductCategoryInput.value;
            productList[updateIndx].image=`../images/${ProductImageInput.files[0].name}`;
            productList[updateIndx].description=ProductDescriptionInput.value;
            localStorage.setItem("allProducts",JSON.stringify(productList));
            displayProduct(productList);    
            clearData()
            addBtn.classList.remove("d-none");
            updateBtn.classList.add("d-none");
            
        } 
        Swal.fire({
        title: "The Product is updated successfully",
        text: "You can modify or delete the product.",
        icon: "success"
        });
    }
    });




}

function searchProduct(element){
    var matchList=[]
    for(var i=0;i<productList.length;i++){
       
        if(productList[i].name.toLowerCase().includes(element.value.toLowerCase())){
        productList[i].hightlightedName=productList[i].name.toLowerCase().replaceAll(element.value.toLowerCase(),`<span class='text-danger'>${element.value.toLowerCase()}</span>`);
        // productList[i].hightlightedName.charAt(0).toUpperCase();
        // console.log('productList[i].hightlightedName: ', productList[i].hightlightedName);
        
        
        // console.log('productList[i].name: ', productList[i].name);
        matchList.push(productList[i]);
        }
      
    }
    if(element.value==""){

        displayMessage("No Products Available")
    }
    else{
        displayMessage("No Products Found")
    }
    // console.log(matchList);
    displayProduct(matchList)

}

function validateProduct(element){
    console.log('element: ', element);

var regex={
    productName:/^[A-Z][a-z]{2,14}$/,
    productPrice:/^([6-9][0-9]{3}|([1-5][0-9]{4}|60000))$/,
    ProductCategory:/^(Phones|Screens|Watches|Airpods)$/,
    ProductDescription:/^\w{4,255}$/,
    ProductImage:/\.(jpg|jpeg|png|jfif|webp){1}$/i
}
    var isValid=regex[element.id].test(element.value);
    console.log('isValid: ', isValid);
    if(isValid){
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        element.nextElementSibling.classList.replace("d-block","d-none");

    }else{
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        element.nextElementSibling.classList.replace("d-none","d-block");
        addBtn.setAttribute("disabled","");
        updateBtn.setAttribute("disabled","");

    };
    var validateParams={
        productName:regex.productName.test(productNameInput.value),
        productPrice:regex.productPrice.test(ProdcutPriceInput.value),
        ProductCategory:regex.ProductCategory.test(ProductCategoryInput.value),
        ProductDescription:regex.ProductDescription.test(ProductDescriptionInput.value),
        ProductImage:regex.ProductImage.test(ProductImageInput.value)
    
    };

    if(validateParams.productName && validateParams.productPrice && validateParams.ProductCategory && validateParams.ProductDescription && validateParams.ProductImage){
    addBtn.removeAttribute("disabled");
    updateBtn.removeAttribute("disabled");
    }

return isValid
}

function displayMessage(message){   
if (productList.length==0) {
    notFound.innerHTML=message;
  notFound.classList.remove("d-none");
   }
else{
    notFound.classList.add("d-none");
}
}


window.onload =displayMessage("No Products Available");