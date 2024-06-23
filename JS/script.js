
let yes = document.getElementById("sim"),
    no = document.getElementById("nao"),
    gu = document.getElementById("gu"),
    i = 0

yes.addEventListener("mouseenter", ()=> {yes.style.backgroundColor = "rgb(102, 33, 167)"})
yes.addEventListener("mouseleave", () => {yes.style.backgroundColor = "blueviolet"})

yes.addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=-7NpcbkyrEY", "_blank")
})

function marginChange(mT, mL) {
    no.style.marginTop = `${mT}px`
    no.style.marginLeft = `${mL}px`
    i += 1
}


no.addEventListener("mouseenter", () => {
    
    if(i == 0){
        marginChange(100, 50)
    }

    else if(i == 1){
        marginChange(250, 80)
    }

    else if(i == 2){
        marginChange(-200, 150)
    }

    else if(i == 3){
        marginChange(200, -350)
    }

    else if(i == 4) {
        marginChange(410, 150)
    }

    else if(i == 5) {
        marginChange(350, -160)
    }

    else if(i == 6) {
        marginChange(200, 400)
    }

    else if(i == 7) {
        marginChange(200, -500)
    }

    else if(i == 8) {
        marginChange(100, -800)
    }

    else {
        marginChange(250, -1100)
        i = 0
    }
})