function openImage(image) {

    let popup = document.getElementById("imagePopup");
    let popupImage = document.getElementById("popupImage");

    popup.style.display = "flex";

    popupImage.src = image.src;
}


function closeImage() {

    document.getElementById("imagePopup").style.display = "none";

}
let images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
    "image11.jpg",
    "image12.jpg",
];

let currentIndex = 0;

let galleryImages = document.querySelectorAll(".gallery img");

function openImage(index) {
    currentIndex = index;

    document.getElementById("imagePopup").style.display = "flex";

    document.getElementById("popupImage").src =
        galleryImages[currentIndex].src;
}

function nextImage() {
    currentIndex++;

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    document.getElementById("popupImage").src =
        galleryImages[currentIndex].src;
}

function previousImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }

    document.getElementById("popupImage").src =
        galleryImages[currentIndex].src;
}

function closeImage() {
    document.getElementById("imagePopup").style.display = "none";
}