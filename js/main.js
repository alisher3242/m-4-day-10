import database from "./Database.js"
import render from "./render.js"
let forma = document.querySelector(".forma")
let ismi = document.getElementById("ismi")
let familiyasi = document.getElementById("familiyasi")
let guruhi = document.getElementById("guruhi")
let jinsi = document.getElementById("jinsi")
let tbody = document.getElementById("tbody")
console.log(familiyasi);
let storage = window.localStorage
let dataUntill = storage.getItem("data")
let data = [];
if (dataUntill) {
    data = JSON.parse(dataUntill)
} else {
    data = []
}

console.log(jinsi.value);
forma.addEventListener("submit", event => {
    event.preventDefault()

    let newUser = new database(ismi.value, familiyasi.value, guruhi.value, jinsi.value)

    data.push(newUser)
    storage.setItem("data", JSON.stringify(data))

    render(data, tbody)
    ismi.value = ""
    familiyasi.value = ""
    guruhi.value = ""
    jinsi.value = ""

})
render(data, tbody)