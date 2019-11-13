
const input = document.getElementById('input');
const add = document.getElementById('add');

const list = document.querySelector('.list');
const deleteButton = document.querySelectorAll('.delete');

// let todolist = ['Walk the dog', 'Learn to code', 'Exercise'];


add.addEventListener('click', function(e){

    e.stopImmediatePropagation();
    
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.innerHTML = 'X';
    span.classList.add('delete');

    li.innerHTML = `${input.value}`;
    li.appendChild(span);

    list.appendChild(li);
    input.value = '';
})


// deleteButton.forEach(elem => {

//     elem.addEventListener('click', function(e) {
//     e.stopImmediatePropagation();

//     elem.parentElement.style.display = 'none';
//     // console.log(elem);
    
// })

// });

list.addEventListener('click', function(e){
    e.stopImmediatePropagation();

    // list.classList.toggle('test');
    // list.children.classList.toggle('test');
    // console.log(list.children);

    if (e.target.parentElement = 'li'){
        // e.target.parentElement.style.display = 'none';
        console.log(e.target.parentElement);

    }

    // e.target.classList.toggle('test');

})

