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
        <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
        // 4.appended the element
        categoryContainer.append(categoryDiv);
    }
}

// video section
function loadVideos() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response => response.json())
    .then(data => displayVideos(data.videos))
}

// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = ""
        // no video part
    if (videos.length == 0) {
      videoContainer.innerHTML = `
       <div class="py-20 col-span-full flex flex-col justify-center items-center text-center">
            <img class="w-[120px]" src="images/Icon.png" alt="">
            <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
        </div>`;
        return;
    }
    videos.forEach(video => {
        console.log(video);

        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
        
        <div class="card bg-base-100">
            <figure class="relative">
              <img class="w-full h-[250px] object-cover"
                src="${video.thumbnail}" />
                <span class="absolute bottom-1 right-1 text-white bg-black px-1 text-sm rounded">3hrs 56 min ago</span>
            </figure>
            <div class="flex gap-3 px-0 py-5">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                          <img src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                </div>
                <div class="intro">
                    <h2 class="text-sm font-bold">Midnight Serenade</h2>
                    <p class="text-sm text-gray-600 flex gap-1">${video.authors[0].profile_name}<img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt=""></p>
                    <p class="text-sm text-gray-600">${video.others.views}</p>
                </div>
            </div>
          </div>

        `
        videoContainer.append(videoCard)
    });
}

// categoryVideos section
const loadCategoryVideos = (id) => {
    const url= `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => {
        const clickedButton = document.getElementById(`btn-${id}`)
        clickedButton.classList.add("active");
        console.log(clickedButton);
        displayVideos(data.category)
    });
}

// loadVideos();

loadCategories()