import newNode from "./newNode.js";

export default function(data, tbody) {
    let frag = document.createDocumentFragment()
    data.forEach((dataObject, index) => {
        let TR = newNode(dataObject, index + 1)
        frag.append(TR)
    });

    tbody.innerHTML = null;
    tbody.append(frag)
}