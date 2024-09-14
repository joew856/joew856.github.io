document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorall("img");

    for(const image of images){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(Response => Response.json())
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;
        })
   
    
    }


})