let container = document.createElement("div")
let wheel = document.createElement("div")
let body = document.querySelector("body")


container.className = "container"
wheel.className = "wheel"

body.appendChild(container)
container.appendChild(wheel)

body.style.margin = "0"

wheel.innerText = "spin"
wheel.style.width = "100px"
wheel.style.height = "100px"
wheel.style.display = "flex"
wheel.style.justifyContent = 'center'
wheel.style.backgroundColor = 'white'
wheel.style.borderRadius = '50%'

container.style.width = "500px"
container.style.height = "500px"
container.style.display = "flex"
container.style.justifyContent = "center"
container.style.alignItems = "center"
container.style.borderRadius = '50%'
container.style.background = `conic-gradient(red 0deg, red 90deg, yellow 90deg, yellow 180deg, green 180deg, green 270deg, blue 270deg)`
let conicValue = "red 90deg, yellow 90deg, yellow 180deg, green 180deg, green 270deg, blue 270deg"

let colors = ["red", "blue", "green", "yellow" ]
let items = ["1", "2", "3", "4" ]
let result = ""

for (let a = 0; a < items.length; a++) {
    let colorindex = a
    let deg = Math.floor(360 / items.length)

    if(colorindex === items.length -1){
        colorindex = colorindex - colors.length * Math.floor( a / colors.length) + 1
    } else if(colorindex >= colors.length){
        colorindex = colorindex - colors.length * Math.floor(a / colors.length)
    }
    result = result + `${colors[colorindex]}`
    if (a = items.length -1 ){
        result = result + `${deg * 1}deg ${deg * (a + 1)}deg`
    } else {
        result = result + `${deg * 1}deg ${deg * (a + 1)}deg`
    }

}

    container.style.background = `conic-gradient(${result})`

function rotateWheel() {
    deg = deg + 1440 + Math.random() * 360
    wheel.style.transform = `rotate(${deg}deg)`
    wheel.style.transform = `rotate(30deg)`
}


