// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// if resolved promise result is success -`✅ Fulfilled promise in ${delay}ms`
// promise will be rejected - `❌ Rejected promise in ${delay}ms`

// після сабміту форми створює проміс
// В середині колбека цього промісу через вказану користувачем кількість мілісекунд
// проміс має виконуватися (при fulfilled) або відхилятися (при rejected), залежно від обраної опції в радіокнопках. Значенням промісу, яке передається як аргумент у методи resolve/reject, має бути значення затримки в мілісекундах.
// Створений проміс треба опрацювати у відповідних для вдалого/невдалого виконання методах.
// Якщо проміс виконується вдало, виводь у консоль наступний рядок, де delay — це значення затримки виклику промісу в мілісекундах.

const delayInputElement = document.querySelector(['input[name="delay"]']);
const formElement = document.querySelector('form');

formElement.addEventListener('submit', createPromise);

function createPromise(event) {
  event.preventDefault();

  const delayValue = delayInputElement.value.trim();
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const radioChecked = document.querySelector(
        'input[name="state"]:checked'
      );
      if (radioChecked && radioChecked.value === 'fulfilled') {
        resolve(
          iziToast.success({
            icon: '',
            message: '✅ Fulfilled promise in ' + delayValue + 'ms',
            position: 'topRight',
            messageColor: '#FFFFFF',
          })
        );
      } else {
        reject(
          iziToast.error({
            icon: '',
            message: '❌ Rejected promise in ' + delayValue + 'ms',
            position: 'topRight',
            messageColor: '#FFFFFF',
            backgroundColor: '#EA6150',
          })
        );
      }
    }, delayValue);
  });

  promise
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(final => {
      formElement.reset();
    });
}
