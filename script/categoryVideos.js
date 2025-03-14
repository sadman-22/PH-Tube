const loadCategoryVideos = (id) => {
    const url= `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displayVideos(data.category))
}