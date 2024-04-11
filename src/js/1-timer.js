// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const inputElement = document.querySelector('input[type="text"]');
const buttonElement = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
let userSelectedDate;

buttonElement.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);

    if (selectedDates[0] < new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        backgroundColor: '#EA6150',
      });
      buttonElement.disabled = true;
    } else {
      buttonElement.disabled = false;
    }
    userSelectedDate = selectedDates[0];
  },
};

// слухач подій з колбеком
buttonElement.addEventListener('click', onButtonClick);
// колбек
function onButtonClick() {
  buttonElement.disabled = true;
  const setIntervalId = setInterval(() => {
    let currentTime = null;

    if (userSelectedDate) {
      currentTime = userSelectedDate - Date.now();
    }

    const { days, hours, minutes, seconds } = convertMs(currentTime);
    if (currentTime > 0) {
      daysRef.textContent = addLeadingZero(days);
      hoursRef.textContent = addLeadingZero(hours);
      minutesRef.textContent = addLeadingZero(minutes);
      secondsRef.textContent = addLeadingZero(seconds);
    } else {
      clearInterval(setIntervalId);
      buttonElement.disabled = false;
    }
  }, 1000);
}
flatpickr(inputElement, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// Для підрахунку значень використовуй готову функцію convertMs,
// де ms — різниця між кінцевою і поточною датою в мілісекундах.

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
