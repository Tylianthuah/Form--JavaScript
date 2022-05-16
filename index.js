const form = document.querySelector('#form');
const inputName = document.querySelector('#name');
const inputKhua = document.querySelector('#khua');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const message = document.querySelector('#message');
const users = document.querySelector('.item');
const display = document.querySelector('.msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (
    inputName.value == '' ||
    inputKhua.value == '' ||
    inputEmail.value == '' ||
    inputPhone.value == '' ||
    message.value == ''
  ) {
    display.classList.add('error');
    display.textContent = 'Please enter all the required field';
    ('Please fill in all the options');

    setTimeout(function () {
      document.querySelector('.msg').style.display = 'none';
    }, 1000);
  } else {
    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(
        'Name: ' +
          inputName.value +
          '     ' +
          ' Email: ' +
          inputEmail.value +
          '  ' +
          ' Khua: ' +
          inputKhua.value +
          '  ' +
          ' Phone: ' +
          inputPhone.value +
          '  ' +
          ' Message: ' +
          message.value
      )
    );

    users.classList.add('user');
    users.appendChild(li);

    inputName.value = '';
    inputKhua.value = '';
    inputEmail.value = '';
    inputPhone.value = '';
    message.value = '';
  }
});
