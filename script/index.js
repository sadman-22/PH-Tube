console.log("index is connected");

const loadCategories = () => {
    // console.log("category is loading") 
    // fetch 
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
}

const displayCategories = (categories) => {
    console.log(categories);
}

loadCategories()