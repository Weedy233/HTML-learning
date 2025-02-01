const firstSect = document.querySelector("#firstSection"); //铸币了，写错id名了
const para_1 = document.querySelector("p");

const para_2 = document.createElement("p");
para_2.textContent = "This is the second para created by main.js";

firstSect.appendChild(para_2);


const text = document.createTextNode(
    " — the premier source for web development knowledge."
);

const linkPara = document.querySelector("p"); //选择第一个p元素
linkPara.appendChild(text); //通过内部链接的方式，在上面元素之后添加段落
firstSect.appendChild(text); //这一步把刚刚添加的text重新放在了firstSection的末尾
//创建部分1与部分2之间的分割线
const hr = document.createElement("hr");
firstSect.appendChild(hr);

const secondSection = document.createElement("section");
secondSection.setAttribute("id", "secondSection");
document.appendChild(secondSection);

secondSection.appendChild(text);

para_1.style.color = "white";
para_1.style.backgroundColor = "black";
para_1.style.padding = "10px";
para_1.style.width = "250px";
para_1.style.textAlign = "center";
