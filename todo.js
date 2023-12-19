var ul = document.getElementById('list');
console.log(ul)
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('add');
// removeButton.addEventListener('click', removeItem);


function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    // console.log(item)

    ul = document.getElementById('list');
    var textnode = document.createTextNode(item)
    // console.log(textnode)
    if (item === '') {
        return false;
        // add a p tag and assign a value of "Enter your Todo"
    } else {
        //create li
        li = document.createElement('li');
        
        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');
       
        //create label
        var label = document.createElement('label');
        label.setAttribute('for', 'item') 
        
        // add these elements on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        
        
        li.className - 'visual';

        setTimeout(() => {
            li.className = 'visual';
        }, 2);
        input.value = ''; 
    }
}