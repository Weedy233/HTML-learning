//For random-color
const sect = document.querySelector('section');
const btn = sect.querySelector('button');
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener('click', () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    const para = document.createElement("p");
    para.textContent = rndCol;
    sect.appendChild(para);
});

btn.addEventListener("click", (event) => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    event.target.style.backgroundColor = rndCol;
    console.log(e);
});

//For form
const form = document.querySelector("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("firstName");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
    if(firstName.value === "" || lastName.value === "") {
        e.preventDefault();
        para.textContent = "You need to fill in both names!";
    }
});