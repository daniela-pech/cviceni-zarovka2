console.log('funguju!');

const zarovka = document.querySelector('.bulb');
const rozsvit = () => {
  zarovka.classList.toggle('bulb--on');
};

document.body.addEventListener('keydown', rozsvit);
