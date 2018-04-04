function showSearchBarJob() {
    let x = document.getElementById("search_bar1");
    let y = document.getElementById("search_bar2");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    }
    else{
        x.style.display = "none";
        }
}

function showSearchBarDev() {
    let y = document.getElementById("search_bar2");
    let x = document.getElementById("search_bar1");
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
    }
    else{
        y.style.display = "none";
        }
}
