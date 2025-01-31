var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
let products =[ 
    'Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99'
];
for (var i = 0; i < products.length; i++) {
  // number 3
  var subArray = products[i].split(':');
  num = Number(subArray[1]);
  // number 4
  total += num;
  // number 5
  itemText = subArray[0] + " —— $" + subArray[1];
  
  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);

var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
  // 如果搜索框不为空，我们则将搜索词添加到开头
  if (searchInput.value !== '') {
    myHistory.shift(searchInput.value)

    // 清空显示的搜索关键词列表，防止显示
    // 每次输入搜索词都会重新生成显示的内容
    list.innerHTML = '';

    // 通过循环遍历，显示所有的搜索关键词
    for (var i = 0; i < myHistory.length; i++) {
      var itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // 如果数组的长度大于 5，那么便移除旧的搜索关键词
    if (myHistory.length >= 5) {
    myHistory.pop();

    }

    // 清空并聚焦到搜索框，准备下一次的搜索
    searchInput.value = '';
    searchInput.focus();
  }
}
