var form = document.getElementById('addForm');
var itemList  = document.getElementById('items');

// form submit event
form.addEventListener('submit',addItem);

// Delete event
itemList.addEventListener('click',removeItem );

// Add item
function addItem(e){
    e.preventDefault();

// Get input value
var newItem =  document.getElementById('item').value;

// create new li element
var li = document.createElement('li');

// Add class
li.className = 'list-group-item';

// Add text node with inout value
li.appendChild(document.createTextNode(newItem));

// crete del buttun
var deleteBtn = document.createElement('button');

// create Edit button
var editBtn = document.createElement('button');

//Append text node
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

editBtn.className = 'btn btn-sm float-right';

//Append Text node 

deleteBtn.appendChild(document.createTextNode('X'));

editBtn.appendChild(document.createTextNode('Edit'));

// append li button to list
li.appendChild(deleteBtn);

li.appendChild(editBtn);

itemList.appendChild(li);

}

function removeItem(e){
    if (e.target.classList.contains('delete')){
        if (confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}