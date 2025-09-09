let cartHistory=[]
let totalPrice=0
// history related function
const addCart = (plant) => {
  cartHistory.push(plant);
  totalPrice =totalPrice+plant.price;
  displayCart();
};

const displayCart = () => {
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = '';

  cartHistory.forEach((item, index) => {
    const div = document.createElement('div');
    div.innerHTML =`
    <div  class="flex items-center justify-between  rounded-lg p-2">
                <div>
                  <p>${item.name}</p>
                  <p>৳${item.price}</p>
                </div>
                <button onclick="removeFromCart(${index})">
                  <i class="fa-solid fa-xmark text-red-500 cursor-pointer"></i>
                </button>
      </div>
    `
    cartContainer.appendChild(div);
  })
   document.getElementById('cart-total').innerText = `Total: ৳${totalPrice}`;
};

const removeFromCart = (index) => {
  
  totalPrice -= cartHistory[index].price;

  cartHistory.splice(index, 1);

  displayCart();
};




// all categories related functionality
const allCategories=()=>{
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories))
}
const displayCategories=(categories)=>{
    // 1.get the container and empty
    const categoryContainer=document.getElementById('category-container')
    categoryContainer.innerHTML=''
    // 2.get into every categories
    for(let category of categories){
        // console.log(category)
        // 3.create element
        const div=document.createElement('div')
        div.innerHTML=`
        <ul>
            <li id="link-${category.id}" onClick="categoriesNames(${category.id})" class="text-[16px] link-btn hover:bg-[#15803D] rounded-md cursor-pointer"><a>${category.category_name}</a></li>
        </ul>
        `
    // 4.append container
    categoryContainer.appendChild(div)
    }
    
}
allCategories()

// all plants related functionality
const allPlants=()=>{
    
    const url='https://openapi.programming-hero.com/api/plants'
    fetch(url)
    .then(res=>res.json())
    .then(plants=>plantsDisplay(plants.plants))
}

const plantsDisplay=(plants)=>{
const plantContainer=document.getElementById('plant-container')
  plantContainer.innerHTML=''
 for (let plant of plants){
    const card=document.createElement('div')
    card.innerHTML=`
    <div class=" p-3 gap-4 bg-sky-50 flex flex-col shadow-md justify-between h-full ">
                <div>
                  <img class="w-full h-60 object-cover rounded-md" src="${plant.image}" alt="">
                </div>
                <div class="flex-1">
                  <h1 onclick="plantsDetails(${plant.id})" class="font-semibold mb-3 hover:bg-lime-600 cursor-pointer">${plant.name}</h1>
                  <p class="text-left text-[12px]">${plant.description}</p>
                </div>
                <div class="flex items-center justify-between mt-3">
                  <p  class="bg-[#DCFCE7] p-2 rounded-md hover:bg-lime-600 cursor-pointer">${plant.category}</p>
                  <p>৳${plant.price}</p>
                </div>
                <div>
                  <button onclick='addCart(${JSON.stringify(plant)})' class="bg-[#15803D] rounded-lg w-full py-2">Add to Cart</button>
                </div>

              </div>
    
    `

    plantContainer.appendChild(card)
 }

}
allPlants()
// category selected related functionality
const removeActive=()=>{
  const linkBtn=document.querySelectorAll('.link-btn')
  // console.log(linkBtn)
  linkBtn.forEach((btn)=>btn.classList.remove('active'))
}
// Plants details related functionality
const plantsDetails=async(id)=>{
  const url=`https://openapi.programming-hero.com/api/plant/${id}`
  // console.log(url)
  const res=await fetch(url)
  const plants=await res.json()
  displayPlantsDetails(plants.plants)
}





const displayPlantsDetails=(details)=>{
  console.log(details)
  const detailsContainer=document.getElementById('details-container')
   detailsContainer.innerHTML=`
    <div class=" flex flex-col items-start justify-start p-2 space-y-3">
            <div>
              <h3 class="font-bold text-[22px]">${details.name}</h3>
            </div>
            <div>
              <img src="${details.image}" alt="">
            </div>
            <div>
              <p class="mt-2"><span class="font-semibold text-[16px]">category:</span>${details.category}</p>
              <p class="mt-2"><span class="font-semibold text-[16px]">price:</span>৳${details.price}</p>
              <p class="mt-2"><span class="font-semibold text-[16px]">Description:</span>${details.description}</p>
            </div>
        </div>
   `
  document.getElementById("plants_modal").showModal()
}
// spinner related functionality

const manageSpinner=(status)=>{
  if(status==true){
    document.getElementById('spinner').classList.remove('hidden')
    document.getElementById('category-container').classList.add('hidden')
  }
  else{
      document.getElementById('category-container').classList.remove('hidden')
      document.getElementById('spinner').classList.add('hidden')
  }
}


// plants by category related functionality
const categoriesNames=(id)=>{
    manageSpinner(true)
     const url=`https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
     .then(res=>res.json())
     .then(data=>{
      plantsCategories(data.plants)
      removeActive();
      const link=document.getElementById(`link-${id}`)
      link.classList.add('active')
     })
 } 
const plantsCategories=(plants)=>{
  const plantContainer=document.getElementById('plant-container')
  plantContainer.innerHTML=''
 for (let plant of plants){
    const card=document.createElement('div')
    card.innerHTML=`
    <div class=" p-3 gap-4 bg-sky-50 flex flex-col shadow-md justify-between h-full ">
                <div>
                  <img class="w-full h-60 object-cover rounded-md" src="${plant.image}" alt="">
                </div>
                <div class="flex-1">
                  <h1 class="font-semibold mb-3">${plant.name}</h1>
                  <p class="text-left text-[12px]">${plant.description}</p>
                </div>
                <div class="flex items-center justify-between mt-3">
                  <p onclick="plantsDetails(${plant.id})" class="bg-[#DCFCE7] p-2 hover:bg-lime-600 cursor-pointer rounded-md">${plant.category}</p>
                  <p>৳${plant.price}</p>
                </div>
                <div>
                  <button class="bg-[#15803D] rounded-lg w-full py-2">Add to Cart</button>
                </div>

              </div>
    
    `

    plantContainer.appendChild(card)
 }
 manageSpinner(false)
}
//  plantsCategories()
 allPlants()