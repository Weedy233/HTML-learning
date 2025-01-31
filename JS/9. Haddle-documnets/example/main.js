const link = document.querySelector("#link-to-mozilla");

link.textContent = "Mozilla Developer Network"
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "This the first para of the section."
sect.appendChild(para);

const text = document.createTextNode(
    "This is the second para of the section."
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);