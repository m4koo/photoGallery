let images = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10',  'img11', 'img12', 'img13', 'img14', 'img15', 'img16'];

function load() {
    let photos = document.getElementById('photos');
    
    for (let i = 0; i < images.length; i++){
        photos.innerHTML += `
            <img src='img/${images[i]}.jpg' onclick='openPic(${i})'>
        `
    }
}

function openPic(i){
    document.getElementById('photos').innerHTML = '';
    let prev = i-1;
    let next = i+1;
    if (prev < 0){
        prev = images.length-1;
    }
    if(next >= images.length){
        next = 0;
    }
    previewHTML(i, prev, next);
    document.getElementById('imgPreview').setAttribute('onclick', 'closePic(event)')
}

function previewHTML(i, prev, next){
    document.getElementById('imgPreview').innerHTML = `
    <button class="buttons" onclick='openPic(${prev})'><img src='img/chevron_left.svg'></button>
    <img src='img/${images[i]}.jpg' class="img">
    <button class="buttons" onclick='openPic(${next})'><img src='img/chevron_right.svg'></button>
    `
}

function closePic(e){
    let preview = document.getElementById('imgPreview')
    if (e.target.id == "imgPreview"){
        preview.innerHTML = '';
        preview.removeAttribute('onclick')
        load();
    }
}
