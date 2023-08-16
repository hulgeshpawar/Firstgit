var itemLi = document.querySelector('#items');               
                  
                  //1.parentElement
// itemLi.parentElement.style.backgroundColor = 'green';

                // 2. lastelementchild
// console.log(itemLi.lastElementChild.textContent = 'Hello');

                 // 3. lastchild
// console.log(itemLi.lastChild);

                // 4. createchild

                //5. firstelementchild
// itemLi.firstElementChild.textContent = 'bye'

                //6. firstchild
// console.log(itemLi.firstChild)

                //7. nextsibling
// console.log(itemLi.nextSibling);

                //8 . nextelementsibling
// itemLi.nextElementSibling.textContent= "brown";

                //9. previoussibling
// console.log(itemLi.previousSibling);

                //10. previouselementsibling
// itemLi.previousElementSibling.style.color = 'green'; 

                //11. createelement
newDiv = document.createElement('div');

                //12. setAttribute
newDiv.id = 'Idclass';
newDiv.setAttribute('tittle','Hello Div');
                //13. createtesxtnode
newdivText = document.createTextNode('Hello');
                //14. appendchild
newDiv.appendChild(newdivText );

//  Now go head and add HEllo word before Item Lister
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);

// Now go head and add HEllo word before Item 1
var newitems = document.createElement('li');
newitems.className = 'list-group-item'; 
var newitemsnode = document.createTextNode('Hello');
newitems.appendChild(newitemsnode);
var container = document.querySelector('li .container');
var firstnode = itemLi.previousElementSibling;
firstnode.appendChild(newitems);
