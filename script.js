let currentImages = [];
let currentIndex = 0;

function openModal(name, images, birth, nation, position, fact){
  currentImages = images;
  currentIndex = 0;

  document.getElementById("memberModal").style.display = "flex";
  document.getElementById("modalName").innerText = name;
  document.getElementById("modalImage").src = currentImages[currentIndex];
  document.getElementById("modalBirth").innerText = birth;
  document.getElementById("modalNation").innerText = nation;
  document.getElementById("modalPosition").innerText = position;
  document.getElementById("modalFact").innerText = fact;
}

function nextImage(){
  currentIndex++;

  if(currentIndex >= currentImages.length){
    currentIndex = 0;
  }

  document.getElementById("modalImage").src = currentImages[currentIndex];
}

function prevImage(){
  currentIndex--;

  if(currentIndex < 0){
    currentIndex = currentImages.length - 1;
  }

  document.getElementById("modalImage").src = currentImages[currentIndex];
}

function closeModal(){
  document.getElementById("memberModal").style.display = "none";
}

/* ALBUM MODAL */

function openAlbum(title, image, producer, tracks){
  document.getElementById("albumModal").style.display = "flex";
  document.getElementById("albumTitle").innerText = title;
  document.getElementById("albumImage").src = image;
  document.getElementById("albumProducer").innerText = producer;
  document.getElementById("albumTracks").innerText = tracks;
}

function closeAlbum(){
  document.getElementById("albumModal").style.display = "none";
}

/* GALLERY MODAL */

function openGallery(imageSrc){
  document.getElementById("galleryModal").style.display = "flex";
  document.getElementById("galleryImage").src = imageSrc;
  document.getElementById("downloadBtn").href = imageSrc;
}

function closeGallery(){
  document.getElementById("galleryModal").style.display = "none";
}


function openNews(title, desc, source, link){
  document.getElementById("newsModal").style.display = "flex";
  document.getElementById("newsTitle").innerText = title;
  document.getElementById("newsDesc").innerText = desc;
  document.getElementById("newsSource").innerText = "Source: " + source;
  document.getElementById("newsLink").href = link;
}

function closeNews(){
  document.getElementById("newsModal").style.display = "none";
}