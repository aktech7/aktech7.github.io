document.addEventListener("DOMContentLoaded", () => {

const images = document.querySelectorAll("img");

for(const image of images){
    fetch("https://www.doctorswithoutborders.org/sites/default/files/styles/crop_article_desktop_1238_529/public/image_base_media/2023/04/MSB150120.jpg?h=2a75e625&itok=BStzJTX-")
    .then(response => response.json())
    .then(data => {
        image.src = data.message
        image.width = 150;
        image.height = 150;
    })
}

})