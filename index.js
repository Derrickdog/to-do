// const items = document.querySelector('#items');
const buttons = document.querySelector('.btns');

const addItemBtn = document.querySelector('.add-item');
const addInput = document.querySelector('#add-input');
const addInputBtn = document.querySelector('#add-input-btn');
const itemText = document.querySelector('#item-text');

const addListBtn = document.getElementById('list-add');
const listInput = document.getElementById('list-input');
const listInputBtn = document.getElementById('list-btn')
const listText = document.getElementById('list-text');

addItemBtn.addEventListener('click', showAddItem);
addInputBtn.addEventListener('click', addItem);

addListBtn.addEventListener('click', showAddList);
listInputBtn.addEventListener('click', addList);

document.getElementById('To Do').addEventListener('click', openList);

function showAddItem() {
    itemText.value = '';
    addItemBtn.style.display = 'none';
    addInput.style.display = 'flex';
}

function hideAddItem() {
    addInput.style.display = 'none';
    addItemBtn.style.display = 'flex';
}

function showAddList() {
    listText.value = '';
    addListBtn.style.display = 'none';
    listInput.style.display = 'flex';
}

function hideAddList(){
    listInput.style.display = 'none';
    addListBtn.style.display = 'flex';
}

function addItem(){
    const items = document.querySelector(".current");

    const newItem = document.createElement('div');
    newItem.classList.add('item');

    const task = document.createElement('div');
    task.classList.add('task');

    const circleBtn = document.createElement('button');
    circleBtn.classList.add('item-btn');
    circleBtn.id = 'circle-btn';
    circleBtn.innerHTML = '<i class="far fa-circle"></i>';
    circleBtn.addEventListener('click', circleClose);
    task.appendChild(circleBtn);

    const p = document.createElement('p');
    p.textContent = itemText.value;
    task.appendChild(p);

    const xBtn = document.createElement('button');
    xBtn.classList.add('item-btn');
    xBtn.id = 'x-btn';
    xBtn.innerHTML = '<i class="fas fa-xmark"></i>';
    xBtn.addEventListener('click', xClose);

    newItem.appendChild(task);
    newItem.appendChild(xBtn);

    items.appendChild(newItem);
    
    hideAddItem();
}

function circleClose(e) {
    e.target.parentNode.parentNode.parentNode.remove();
}

function xClose(e) {
    e.target.parentNode.parentNode.remove();
}

function addList(){
    const newBtn = document.createElement('button');
    newBtn.classList.add('nav-btn');
    newBtn.id = listText.value;
    newBtn.textContent = listText.value;
    newBtn.addEventListener('click', openList);
    buttons.appendChild(newBtn);
    buttons.appendChild(document.createElement('br'));
    
    const newDiv = document.createElement('div');
    newDiv.id = listText.value +"div";
    document.getElementById('all-items').appendChild(newDiv);

    hideAddList();
}

function openList(e) {
    const newId = e.target.id;

    const currentButton = document.querySelector('.active');
    currentButton.classList.remove('active');

    const nextButton = document.getElementById(newId);
    nextButton.classList.add('active');

    document.getElementById('current-head').textContent = newId;

    const currentList = document.querySelector('.current');
    currentList.classList.remove('current');
    currentList.style.display = 'none';

    const nextList = document.getElementById(newId +"div");
    nextList.classList.add('current');
    nextList.style.display = 'block';
}