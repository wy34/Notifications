// Click album 

// Show user he selected album so we add a class selected to the album div

// Create an array and then add the album's title we selected to that array

// Find out the total of the albums selected

// Save button is clicked then when its clicked show notification with saved items total





let notify = document.querySelector(".notify");
let albums = document.querySelectorAll(".album");
let itemsTotal = document.querySelector(".items-total");
let savedBtn = document.querySelector(".button");

let albumSelected = [];
let i = 0;
while (i < albums.length) {
    albums[i].addEventListener("click", function() {
        let albumTitle = this.querySelector(".title").textContent;
        if (!this.getAttribute("class").includes("selected")) {
            this.classList.add("selected")
            albumSelected.push(albumTitle);
            console.log(albumSelected)
        } else {
            this.classList.remove("selected");
            // let removeIndex = albumSelected.indexOf(albumTitle)
            // albumSelected.splice(removeIndex, 1);
            albumSelected = albumSelected.filter(album => {
                return album !== albumTitle;
            })
            console.log(albumSelected)
        }
    });
    i++;
}


savedBtn.addEventListener("click", function() {
    notify.classList.add("active");
    itemsTotal.textContent = `${albumSelected.length} items saved`
    setTimeout(() => {
       notify.classList.remove("active") 
    }, 2000);
})