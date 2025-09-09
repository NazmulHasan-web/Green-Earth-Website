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
            <li onClick="categoriesNames(${category.id})" class="text-[16px] hover:bg-[#15803D] rounded-md"><a>${category.category_name}</a></li>
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
                  <h1 class="font-semibold mb-3">${plant.name}</h1>
                  <p class="text-left text-[12px]">${plant.description}</p>
                </div>
                <div class="flex items-center justify-between mt-3">
                  <p class="bg-[#DCFCE7] p-2 rounded-md">${plant.category}</p>
                  <p>৳${plant.price}</p>
                </div>
                <div>
                  <button class="bg-[#15803D] rounded-lg w-full py-2">Add to Cart</button>
                </div>

              </div>
    
    `

    plantContainer.appendChild(card)
 }
}
allPlants()


// plants by category related functionality
const categoriesNames=(id)=>{
    
     const url=`https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
     .then(res=>res.json())
     .then(data=>plantsCategories(data.plants))
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
                  <p class="bg-[#DCFCE7] p-2 rounded-md">${plant.category}</p>
                  <p>৳${plant.price}</p>
                </div>
                <div>
                  <button class="bg-[#15803D] rounded-lg w-full py-2">Add to Cart</button>
                </div>

              </div>
    
    `

    plantContainer.appendChild(card)
 }
}
 plantsCategories()