
function navbar() {
    return `
        <div id="navbar">
            <h3><a class="latest" href="home.html">Home</a></h3>
            <div class="search">
                <input type="text" id="searchFood" placeholder="Search the food items" />
                <button id="search">Search</button>
            </div>
            <div class="menu">
                <h3><a class="latest" href="latest.html">Latest Recipes</a></h3>
                <h3><a class="latest" href="recipe.html">Get Recipe of the Day</a></h3>
            </div>
        </div>
        
        <div id="data"></div>
        
        `
}

export default navbar;