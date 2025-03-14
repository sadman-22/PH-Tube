console.log("index is connected");

const loadCategories = () => {
    // console.log("category is loading") 
    // 1 fetch tha data 
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    // convert to json
    .then(res => res.json())
    // send data to display
    .then(data => displayCategories(data.categories));
}

// {
//     "category_id": "1001",
//     "category": "Music"
// }

const displayCategories = (categories) => {
    // 1.get the container
    const categoryContainer = document.getElementById("category-container");
    //2.loop operation on Array of object
    for (let cat of categories) {
        // console.log(cat);
        // 3.create element
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <button onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
        // 4.appended the element
        categoryContainer.append(categoryDiv);
    }
}

loadCategories()