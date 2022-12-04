let current = 0

let play = false;



addEventListener("keyup", (e) => { clicked(e) })

function next(e) {
    let total = document.getElementsByClassName("box").length
    console.log(total)
    if (e.key === "ArrowRight") {
        current = (current + total + 1) % total;
        changeactive(current)
    }
    else if (e.key === "ArrowLeft") {
        current = (current + total - 1) % total;
        console.log(current)
        changeactive(current)
    }

}

function changeactive(id) {
    document.getElementsByClassName("activeBox")[0].classList.remove("activeBox")
    document.getElementById(id).classList.add("activeBox")

}


function clicked(e) {
    console.log(e.key)
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        next(e);
    }
    if (e.key === "Enter") {
        popup(current);
    }
    if (e.key === "Escape") {
        nopopup();
    }
    if(e.key==="p"){
        playvideo();
    }
}

function popup() {
    let d = document.getElementById('m'+current)
    d.classList.remove("hiden")
    d.classList.add("show")
}

function nopopup() {
    let d = document.getElementsByClassName('show')

    for (let i = 0; i < d.length; i++) {
        let element = d[i];
        element.classList.remove("show")
        element.classList.add("hiden")
    }    
}

function playvideo() {
    if (play===true) {
        document.getElementById("video").pause();
        play= false
    }
    else{
        document.getElementById("video").play();
        play = true

    }
}