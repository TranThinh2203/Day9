const pBai1 = document.getElementById('p-bai1');
const btnBai1 = document.getElementById('btn-bai1');
btnBai1.addEventListener('click', function () {
  pBai1.textContent = "Chào bạn đến với JavaScript DOM";
});

const box = document.getElementById('box');
document.getElementById('red-btn').addEventListener('click', function () {
  box.style.backgroundColor = 'red';
});
document.getElementById('green-btn').addEventListener('click', function () {
  box.style.backgroundColor = 'green';
});
document.getElementById('yellow-btn').addEventListener('click', function () {
  box.style.backgroundColor = 'yellow';
});

const pBai3 = document.getElementById('p-bai3');
document.getElementById('hide-btn').addEventListener('click', function () {
  pBai3.style.display = 'none';
});
document.getElementById('show-btn').addEventListener('click', function () {
  pBai3.style.display = 'block';
});

const list = document.getElementById('my-list');
const addBtn = document.getElementById('add-item-btn');
addBtn.addEventListener('click', function () {
  const li = document.createElement('li');
  li.textContent = 'Item mới';
  list.appendChild(li);
});

const nameInput = document.getElementById('name');
const greetBtn = document.getElementById('greet-btn');
greetBtn.addEventListener('click', function () {
  const name = nameInput.value.trim();
  if (name.length === 0) {
    alert('Vui lòng nhập tên của bạn.');
  } else {
    alert('Xin chào, ' + name + '!');
  }
});
