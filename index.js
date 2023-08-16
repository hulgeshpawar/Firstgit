//console.dir(document);
//console.log(document.URL);
//console.log(document.title);

//document.title = 123;

//console.log(document.head);
//console.log(document.all);
//console.log(document.all[18]);

//document.all[18].textContent = 'Hello';
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

// console.log(document.getElementById('header-title'));

//var hader = document.getElementById('header-title');
//hader.textContent = 'Hello';
//hader.innerText = 'Goodbye';
//console.log(hader);

// console.log(hader.innerText);
//hader.style.borderBottom='solid 3px black   '

//var header = document.getElementsByClassName('title') ;
//header[0].style.fontWeight='bold';
//header[0].style.color= 'green';

//var items = document.getElementsByClassName('list-group-item');
//items[2].style.backgroundColor= 'green';
//console.log(items);

//for(i=0;i<items.length;i++){
//    items[i].style.fontWeight = 'bold';
//}


var li = document.getElementsByTagName('li');

li[1].textContent = 'Hello2';
for (i=0;i<=li.length;i++){
    li[i].style.background = 'grey';
}
