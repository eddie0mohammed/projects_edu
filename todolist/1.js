
const input = document.getElementById('input');
const add = document.getElementById('add');

const list = document.querySelector('.list');
const deleteButton = document.querySelectorAll('.delete');


deleteButton.forEach(elem => addEventListener('click', function(e){
    e.stopPropagation();

    
}))