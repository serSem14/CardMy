'use strict';
let profile = document.querySelector('.section1');
let button1 = document.querySelectorAll('.nav_wrapper_block_wrapperlogo_links')[1];
let wrapper1 = document.querySelectorAll('.nav_wrapper_block_wrapperlogo')[1];
let selectLit;

button1.addEventListener('click', function(event) {
    let elem = event.target;
    if (elem.className !== 'nav_wrapper_block_wrapperlogo') {
        return;
    }
    active(elem);
});

function active(name) {
    if (selectLit) {
        selectLit.classList.remove('active');
    }
    selectLit = name;
    selectLit.classList.add('active');
}