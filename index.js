const addItemBtn = document.querySelector('.add-item');
const addInput = document.querySelector('#add-input');
const addInputBtn = document.querySelector('#add-input-btn');
const itemText = document.querySelector('#item-text');
const items = document.querySelector('.items');

addItemBtn.addEventListener('click', showAddItem);
addInputBtn.addEventListener('click', addItem);

function showAddItem() {
    itemText.value = '';
    addItemBtn.style.display = 'none';
    addInput.style.display = 'flex';
}

function hideAddItem() {
    addInput.style.display = 'none';
    addItemBtn.style.display = 'flex';
}

function addItem(){
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