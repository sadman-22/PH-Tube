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
    videos.forEach(video => {
        console.log(video);

        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
        
        <div class="card bg-base-100">
            <figure class="relative">
              <img
                src="${video.thumbnail}" />
                <span class="absolute bottom-1 right-1 text-white bg-black px-1 text-sm rounded">3hrs 56 min ago</span>
            </figure>
            <div class="flex gap-3 px-0 py-5">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                      </div>
                </div>
                <div class="intro">
                    <h2 class="text-sm font-bold">Midnight Serenade</h2>
                    <p class="text-sm text-gray-600 flex gap-1">Awlad Hossain <img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt=""></p>
                    <p class="text-sm text-gray-600">91K views</p>
                </div>
            </div>
          </div>

        `
        videoContainer.append(videoCard)
    });
}

loadVideos();