const about = document.getElementById("index_about");
const grimoire = document.getElementById("index_grimoire");
const download = document.getElementById("index_download");


about.addEventListener('click', function(e){
    console.log("about");
    window.location.href = "/about";
})


grimoire.addEventListener('click', function(e){
    // console.log("hey");
    window.location.href = "/grimoire";
})

download.addEventListener('click', function(e){
    console.log("download");
    window.location.href = "/download";
})
