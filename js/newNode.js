export default function({ ismi, familiyasi, guruhi, jinsi }, soni) {
    let template = document.getElementById("template")
    let copyTemplate = template.content.cloneNode("true")

    copyTemplate.querySelector(".number").textContent = soni
    copyTemplate.querySelector(".ismi").textContent = ismi
    copyTemplate.querySelector(".familiyasi").textContent = familiyasi
    copyTemplate.querySelector(".guruhi").textContent = guruhi
    copyTemplate.querySelector(".jinsi").textContent = jinsi
        // console.log(copyTemplate.querySelector(".jinsi").textContent = jinsi);

    return copyTemplate;
}