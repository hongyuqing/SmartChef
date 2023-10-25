const addButton = document.querySelector('.Add a');
const textAreaContainer = document.querySelector('.Content_Convert3');
const firstTextArea = document.querySelector('.camera-button');


firstTextArea.addEventListener('dragstart', dragStart);
firstTextArea.addEventListener('dragover', dragOver);
firstTextArea.addEventListener('dragenter', dragEnter);
firstTextArea.addEventListener('dragleave', dragLeave);
firstTextArea.addEventListener('drop', dragDrop);


let draggedElement = null;

function dragStart(e) {
    draggedElement = this;
    e.dataTransfer.setData('text/plain', '');
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.style.border = '2px dashed #45BC63'; 
}

function dragLeave() {
    this.style.border = 'none'; 
}

function dragDrop(e) {
    e.preventDefault();
    if (draggedElement && draggedElement !== this) {

        textAreaContainer.insertBefore(draggedElement, this.nextSibling);
        draggedElement = null;
    }
    this.style.border = 'none';
}

let textAreaCounter = 2;
addButton.addEventListener('click', function () {
    const newTextAreaContainer = firstTextArea.cloneNode(true);
    const newTextArea = newTextAreaContainer.querySelector('textarea');

    const newId = `textField${textAreaCounter}`;
    newTextArea.setAttribute('id', newId);

    newTextArea.value = '';

    newTextAreaContainer.addEventListener('dragstart', dragStart);
    newTextAreaContainer.addEventListener('dragover', dragOver);
    newTextAreaContainer.addEventListener('dragenter', dragEnter);
    newTextAreaContainer.addEventListener('dragleave', dragLeave);
    newTextAreaContainer.addEventListener('drop', dragDrop);

    textAreaContainer.appendChild(newTextAreaContainer);
    textAreaCounter++;
});

