let body = document.querySelector("body")
let container = document.createElement("div")
let wheel = document.createElement("div")
let spin = document.createElement("div")
let input = document.createElement("textarea")
let button = document.createElement("button")

let alertcontainer = document.createElement("div")
let alert = document.createElement('div')
let alerttop = document.createElement('div')
let alertmiddle = document.createElement('div')
let alertbtm = document.createElement("div")

container.className = "container"
wheel.className = "wheel"
spin.className = "spin"
input.className = "input"

alertcontainer.className = "alertcontainer"
alert.className = "alert"
alerttop.className = "alerttop"
alertbtm.className = "alertbtm"

body.appendChild(container)
container.appendChild(wheel)
container.appendChild(input)
container.appendChild(button)
wheel.appendChild(spin)

body.appendChild(alertcontainer)
alertcontainer.appendChild(alert)
alert.appendChild(alerttop)
alert.appendChild(alertbtm)

body.style.margin = "0"

button.innerText = "get names"

alerttop.innerText = "We have a winner!"
alert.style.width = "640px"
alert.style.height = "200px"
alert.style.borderRadius = "15px"
alert.style.backgroundColor = "red"

alerttop.style.height = "64px"
alertmiddle.style.height = "85px"
alertmiddle.style.backgroundColor = "white"

spin.style.display = "flex"
spin.style.justifyContent = "center"
spin.style.alignitems = "center"
spin.style.backgroundColor = "white"
spin.style.borderRadius = "50%"
spin.innerText = "start"
spin.style.width = "100px"
spin.style.height = "100px"

container.style.display = "flex"
container.style.justifyContent = "space-around"
container.style.alignContent = "center"

wheel.style.width = "500px"
wheel.style.height = "500px"
wheel.style.display = "flex"
wheel.style.justifyContent = "center"
wheel.style.alignItems = "center"
wheel.style.borderRadius = '50%'
wheel.style.background = `conic-gradient(red 0deg, red 90deg, yellow 90deg, yellow 180deg, green 180deg, green 270deg, blue 270deg)`
let conicValue = "red 90deg, yellow 90deg, yellow 180deg, green 180deg, green 270deg, blue 270deg"

let deg = 0

let colors = ["red", "blue", "green", "yellow", "aqua" ]
let items = []

function draw() {
    let result = ""
for (let a = 0; a < items.length; a++) {
    let colorindex = a
    let deg = Math.floor(360 / items.length)

    if(a === items.length -1){
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
      wheel.style.background = `conic-gradient(${result})`
} 

function rotateWheel() {
    deg = deg + 1440 + Math.random() * 360
    wheel.style.transform = `rotate(${deg}deg)`
}
function getItems() {
    let text = input.value
    items = text.split("\n")
    draw()
}

spin.onclick = rotateWheel
button.onclick = getItems