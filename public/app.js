const randomColorBtn = document.querySelector('.random-colour');
const hexLabel = document.getElementById('hex');

const randomNumber = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};
const backgroundColor = () => {
  document.body.style.backgroundColor = '#' + randomNumber();
  hexLabel.textContent = '#' + randomNumber();
};
randomColorBtn.addEventListener('click', backgroundColor);
