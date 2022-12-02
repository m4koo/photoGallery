let images = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10'];

function load() {
    let photos = document.getElementById('photos');
    
    for (let i = 0; i < images.length; i++){
        photos.innerHTML += `
            <img src='img/${images[i]}.jpg' onclick='openPic(${i})'>
        `
    }
}


function openPic(i){
    document.getElementById('photoContent').innerHTML = '';
    let prev = i-1;
    let next = i+1;
    if (prev < 0){
        prev = images.length-1;
    }
    if(next >= images.length){
        next = 0;
    }

    document.getElementById('imgPreview').innerHTML = `
    <button onclick='openPic(${prev})'><</button>
    <img src='img/${images[i]}.jpg'>
    <button onclick='openPic(${next})'>></button>
    `
    bgClose();
}

function bgClose(){
    let bg = document.getElementById('bg');
    bg.setAttribute('onclick', 'test()');
}

function closePic(){
    // document.getElementById('imgPreview').innerHTML = '';
    // load();

}

function test(){
    // document.getElementById('bg').style.backgroundColor = '#FF0000'
}