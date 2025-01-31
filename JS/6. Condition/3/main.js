const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  if (month === "二月") {
    days = 28;
  } else if (
    month === "四月" ||
    month === "六月" ||
    month === "九月" ||
    month === "十一月"
  ) {
    days = 30;
  }

  // 在这里添加条件语句

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "一月";
createCalendar("一月");
