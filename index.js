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
    const text = itemText.value;
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = '<div class="task"><button class="item-btn"><i class="far fa-circle"></i></button>' + text +
        '</div><button class="item-btn"><i class="fas fa-xmark"></i></button>'
    items.appendChild(newItem);

    hideAddItem();
}

