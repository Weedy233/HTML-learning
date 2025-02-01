const output = document.querySelector("#output");

function handleClick(e) {
    output.textContent += `You clicked ${e.target.tagName}\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);