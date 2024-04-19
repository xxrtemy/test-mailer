"use strict"

const btn = document.querySelector('.btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal-content');
const cross = document.querySelector('.modal-cross');


	btn.addEventListener('click', () => {
		modalOverlay.classList.add('modal-overlay--visible');
        modal.classList.add('modal-content--visible')
	});


    modalOverlay.addEventListener('click', (e) => {
        if (e.target == modalOverlay) {
            modalOverlay.classList.remove('modal-overlay--visible');
            modal.classList.remove('modal-content--visible');
        }
    });

    cross.addEventListener('click', () => {
        modalOverlay.classList.remove('modal-overlay--visible');
        modal.classList.remove('modal-content--visible');
    });
    