const modalWindow = document.querySelector('.Feature__modal');

const openModal = () => {
	modalWindow.classList.add('opened');
	document.body.style.overflow = 'hidden';
};

const closeModal = () => {
	modalWindow.classList.remove('opened');
	document.body.style.overflow = ' ';
};
