const searchFood = () =>{
    const searchfeld =document.getElementById('search-feld');
    const searchText =searchfeld.value;
    //  clear searchText);
    searchfeld.value ='';
    //lode data 
    if(searchText == ''){
        // console.log('no result');
    }else{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals)) 
    }
    
}
const displaySearchResult = meals => {
    // console.log(meals);
    const searchResul = document.getElementById('search-resul');
        searchResul.textContent ='';
        /* if(meals.length == 0){
            console.log('no result');
        } */
    meals .forEach(meal => {
        // console.log(meal);
        const div =document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <div onclick="lodeMealDetels(${meal.idMeal})" class="card h-100">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
              </div>
            </div>
        `;
        searchResul.appendChild(div)
    }); 
}

const lodeMealDetels = mealId =>{
    // console.log(mealId);
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displyMealDeteal(data.meals[0]))
}
const displyMealDeteal = meal => {
    console.log(meal);
    const mealdetails =document.getElementById('meal-details');
    const div =document.createElement('div')
    div.classList.add('card')
    div.innerHTML =`
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
         <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
         </div>
    `
    mealdetails.append(div);
}
