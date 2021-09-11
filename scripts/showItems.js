
async function getItem(url){
  try{
      let res=await fetch(url)
        let items=await res.json();
        return items
  }
  catch (err) {
    console.log("err:", err);
}
}



function appendFoodItems(items, parent) {
  let products = items.meals
  products.forEach(({strMealThumb, strMeal }) => {
   let div=document.createElement("div");
   let title = document.createElement("p");

   let img = document.createElement("img");

   img.src= strMealThumb;
   title.innerText=strMeal;
 

div.append(img,title)
parent.append(div)
  })
}


export{ getItem,appendFoodItems}
